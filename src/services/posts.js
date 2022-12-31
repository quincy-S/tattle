import axios from "axios";
const baseUrl = "/api/posts";

function getAll() {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
}

function create(newObject) {
  const request = axios.post(baseUrl, newObject);
  return request.then((res) => res.data);
}

function update(id, newObject) {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((res) => res.data);
}
export default {
  getAll,
  create,
  update,
};
