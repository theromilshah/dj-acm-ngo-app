const endpointUrl = "http://localhost:3001";

export const deleteUser = (mail) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpointUrl}/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mail: mail })
    })
      .then(res => {
        return true
      })
      .catch(error => {
        console.log(error);
        return reject(error);
      });
  });
};