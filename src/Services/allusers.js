const endpointUrl = "http://localhost:3001";

export const allusers = () => {
  return new Promise((resolve, reject) => {
    fetch(`${endpointUrl}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => {
        const text = res.text();
        return text.then(value => {
          console.log(value);
          return resolve(JSON.parse(value));
        });
      })
      .catch(error => {
        console.log(error);
        return reject(error);
      });
  });
};
