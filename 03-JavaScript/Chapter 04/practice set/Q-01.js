let Name = prompt("Enter your full name without spaces");
Name = Name.toLowerCase();
let username =  `@${Name}${Name.length}`;
console.log(username);