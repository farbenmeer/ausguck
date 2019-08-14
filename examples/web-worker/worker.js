onmessage = event => {
  let result = 0;
  let n = event.data;
  while (n > 0) {
    n--;
    result++;
  }

  postMessage(result);
};
