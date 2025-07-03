const usersData = [{ name: "tom", email: "tom@gmail.com" }];

const checkUser = (email) => {
  return usersData.some((item) => item.email === email);
};

const addUser = (user) => {
  usersData.push(user);
  return { message: "user added", usersData };
};

exports.manageUser = (user) => {
  const check = checkUser(user.email);
  if (check) {
    return { message: "already user presented", usersData };
  } else {
    addUser(user);
  }
};
