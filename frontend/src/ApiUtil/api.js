import axios from "axios";

const API_URL = "http://localhost:3030/api/Employee";

export const fetchEmployees = async () => {
  const response = await axios.get(API_URL,getemp);
  return response.data;
};

export const createEmployee = async (employee) => {
  const response = await axios.post(API_URL,createem );
  return response.data;
};

export const updateEmployee = async (id, employee) => {
  const response = await axios.put(`${API_URL}`, employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
