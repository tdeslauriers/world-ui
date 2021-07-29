export const url = "http://localhost:8080"; // dev only

export async function health() {
  let response = await fetch(url + "/health");
  let data = await response.json();

  return data;
}

export async function login(credentials) {
  return await fetch(url + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
