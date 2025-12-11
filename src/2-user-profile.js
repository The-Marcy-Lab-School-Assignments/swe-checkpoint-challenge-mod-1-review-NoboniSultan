// Return a new user object with username, email, isActive: true, loginCount: 0
const createUser = (username, email) => {
  return {
    username: username,
    email: email,
    isActive: true,
    loginCount: 0
  }
};

// Increase the user's loginCount by 1
const incrementLogin = (user) => {
  user.loginCount += 1;
  return user;
};

// Set isActive to false and delete the email property. Return the user.
const deactivateUser = (user) => {
  user.isActive = false;
  delete user.email;
  return user;
};

// Print each property and value in the format "key: value"
const printUserInfo = (user) => {
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }

};

// BONUS: Return a true copy of the user object (not a reference)
const cloneUser = (user) => {
  return { ...user }
};

//Test
const user1 = createUser("coder123", "coder@example.com");
console.log(user1);
// { username: 'coder123', email: 'coder@example.com', isActive: true, loginCount: 0 }

incrementLogin(user1);
incrementLogin(user1);
console.log(user1.loginCount); // 2

deactivateUser(user1);
console.log(user1.isActive); // false
console.log(user1.email); // undefined

printUserInfo(user1);
// username: coder123
// email: coder@example.com
// isActive: true
// loginCount: 0

const user2 = createUser("newuser", "new@example.com");
const user2Copy = cloneUser(user2);
user2Copy.username = "changedname";
console.log(user2.username); // "newuser" (original unchanged)
console.log(user2Copy.username); // "changedname"
module.exports = {
  createUser,
  printUserInfo,
  incrementLogin,
  deactivateUser,
  cloneUser,
};
