const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("constructor", () => {
    it("creates an Employee object", () => {
      let employee = new Employee("John", 1004, "john@company.org");

      expect(employee.name).toBe("John");
      expect(employee.id).toBe(1004);
      expect(employee.email).toBe("john@company.org");
    });
  });

  describe("getName", () => {
    it("returns the Employee object's name", () => {
      const employee = new Employee("John", 1004, "john@company.org");

      expect(employee.getName()).toBe("John");
    });
  });

  describe("getId", () => {
    it("returns the Employee object's ID", () => {
      const employee = new Employee("John", 1004, "john@company.org");

      expect(employee.getId()).toBe(1004);
    });
  });

  describe("getEmail", () => {
    it("returns the Employee object's email", () => {
      const employee = new Employee("John", 1004, "john@company.org");

      expect(employee.getEmail()).toBe("john@company.org");
    });
  });
});
