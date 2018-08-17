const similarity = require("compute-cosine-similarity");

function sortByScore(recommendation) {
  return recommendation.sort((a, b) => b.score - a.score);
}

function getCosineSimilarityRowVector(matrix, index) {
  return matrix.map((rowRelative, i) => {
    let a = similarity(matrix[index], matrix[i]);
    return a;
  });
}

function getItemIndexByTitle(PRODUCTS_IN_LIST, query) {
  console.log(query);
  const index = PRODUCTS_IN_LIST.map(item => item.title).indexOf(query);
  if (index < 0) {
    throw new Error("item not found");
  }

  const { title, id } = PRODUCTS_IN_LIST[index];
  return { index, title, id };
}
module.exports = {
  sortByScore,
  getItemIndexByTitle,
  getCosineSimilarityRowVector
};
