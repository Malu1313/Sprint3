// -----------------------------
// BLOCO 1: Cadastro de Usuário
// -----------------------------

document.getElementById("formulario_registro").addEventListener("submit", createUser);

function createUser(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  fetch("http://localhost:5000/projeto_reserva_senai/v1/usuario/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, telefone, senha, email }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((err) => {
        throw new Error(err.error);
      });
    })
    .then((data) => {
      alert(data.message);
      console.log(data.message);
      document.getElementById("formulario_registro").reset();
      window.location.href = "../index.html";
    })
    .catch((error) => {
      alert("Erro no cadastro: " + error.message);
      console.error("Erro: ", error.message);
    });
}

// -----------------------------
// BLOCO 2: Login de Usuário
// -----------------------------

document.getElementById("login_formulario").addEventListener("submit", loginUser);

function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  fetch("http://localhost:5000/projeto_reserva_senai/v1/usuarioLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((err) => {
        throw new Error(err.error);
      });
    })
    .then((data) => {
      alert(data.message);
      console.log(data.message);
      document.getElementById("login_formulario").reset();
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert("Erro no login: " + error.message);
      console.error("Erro: ", error.message);
    });
}
