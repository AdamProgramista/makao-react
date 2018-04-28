const post = (url, body, additionalConfig = {}) => fetch(url, {
    method: 'POST',
    ...additionalConfig,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...additionalConfig.headers
    }
  });
  
const toJSON = (response) => response.json();
