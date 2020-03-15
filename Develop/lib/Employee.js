// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    // getName() method
    getName() {
        return (this.name);
    }
    // getId() Method
    getId() {
        return (this.id);
    }
    // getEmail() method
    getEmail() {
        return (this.email);
    }
    // getRole() method
    getRole() {
        return (this.role);
    }
}

// var jeff = new Employee("jeff", 1, "test@test.com");
var jeff = new Employee("jeff");
// console.log(jeff);
jeff.getName();




module.exports = Employee;