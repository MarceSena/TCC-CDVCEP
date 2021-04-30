describe("The functional test", () => {
  it("should return a hello world with just a few times", async () => {
    const { body, status } = await global.testRequest.get("/process");
    expect(status).toBe(200);
    expect(body).toEqual([
      {
        test: [684, 434, 864, 261, 375],
      },
      {
        test: [684, 434, 864, 261, 375],
      },
    ]);
  });
});
