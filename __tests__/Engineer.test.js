const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("constructor", () => {
    it("should create an Engineer object", () => {
      const engineer = new Engineer(
        "Thomas",
        1002,
        "tomtrain@company.org",
        "thomasAndFriends"
      );

      expect(engineer.getName()).toBe("Thomas");
      expect(engineer.getId()).toBe(1002);
      expect(engineer.getEmail()).toBe("tomtrain@company.org");
    });
  });

  describe("getGitHub", () => {
    it('should return "thomasAndFriends"', () => {
      const engineer = new Engineer(
        "Thomas",
        1002,
        "tomtrain@company.org",
        "thomasAndFriends"
      );

      expect(engineer.getGitHub()).toBe("thomasAndFriends");
    });
  });

  describe("getRole", () => {
    it('should return "Engineer"', () => {
      const engineer = new Engineer(
        "Thomas",
        1002,
        "tomtrain@company.org",
        "thomasAndFriends"
      );

      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
