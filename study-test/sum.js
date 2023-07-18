const sum = (a, b) => a + b;
const sumOf = (numbers) => {
  return numbers.reduce((acc, current) => acc + current, 0);
};

// 각각 내보내기
exports.sum = sum;
exports.sumOf = sumOf;
