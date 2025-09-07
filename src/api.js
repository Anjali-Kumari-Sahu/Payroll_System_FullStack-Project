import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// Employees
export const getEmployees = () => axios.get(`${API_URL}/api/employees/`);
export const createEmployee = (data) => axios.post(`${API_URL}/api/employees/`, data);

// Payroll
export const getPayroll = () => axios.get(`${API_URL}/api/payroll/`);
export const createPayroll = (data) => axios.post(`${API_URL}/api/payroll/`, data);
