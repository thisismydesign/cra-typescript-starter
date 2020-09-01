// eslint-disable-next-line @typescript-eslint/no-explicit-any
const localLog = (...args: any[]): void => {
  if (window.location.href.includes("localhost")) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
};

export default localLog;
