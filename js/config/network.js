const SERVER_URL = 'https://32.javascript.htmlacademy.pro';

export const NEW_PICTURE_POST_URL = new URL('kekstagram', SERVER_URL);

export const PICTURES_LIST_GET_URL = new URL('kekstagram/data', SERVER_URL);

export const QueryTypes = {
  POST: 'POST',
  GET: 'GET'
};
