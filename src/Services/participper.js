const endpointUrl = "http://localhost:3001";

export const volpart = (mail,title) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpointUrl}/participper`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mail: mail,title:title })
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