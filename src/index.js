const getMiddle = (s) => {
  const middle = parseInt(s.length / 2, 10);
  if (s.length % 2 === 1) return s[middle];
  return `${s[middle - 1]}${s[middle]}`;
};

module.exports = {
  getMiddle,
};
