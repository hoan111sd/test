function prepareRatings(ratings) {
  // console.log("aaaa", ratingCountsByMovie);
  // console.log("aaaa", ratingCountsByUser);

  const ratingsGroupedByUser = getRatingsGroupedByUser(ratings);

  const ratingsGroupedByItem = getRatingsGroupedByProduct(ratings);

  return {
    ratingsGroupedByUser,
    ratingsGroupedByItem
  };
}

function getRatingsGroupedByUser(ratings) {
  return ratings.reduce((result, value) => {
    console.log(value);
    const { userId, productID, rating } = value;

    if (!result[userId]) {
      result[userId] = {};
    }

    result[userId][productID] = { rating: Number(rating) };

    return result;
  }, {});
}

function getRatingsGroupedByProduct(ratings) {
  return ratings.reduce((result, value) => {
    const { userId, productID, rating } = value;

    if (!result[productID]) {
      result[productID] = {};
    }

    result[productID][userId] = { rating: Number(rating) };

    return result;
  }, {});
}

module.exports = prepareRatings;
