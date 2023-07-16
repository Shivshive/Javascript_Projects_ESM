(async () => {
  const response = await fetch("https://www.uuidgenerator.net/api/version1");
  const uuid = await response.text();
  console.log(uuid);
})();
