describe("Backend health check", () => {
  it("should return up state", async () => {
    const response = await fetch(`${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}/api/health`);
    const health = await response.json();
    expect(health.message).toBe("OK");
    expect(health.uptime).toBeGreaterThan(0);
  });
});
