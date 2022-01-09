const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("constructor", () => {
    it("should create an Employee object", () => {
      let employee = new Employee("John", 1004, "john@company.org");

      expect(employee.name).toBe("John");
      expect(employee.id).toBe(1004);
      expect(employee.email).toBe("john@company.org");
    });
  });

  describe("getName", () => {
    it('should return "John"', () => {
      const employee = new Employee("John", 1004, "john@company.org");

      expect(employee.getName()).toBe("John");
    });
  });

  describe("getId", () => {
    it('should return "1004"', () => {
      const employee = new Employee("John", 1004, "john@company.org");

      expect(employee.getId()).toBe(1004);
    });
  });

  describe("getEmail", () => {
    it('should return "john@company.com"', () => {
      const employee = new Employee("John", 1004, "john@company.org");

      expect(employee.getEmail()).toBe("john@company.org");
    });
  });
});
