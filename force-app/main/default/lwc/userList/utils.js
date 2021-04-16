export function sleep(interval) {
  return new Promise((resolve) => {
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(interval, resolve());
  });
}
