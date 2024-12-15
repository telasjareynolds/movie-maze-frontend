export const authorize = (email, password) => {
  return new Promise((resolve) => {
    resolve({ token: "a fake token" });
  });
};

export const logout = () => {
  return new Promise((resolve) => {
    resolve({ token: "" });
  });
};

export const signup = (email, password, username) => {
  return new Promise((resolve) => {
    resolve({ token: "a fake token" });
  });
};

// get current user
export const getUser = () => {
  return new Promise((resolve) => {
    resolve({ email: "gus@mail.com", username: "gus", _id: "12345" });
  });
};
