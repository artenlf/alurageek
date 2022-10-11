// This is mock authentication

// interface Props {
//   username: string;
//   password: string;
// }

const adminAccount = {
  username: "admin",
  password: "Admin123",
};

const authentication = () => {
  if (
    inputUsername !== adminAccount.username ||
    inputPassword !== adminAccount.password
  ) {
    throw new Error("Usuário, ou senha inválidos. Tente novamente.");
  }
  if (
    inputUsername === "adminAccount.username" &&
    inputPassword === "adminAccount.password"
  ) {
    login();
  }
};

const login = () => {};

export default authentication;
