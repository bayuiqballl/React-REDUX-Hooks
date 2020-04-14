// Action Increment, decrement and logged
export const add = () => {
  return {
    type: "INCREMENT",
  };
};

export const minus = () => {
  return {
    type: "DECREMENT",
  };
};

export const logged = () => {
  return {
    type: "SIGN_IN",
  };
};
