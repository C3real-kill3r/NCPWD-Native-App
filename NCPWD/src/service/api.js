const BASE_URL = 'https://ncpwd.herokuapp.com/api/';

export const api = async (url, method, body = null, headers = {}) => {
  try {
    const endPoint = BASE_URL.concat(url);
    const reqBody = body ? JSON.stringify(body) : null;

    const fetchParams = {method, headers};

    if ((method === 'POST' || method === 'PUT') && !reqBody) {
      throw new Error('Request body required');
    }

    if (reqBody) {
      fetchParams.headers['Content-type'] = 'application/json';
      fetchParams.body = reqBody;
    }

    const fetchPromise = fetch(endPoint, fetchParams);
    const timeOutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Request Timeout');
      }, 3000);
    });

    const response = await Promise.race([fetchPromise, timeOutPromise]);

    return response;
  } catch (e) {
    return e;
  }
};

export const fetchApi = async (
  url,
  method,
  body,
  statusCode,
  token = null,
  loader = false,
) => {
  try {
    const headers = {};
    const result = {
      token: null,
      success: false,
      responseBody: null,
    };
    if (token) {
      headers['Authorization'] = token;
    }

    const response = await api(url, method, body, headers);

    console.log(response);

    if (response.status === statusCode) {
      result.success = true;

      let responseBody;
      const responseText = await response.text();

      try {
        responseBody = JSON.parse(responseText);
        result.token = responseBody.token;
      } catch (e) {
        responseBody = responseText;
      }

      result.responseBody = responseBody;
      console.log(result);
      return result;
    }

    let errorBody;
    const errorText = await response.text();

    try {
      errorBody = JSON.parse(errorText);
    } catch (e) {
      errorBody = errorText;
    }

    result.responseBody = errorBody;

    console.log(result);

    throw result;
  } catch (error) {
    return error;
  }
};
