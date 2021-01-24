// const API_ROOT = "http://localhost:3001/api/v1";
const API_ROOT = "http://161.35.238.19:3001/api/v1";

const signUp = async (config: Object) => {
  const response = await fetch(`${API_ROOT}/users/create`, config);
  return response.json();
};

const login = async (config: Object) => {
  const response = await fetch(`${API_ROOT}/login`, config);
  return response.json();
};

const getNotes = async (id: number) => {
  const response = await fetch(`${API_ROOT}/notes/${id}`);
  return response.json();
};

export default {
  API_ROOT: API_ROOT,
  user: {
    signUp: signUp,
  },
  auth: {
    login: login,
  },
  note: {
    getNotes: getNotes,
  },
};
