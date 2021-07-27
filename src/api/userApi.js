export const url = "http://localhost:8080/health";

export async function health() {
  let response = await fetch(url);
  let data = await response.json();

  return data;
}
