export const KEY = {
  AUTH_PREFIX: 'Bearer',
  XSRF_TOKEN: 'xsrf123token',
  ACCESS_TOKEN: 'accsjks12nm', // Note: Keep different for each project
  REFRESH_TOKEN: 'ref298dfsfl', // Note: Keep different for each project
  CLIENT_KEY: 'autskjkmbsh',
  EXCLUDE_TOASTER: 'excludeToaster',
  HIDE_LOADER: 'hideLoader',
  USER_TYPE_ID: 'userTypeID',
  ROLE_TYPE_ID: 'roleTypeID',
  SELECTED_LANGUAGE: 'selectedLanguage',
  REMEMBER_EMAIL: 'rememberEmail',
  USER_NAME: 'userName',
  LANGUAGE: 'language',
  DATE_FORMAT_ID: 'dateFormatId',
  SUPPLIER_BUYER_ACCOUNT_ID: 'supplierBuyerAccountID',
  SUPPLIER_BUYER_ACCOUNT_NAME: 'supplierBuyerAccountName',
  PRODUCT_REQUEST_PAGE_NAME: 'productRequestPageName',
};

export const HEADER_KEY = {
  BUYER_ACCOUNT_ID: 'BuyerAccountId',
  AUTHORIZATION: 'Authorization',
  BEARER: 'Bearer',
  X_XSRF_TOKEN: 'X-XSRF-TOKEN',
  REQUEST_SOURCE: 'RequestSource',
  CONTENT_TYPE: 'Content-Type',
};

export enum MESSAGE_TYPE {
  MISSING_ACCESS_TOKEN = 1001,
  INVALID_ACCESS_TOKEN = 1002,
  EXPIRED_ACCESS_TOKEN = 1003,
}
