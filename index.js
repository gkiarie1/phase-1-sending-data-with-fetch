// Add your code here
function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(response => response.json())
      .then(data => {
        // Access the new id and append it to the DOM
        document.body.innerHTML += `<p>${data.id}</p>`;
      })
      .catch(error => {
        // Append the error message to the DOM
        document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }
  