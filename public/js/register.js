document.addEventListener("DOMContentLoaded", () => {
  register();
});

const register = () => {
  document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const first_name = document.getElementById("register-first-name").value;
    const last_name = document.getElementById("register-last-name").value;
    const age = document.getElementById("register-age").value;
    const email = document.getElementById("register-email").value;
    console.log(email);
    const password = document.getElementById("register-password").value;
    console.log(email);
    const user = { first_name, last_name, age, email, password };
    fetch("http://localhost:3000/api/session/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          alert(data.message);
          window.location.href = "/";
        });
      } else {
        res.json().then((data) => {
          alert(data.message);
        });
      }
    });
  });
};
