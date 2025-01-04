const findGCD = (nums) => {
  const smallest = Math.min(...nums);
  const largest = Math.max(...nums);

  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  return gcd(smallest, largest);
};

console.log(findGCD([2, 5, 6, 9, 10]));
