export const changeIdToString = (array) => {
  const result = array.map((o) => {
    const isIdString = typeof o._id === 'string';
    return isIdString ? { ...o } : { ...o, _id: String(o._id) };
  });
  return result;
};
