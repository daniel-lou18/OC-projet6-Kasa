function fetchLogements(url, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://www.kasa/api/logements") resolve("dataLogements");
      else {
        const error = new Error("Something went wrong");
        error.status = 404;
        reject(error);
      }
    }, delay);
  });
}

async function getLogements() {
  try {
    const res = await fetchLogements("https://www.kasa/api/logements", 1500);
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
}

getLogements();

// export { fetchLogements };
