const { getCosineSimilarityRowVector, sortByScore } = require("./common");

const math = require("mathjs");

function predictWithCfItemBased(
  ratingsGroupedByUser,
  ratingsGroupedByItem,
  userId
) {
  const { itemUser } = getMatrices(
    ratingsGroupedByUser,
    ratingsGroupedByItem,
    userId
  );
  const { matrix, itemIds, userIndex } = itemUser;

  const matrixNormalized = meanNormalizeByRowVector(matrix);
  const userRatingsRowVector = getUserRatingsRowVector(
    matrixNormalized,
    userIndex
  );

  const predictedRatings = userRatingsRowVector.map((rating, itemIndex) => {
    const itemId = itemIds[itemIndex];

    const cosineSimilarityRowVector = getCosineSimilarityRowVector(
      matrixNormalized,
      itemIndex
    );

    let score;
    if (rating === 0) {
      score = getPredictedRating(
        userRatingsRowVector,
        cosineSimilarityRowVector
      );
    } else {
      score = rating;
    }

    return { score, itemId };
  });

  return {
    cfItemBasedRecommendation: sortByScore(predictedRatings),
    ratingsGroupedByUser
  };
}

function getMatrices(ratingsGroupedByUser, ratingsGroupedByItem, uId) {
  const itemUser = Object.keys(ratingsGroupedByItem).reduce(
    (result, itemId) => {
      const rowVector = Object.keys(ratingsGroupedByUser).map(
        (userId, userIndex) => {
          if (userId == uId) {
            result.userIndex = userIndex;
          }

          return getConditionalRating(ratingsGroupedByItem, itemId, userId);
        }
      );
      result.matrix.push(rowVector);
      result.itemIds.push(itemId);

      return result;
    },
    { matrix: [], itemIds: [], userIndex: null }
  );

  const userItem = Object.keys(ratingsGroupedByUser).reduce(
    (result, userId, userIndex) => {
      const rowVector = Object.keys(ratingsGroupedByItem).map(itemId => {
        return getConditionalRating(ratingsGroupedByUser, userId, itemId);
      });

      result.matrix.push(rowVector);

      if (userId == uId) {
        result.userIndex = userIndex;
      }

      return result;
    },
    {
      matrix: [],
      itemIds: Object.keys(ratingsGroupedByItem),
      userIndex: null
    }
  );

  return { itemUser, userItem };
}

function meanNormalizeByRowVector(matrix) {
  return matrix.map(rowVector => {
    return rowVector.map(cell => {
      return cell !== 0 ? cell - getMean(rowVector) : cell;
    });
  });
}

function getConditionalRating(value, primaryKey, secondaryKey) {
  if (!value[primaryKey]) {
    return 0;
  }

  if (!value[primaryKey][secondaryKey]) {
    return 0;
  }

  return value[primaryKey][secondaryKey].rating;
}
function getMovieRatingsRowVector(userBasedMatrix, movieIndex) {
  return userBasedMatrix.map(userRatings => {
    return userRatings[movieIndex];
  });
}

function getMean(rowVector) {
  const valuesWithoutZeroes = rowVector.filter(cell => cell !== 0);
  return valuesWithoutZeroes.length ? math.mean(valuesWithoutZeroes) : 0;
}

function getPredictedRating(ratingsRowVector, cosineSimilarityRowVector) {
  const N = 5;
  const neighborSelection = cosineSimilarityRowVector
    // keep track of rating and similarity
    .map((similarity, index) => ({
      similarity,
      rating: ratingsRowVector[index]
    }))
    // only neighbors with a rating
    .filter(value => value.rating !== 0)
    // most similar neighbors on top
    .sort((a, b) => b.similarity - a.similarity)
    // N neighbors
    .slice(0, N);

  const numerator = neighborSelection.reduce((result, value) => {
    return result + value.similarity * value.rating;
  }, 0);

  const denominator = neighborSelection.reduce((result, value) => {
    return result + math.pow(value.similarity, 2);
  }, 0);

  return numerator / math.sqrt(denominator);
}

function getRatingsGroupedByMovie(
  ratings,
  ratingCountsByMovie,
  ratingCountsByUser,
  popularityThreshold
) {
  const { movieRatings, userRatings } = popularityThreshold;

  return ratings.reduce((result, value) => {
    const { userId, itemId, rating } = value;

    if (
      ratingCountsByMovie[itemId] < movieRatings ||
      ratingCountsByUser[userId] < userRatings
    ) {
      return result;
    }

    if (!result[itemId]) {
      result[itemId] = {};
    }

    result[itemId][userId] = { rating: Number(rating) };

    return result;
  }, {});
}
function getUserRatingsRowVector(itemBasedMatrix, userIndex) {
  return itemBasedMatrix.map(itemRatings => {
    return itemRatings[userIndex];
  });
}
function getRatingsGroupedByUser(ratings, ratingCounts, popularity) {
  return ratings.reduce((result, value) => {
    const { userId, itemId, rating } = value;

    if (ratingCounts[itemId] < popularity) {
      return result;
    }

    if (!result[userId]) {
      result[userId] = {};
    }

    result[userId][itemId] = { rating: Number(rating) };

    return result;
  }, {});
}

function getRatingCountsByUser(ratings) {
  return ratings.reduce((result, value) => {
    const { userId, rating } = value;

    if (!result[userId]) {
      result[userId] = 0;
    }

    result[userId]++;

    return result;
  }, {});
}

function getRatingCountsByMovie(ratings) {
  return ratings.reduce((result, value) => {
    const { itemId, rating } = value;

    if (!result[itemId]) {
      result[itemId] = 0;
    }

    result[itemId]++;
    return result;
  }, {});
}

function byId(moviesById, movie) {
  moviesById[movie.id] = movie;
  return moviesById;
}

function zip(items) {
  return Object.keys(items).map(mId => ({
    ...items[mId]
  }));
}

module.exports = {
  predictWithCfItemBased
};
