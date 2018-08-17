const natural = require("natural");

natural.PorterStemmer.attach();

var getConnection = require("../config/database");

function prepareProducts(productsMetaData) {
  console.log("Prepare Products");
  // console.log(productsMetaData);
  let PRODUCTS_IN_LIST = zip(productsMetaData);
  // {
  //   _id: {
  //     product
  //   }
  // ,_id2 : {
  //     product
  //   }
  // }
  // phan tich truong overview thanh mang nhieu objects moi object la 1 tu
  PRODUCTS_IN_LIST = withTokenizedAndStemmed(PRODUCTS_IN_LIST, "overview");

  PRODUCTS_IN_LIST = fromArrayToMap(PRODUCTS_IN_LIST, "overview");




  let PRODUCTS_BY_ID = PRODUCTS_IN_LIST.reduce(byId, {});
  // object gom nhieu truong moi truong la id cua product


  let DICTIONARIES = prepareDictionaries(PRODUCTS_IN_LIST);
  // DUONG SANG DA 
  // product 2: 1 1 0
  // tao dictionries vi du product 1 truong overview la: "duong sang da", product2 truong overview la: "duong sang",
  //  dictionatires la : {duong: {
  //   id: duong,
  //   value: duong,
  //   count: 2
  // }, ....}

  let X = PRODUCTS_IN_LIST.map(toFeaturizedProducts(DICTIONARIES));

  let {
    means,
    ranges
  } = getCoefficients(X);
  X = synthesizeFeatures(X, means, [0, 1, 2, 3, 4, 5, 6]);
  // console.log(X);
  X = scaleFeatures(X, means, ranges);

  return {
    PRODUCTS_BY_ID: PRODUCTS_BY_ID,
    PRODUCTS_IN_LIST: PRODUCTS_IN_LIST,
    X
  };
}

function scaleFeatures(X, means, ranges) {
  return X.map(row => {
    return row.map((feature, key) => {
      return (feature - means[key]) / ranges[key];
    });
  });
}

function getCoefficients(X) {
  const M = X.length;

  const initC = {
    sums: [],
    mins: [],
    maxs: []
  };

  const helperC = X.reduce((result, row) => {
    if (row.includes("undefined")) {
      return result;
    }

    return {
      sums: row.map((feature, key) => {
        if (result.sums[key]) {
          return result.sums[key] + feature;
        } else {
          return feature;
        }
      }),
      mins: row.map((feature, key) => {
        if (result.mins[key] === "undefined") {
          return result.mins[key];
        }

        if (result.mins[key] <= feature) {
          return result.mins[key];
        } else {
          return feature;
        }
      }),
      maxs: row.map((feature, key) => {
        if (result.maxs[key] === "undefined") {
          return result.maxs[key];
        }

        if (result.maxs[key] >= feature) {
          return result.maxs[key];
        } else {
          return feature;
        }
      })
    };
  }, initC);

  const means = helperC.sums.map(value => value / M);
  const ranges = helperC.mins.map((value, key) => helperC.maxs[key] - value);

  return {
    ranges,
    means
  };
}

function synthesizeFeatures(X, means, featureIndexes) {
  return X.map(row => {
    return row.map((feature, key) => {
      if (featureIndexes.includes(key) && feature === "undefined") {
        return means[key];
      } else {
        return feature;
      }
    });
  });
}

function toFeaturizedProducts(dictionaries) {
  return function toFeatureVector(product, index) {
    const featureVector = [];

    featureVector.push(toFeaturizedNumber(product, "rating"));
    featureVector.push(toFeaturizedNumber(product, "ratingCount"));

    featureVector.push(
      ...toFeaturizedFromDictionary(
        product,
        dictionaries.brandDictionary,
        "brand"
      )
    );
    featureVector.push(
      ...toFeaturizedFromDictionary(
        product,
        dictionaries.categoryDictionary,
        "category"
      )
    );
    featureVector.push(
      ...toFeaturizedFromDictionary(
        product,
        dictionaries.overviewDictionary,
        "overview"
      )
    );

    // featureVector.push(
    //   ...toFeaturizedFromDictionary(
    //     product,
    //     dictionaries.keywordsDictionary,
    //     "keywords"
    //   )
    // );

    return featureVector;
  };
}

function toFeaturizedFromDictionary(movie, dictionary, property) {
  const propertyIds = (movie[property] || []).map(value => value.id);
  const isIncluded = value => (propertyIds.includes(value.id) ? 1 : 0);
  return dictionary.map(isIncluded);
}

function toFeaturizedNumber(movie, property) {
  const number = Number(movie[property]);
  if (number > 0 || number === 0) {
    return number;
  } else {
    return "undefined";
  }
}

function prepareDictionaries(products) {
  let brandDictionary = toDictionary(products, "brand");
  let categoryDictionary = toDictionary(products, "category");
  // let keywordsDictionary = toDictionary(products, "keywords");
  let overviewDictionary = toDictionary(products, "overview");

  brandDictionary = filterByThreshold(brandDictionary, 1);
  categoryDictionary = filterByThreshold(categoryDictionary, 1);
  // keywordsDictionary = filterByThreshold(keywordsDictionary, 10);
  overviewDictionary = filterByThreshold(overviewDictionary, 150);
  return {
    brandDictionary,
    categoryDictionary,
    // keywordsDictionary,
    overviewDictionary
  };
}

function toDictionary(array, property) {
  const dictionary = {};

  array.forEach(value => {
    (value[property] || []).forEach(innerValue => {
      if (!dictionary[innerValue.id]) {
        dictionary[innerValue.id] = {
          ...innerValue,
          count: 1
        };
      } else {
        dictionary[innerValue.id] = {
          ...dictionary[innerValue.id],
          count: dictionary[innerValue.id].count + 1
        };
      }
    });
  });
  // console.log("========> ", dictionary);
  return dictionary;
}

function filterByThreshold(dictionary, threshold) {
  return Object.keys(dictionary)
    .filter(key => dictionary[key].count > threshold)
    .map(key => dictionary[key]);
}

function byId(productsById, product) {
  productsById[product._id] = product;
  return productsById;
}

function withTokenizedAndStemmed(array, property) {
  return array.map(value => ({
    ...value,
    [property]: value[property].tokenizeAndStem()
  }));
}

function fromArrayToMap(array, property) {
  return array.map(value => {
    const transformed = value[property].map(value => ({
      id: value,
      name: value
    }));

    return { ...value,
      [property]: transformed
    };
  });
}

function zip(products) {
  return Object.keys(products).map(pId => {
    let category = products[pId].category;
    let brand = products[pId].brand;
    let product = {
      ...products[pId],
      category: [category],
      brand: [brand]
    };
    return product;
  });
}

module.exports = prepareProducts;