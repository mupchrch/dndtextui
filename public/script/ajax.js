/**
 * Performs an ajax get.
 * @param  {String}  endpoint  API endpoint url.
 * @return {Promise} A promise resolving/rejecting to the responseJson from the server.
 */
exports.get = (endpoint) => {
  return fetch(endpoint, {
    credentials: 'same-origin',
    headers: {'Accept': 'application/json'}
  })
  .then((response) => {
    return response.json();
  });
}
