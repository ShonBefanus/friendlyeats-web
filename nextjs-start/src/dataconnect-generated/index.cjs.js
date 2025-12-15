const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'friendlyeats-web',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createPublicMovieListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePublicMovieList', inputVars);
}
createPublicMovieListRef.operationName = 'CreatePublicMovieList';
exports.createPublicMovieListRef = createPublicMovieListRef;

exports.createPublicMovieList = function createPublicMovieList(dcOrVars, vars) {
  return executeMutation(createPublicMovieListRef(dcOrVars, vars));
};

const getMyPrivateMovieListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyPrivateMovieLists');
}
getMyPrivateMovieListsRef.operationName = 'GetMyPrivateMovieLists';
exports.getMyPrivateMovieListsRef = getMyPrivateMovieListsRef;

exports.getMyPrivateMovieLists = function getMyPrivateMovieLists(dc) {
  return executeQuery(getMyPrivateMovieListsRef(dc));
};

const addMovieToMyListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddMovieToMyList', inputVars);
}
addMovieToMyListRef.operationName = 'AddMovieToMyList';
exports.addMovieToMyListRef = addMovieToMyListRef;

exports.addMovieToMyList = function addMovieToMyList(dcOrVars, vars) {
  return executeMutation(addMovieToMyListRef(dcOrVars, vars));
};

const deleteMyReviewRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteMyReview', inputVars);
}
deleteMyReviewRef.operationName = 'DeleteMyReview';
exports.deleteMyReviewRef = deleteMyReviewRef;

exports.deleteMyReview = function deleteMyReview(dcOrVars, vars) {
  return executeMutation(deleteMyReviewRef(dcOrVars, vars));
};
