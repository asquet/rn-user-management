export default function suppressWarns() {
  // https://github.com/facebook/react-native/issues/12762
  console.error = jest.genMockFunction((error) => {
    if (error.match(/error/gi)) {
      throw new Error(error);
    }
  });
}
