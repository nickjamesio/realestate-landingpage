export function addToMailList(data) {
  const URL = `https://api.homeswithaudrey.com/clients`;
  return postData(URL, data);
}

export function postData(url, data = {}) {
  return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow", // manual, *follow, error
      body: JSON.stringify(data), // body data type must match "Content-Type" header
  }).then(response => response.json()); // parses response to JSON
}