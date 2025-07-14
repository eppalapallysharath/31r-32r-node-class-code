function loginController(req, res) {
  const userData = { email: "vineeth@gmail.com", password: "@1234" };

  const { email, password } = req.body;

  const profile =
    email === userData.email && password === userData.password
      ? "login success"
      : "login failed";
  return res.send(profile);
}

module.exports = { loginController };
