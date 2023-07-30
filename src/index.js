const getMiddle = (s) => {
  if (s.length >= 3) return s[1];
  return s;
};

module.exports = {
  getMiddle,
};
