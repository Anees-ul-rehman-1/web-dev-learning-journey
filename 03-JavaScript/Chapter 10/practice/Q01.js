class User {
    constructor(name, email){
       this.name = name;
       this.email = email;
    }
    viewData() {
        console.log(this.name)
        console.log(this.email)
    }
}

const Ali = new User("Ali", "ali@gmail.com");
const Anees = new User("Anees", "anees@gmail.com");
const Khalid = new User("Khalid", "khaild@gmail.com");
Ali.viewData()
Anees.viewData();
Khalid.viewData();
