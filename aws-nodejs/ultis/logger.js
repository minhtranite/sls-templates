export const debug = () => {
  if (process.env.DEBUG) {
    console.log(...arguments);
  }
};

export default debug;