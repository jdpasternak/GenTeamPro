const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("constructor", () => {
    it("should create an Intern object", () => {
      const intern = new Intern(
        "Skippy",
        9001,
        "skippypb@creme.edu",
        "Creme University"
      );

      expect(intern.getName()).toBe("Skippy");
      expect(intern.getId()).toBe(9001);
      expect(intern.getEmail()).toBe("skippypb@creme.edu");
    });
  });

  describe("getSchool", () => {
    it('should return "Creme University"', () => {
      const intern = new Intern(
        "Skippy",
        9001,
        "skippypb@creme.edu",
        "Creme University"
      );

      expect(intern.getSchool()).toBe("Creme University");
    });
  });

  describe("getRole", () => {
    it('should return "Intern"', () => {
      const intern = new Intern(
        "Skippy",
        9001,
        "skippypb@creme.edu",
        "Creme University"
      );

      expect(intern.getRole()).toBe("Intern");
    });
  });
});
