const API_ROOT = "http://localhost:3001/api/v1";

const signUp = async (config: any) => {
  const response = await fetch(`${API_ROOT}/users/create`, config);
  return response.json();
};

export default {
  API_ROOT: API_ROOT,
  user: {
    signUp: signUp,
  },
};
