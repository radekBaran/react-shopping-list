import httpClient from "../http-common";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import App from "../App";

const getAll = () => {
  return httpClient.get("/products");
};

const create = (data: any) => {
  return httpClient.post("/products", data);
};

const get = (id: any) => {
  return httpClient.get(`/product/${id}`);
};

const remove = (id: any) => {
  return httpClient.delete(`/product/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, get, remove };
