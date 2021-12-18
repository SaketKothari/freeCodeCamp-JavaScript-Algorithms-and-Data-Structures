const sum = (...args) => {
  // const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}