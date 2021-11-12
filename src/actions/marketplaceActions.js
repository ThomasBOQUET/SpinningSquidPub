export const MARKETPLACE_ON_LOADING = 'MARKETPLACE_ON_LOADING';
export const GET_MARKETPLACE_INITIAL_LIST = 'GET_MARKETPLACE_INITIAL_LIST';
export const GET_MARKETPLACE_INITIAL_LIST_SUCCESS = 'GET_MARKETPLACE_INITIAL_LIST_SUCCESS';
export const GET_MARKETPLACE_ARTICLE_LIST = 'GET_MARKETPLACE_ARTICLE_LIST';
export const GET_MARKETPLACE_ARTICLE_DETAILS = 'GET_MARKETPLACE_ARTICLE_DETAILS';
export const GET_MARKETPLACE_ARTICLE_LIST_SUCCESS = 'GET_MARKETPLACE_ARTICLE_LIST_SUCCESS';
export const POST_MARKETPLACE_ADD_ARTICLE = 'POST_MARKETPLACE_ADD_ARTICLE';
export const POST_MARKETPLACE_ADD_ARTICLE_SUCCESS = 'POST_MARKETPLACE_ADD_ARTICLE_SUCCESS';
export const POST_MARKETPLACE_UPDATE_ARTICLE = 'POST_MARKETPLACE_UPDATE_ARTICLE';
export const POST_MARKETPLACE_UPDATE_ARTICLE_SUCCESS = 'POST_MARKETPLACE_UPDATE_ARTICLE_SUCCESS';
export const POST_MARKETPLACE_DELETE_ARTICLE = 'POST_MARKETPLACE_DELETE_ARTICLE';
export const POST_MARKETPLACE_DELETE_ARTICLE_SUCCESS = 'POST_MARKETPLACE_DELETE_ARTICLE_SUCCESS';

export const callGetMarketplaceList = () => ({
  type: GET_MARKETPLACE_INITIAL_LIST,
});
export const successMarketplaceInitialSearch = (data) => ({
  type: GET_MARKETPLACE_INITIAL_LIST_SUCCESS,
  responseApi: data,
  loaded: true,
});
export const setOnLoadingStatus = () => ({
  type: MARKETPLACE_ON_LOADING,
});
export const submitMarketplaceSearch = () => ({
  type: GET_MARKETPLACE_ARTICLE_LIST,
});
export const submitMarketplaceSearchDetails = (options) => ({
  type: GET_MARKETPLACE_ARTICLE_DETAILS,
  id: options,
});
export const successMarketplaceSearch = (data) => ({
  type: GET_MARKETPLACE_ARTICLE_LIST_SUCCESS,
  responseApi: data,
  loaded: true,
});

//----------------------------------------------------

export const submitMarketplaceAddArticle = () => ({
  type: POST_MARKETPLACE_ADD_ARTICLE,
});
export const successMarketplaceAddArticle = (message) => ({
  type: POST_MARKETPLACE_ADD_ARTICLE_SUCCESS,
  message_success: message,
});
export const submitMarketplaceUpdateArticle = () => ({
  type: POST_MARKETPLACE_UPDATE_ARTICLE,
});
export const successMarketplaceUpdateArticle = (message) => ({
  type: POST_MARKETPLACE_UPDATE_ARTICLE_SUCCESS,
  message_success: message,
});
export const submitMarketplaceDeleteArticle = () => ({
  type: POST_MARKETPLACE_DELETE_ARTICLE,
});
export const successMarketplaceDeleteArticle = (message) => ({
  type: POST_MARKETPLACE_DELETE_ARTICLE_SUCCESS,
  message_success: message,
});
