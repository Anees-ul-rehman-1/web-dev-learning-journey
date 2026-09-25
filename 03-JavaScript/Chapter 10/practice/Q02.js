class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log(this.name)
        console.log(this.email)
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email)
    }
    editData() {
        console.log('Admin Can edit data here');
    }
}

let admin = new Admin('Admin', 'admin@gmail.com');