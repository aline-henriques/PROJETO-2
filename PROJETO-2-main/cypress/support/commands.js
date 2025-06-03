Cypress.Commands.add('login', () => {
  const user = {
    name: "Danilo Vinicius",
    avatarUrl: "/src/assets/img/Foto_perfil.jpg",
    email: "dandan@gmail.com",
    senha: "123",
    usuario: "dandan",
    status: "Sem Avaliações"
  };

  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('user', JSON.stringify(user));
});