export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');

    console.log('bla');
  }
  return a + b;
};
