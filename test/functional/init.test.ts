describe("The functional test", () => {
  it("should return a hello world with just a few times", async () => {
    const { body, status } = await global.testRequest.get("/inittest");
    expect(status).toBe(200);
    expect(status).toBe(200);
    expect(body).toEqual([
      {
        test: "hello wolrd",
      },
      {
        test: "hello wolrd",
      },
    ]);
  });
});
