const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500);
  window.alert(`You submitted: ${JSON.stringify(values, null, 2)}`);
});
