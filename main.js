console.log("CONNECTED");

const button = document.getElementById('button');
console.log(button);


const button2 = document.querySelector('#button');
console.log(button2);


function sayHi(user) {
  return `Hi ${user}`;
}

function sayBye(user) {
  return `Bye ${user}`;
}

// A FUNCTION THAT TAKES IN A FUNCTION AS AN ARGUMENT
function sayWhat(user, cb) {
  return cb(user);
}
// CONSOLE LOGGING THE RETURN STATEMENTS OF EACH CALLBACK
console.log(sayWhat('Sara', sayHi));
sayWhat('Sara', sayBye);
