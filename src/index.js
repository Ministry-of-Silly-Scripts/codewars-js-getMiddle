const getMiddle = (s) => {
  if (s.length % 2 === 1) return s[parseInt(s.length / 2, 10)];

  const middle = parseInt(s.length / 2, 10);

  return `${s[middle - 1]}${s[middle]}`;
};

module.exports = {
  getMiddle,
};
