//console.log("CONNECTED");

const firstObj = {};

const user = {
  username: 'biz.markie',
  password: 'abc123',
  lovesJavascript: true,
  favoriteNumber: 42,
}

// *******DOT NOTATION******

// console.log(user.lovesJavascript);
// console.log(user.username);

//******BRACKET NOTATION********* 

const password = 'password'; //both of these
console.log(user[password]); 

console.log(user['username']); // direct accesss. has to be a string.

//console.log(user['favoriteNumber']);
console.log(user.favoriteNumber);

// ********** ASSIGNING VALUES ******

const newUser = {
  isNew: true,
}

// newUser.username = 'fresh.prince'; // dot notation
// newUser['password'] = 'abcd1234'; //bracket notation
// newUser[1] = 'abcd1234'; //bracket notation
// console.log(newUser);

// ******* METHODS (FUNCTIONS AS VALUES) *******
const newObject = {
  username: 'Teresa',
  sayHello: function () {
    console.log(`${this.username} says Hello`);
  }
}

// newObject.username = 'Aja';
// newObject.sayHello();

//*********** ITERATE OVER AN OBJECT******** 
const userTwo = {
  username: 'trinity',
  password: 'xyz0987',
  lovesJavascript: true,
  favoriteNumber: 12,
}

//***** FOR IN LOOP ******* */
for (let key in userTwo) { // key is what's inside the object: password, username, etc
  console.log(key); //keys
  console.log(userTwo[key]); //values
  console.log(userTwo.key); // values NOOOOOO (doesn't work)
}
