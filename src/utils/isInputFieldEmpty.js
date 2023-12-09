export const isInputFieldEmpty = (input) => {
  if (input.trim().length === 0) {
    return true;
  }
  return false;
};
