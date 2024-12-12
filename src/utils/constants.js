export const apiKey = "d01b3acd";

export const baseUrl = "https://www.omdbapi.com/?apikey=d01b3acd";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error:  ${res.status}`);
  }
}

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}
