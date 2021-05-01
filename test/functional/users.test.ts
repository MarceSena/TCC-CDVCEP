describe("Users functional tests", () => {
  describe("Whem creating a new user", () => {
    it("should sucessfully create a new user", async () => {
      const newUser = {
        name: "jhon Doe",
        email: "jhon@email.com",
        password: "12345",
      };
      const response = await global.testRequest.post("/users").send(newUser);
      expect(response.status);
    });
  });
});
