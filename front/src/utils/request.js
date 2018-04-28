export const post = (url, body, additionalConfig = {}) => fetch(url, {
    method: 'POST',
    ...additionalConfig,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...additionalConfig.headers
    }
  });
  
export const toJSON = (response) => response.json();
