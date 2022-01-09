class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  // Returns the Employee object's name
  getName() {
    return this.name;
  }

  // Returns the Employee object's ID
  getId() {
    return this.id;
  }

  // Returns the Employee object's email
  getEmail() {
    return this.email;
  }

  // Returns the Employee object's role
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
