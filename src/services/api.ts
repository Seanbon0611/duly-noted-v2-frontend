// const API_ROOT = "http://localhost:3001/api/v1";
const API_ROOT = "https://duly-noted-api-cfac6.ondigitalocean.app/api/v1";

const signUp = (config: object) => {
  return fetch(`${API_ROOT}/users/create`, config).then((response) =>
    response.json()
  );
};

const login = async (config: Object) => {
  const response = await fetch(`${API_ROOT}/login`, config);
  return response.json();
};

const getNotes = async (id: any) => {
  const response = await fetch(`${API_ROOT}/notes/${id}`);
  return response.json();
};

const newNote = async (config: object) => {
  const response = await fetch(`${API_ROOT}/notes/create`, config);
  const json = response.json();
  return json;
};

const deleteNote = async (id: number, config: object) => {
  const response = await fetch(`${API_ROOT}/notes/delete/${id}`, config);
  const json = await response.json();
  return json;
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
    newNote: newNote,
    deleteNote: deleteNote,
  },
};
