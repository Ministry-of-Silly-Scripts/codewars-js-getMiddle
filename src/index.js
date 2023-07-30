const getMiddle = (s) => {
  if (s.length % 2 === 1) return s[parseInt(s.length / 2, 10)];
  return s;
};

module.exports = {
  getMiddle,
};
