export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const signup = (email, password, username) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

// get current user
export const getUser = (token) => {
  return new Promise((resolve, reject) => {
    resolve({ email: "gus@mail.com", username: "gus", _id: "12345" });
  });
};
