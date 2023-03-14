document.addEventListener("DOMContentLoaded", () => {
  login();
});

const login = () => {
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    console.log(email);
    const password = document.getElementById("login-password").value;
    console.log(email);
    const user = { email, password };
    fetch("http://localhost:3000/api/session/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          alert(data.message);
        });
      } else {
        res.json().then((data) => {
          alert(data.message);
        });
      }
    });
  });
};
