const {
  getCosineSimilarityRowVector,
  sortByScore,
  getItemIndexByTitle
} = require("./common");

function predictWithContentBased(X, PRODUDCTS_IN_LIST, title) {
  const { index } = getItemIndexByTitle(PRODUDCTS_IN_LIST, title);

  // Compute similarities based on input movie

  // X la ma tran vect word mà mỗi cột đại diện cho 1 sp
  // index là sản phẩm đang xem
  // cosin: tính score, lấy ra sp có score top 10
  const cosineSimilarityRowVector = getCosineSimilarityRowVector(X, index);
  const contentBasedRecommendation = cosineSimilarityRowVector.map(
    (value, key) => {
      return {
        score: value,
        movieId: PRODUDCTS_IN_LIST[key]._id
      };
    }
  );

  return sortByScore(contentBasedRecommendation);
}

module.exports = predictWithContentBased;