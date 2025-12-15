import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'friendlyeats-web',
  location: 'us-east4'
};

export const createPublicMovieListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePublicMovieList', inputVars);
}
createPublicMovieListRef.operationName = 'CreatePublicMovieList';

export function createPublicMovieList(dcOrVars, vars) {
  return executeMutation(createPublicMovieListRef(dcOrVars, vars));
}

export const getMyPrivateMovieListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyPrivateMovieLists');
}
getMyPrivateMovieListsRef.operationName = 'GetMyPrivateMovieLists';

export function getMyPrivateMovieLists(dc) {
  return executeQuery(getMyPrivateMovieListsRef(dc));
}

export const addMovieToMyListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddMovieToMyList', inputVars);
}
addMovieToMyListRef.operationName = 'AddMovieToMyList';

export function addMovieToMyList(dcOrVars, vars) {
  return executeMutation(addMovieToMyListRef(dcOrVars, vars));
}

export const deleteMyReviewRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteMyReview', inputVars);
}
deleteMyReviewRef.operationName = 'DeleteMyReview';

export function deleteMyReview(dcOrVars, vars) {
  return executeMutation(deleteMyReviewRef(dcOrVars, vars));
}

