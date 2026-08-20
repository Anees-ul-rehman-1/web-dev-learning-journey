// Q 03 Creat an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array 

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies);


// b. Remover Uber & Add ola in its place
companies.splice(1, 1, "Ola");
console.log(companies);

// c. Add Amazon at the end
companies.push("Amazon")
console.log(companies);

