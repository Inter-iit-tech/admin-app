export default function logAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error("Error data:", error.response.data);
    console.error("Error status:", error.response.status);
    console.error("Error headers:", error.response.headers);
    console.error("Error request:", error.request);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.error("Error request:", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Error message:", error.message);
  }
  console.error("Error config: ", error.config);
}
