import { assert } from "chai";

import MainPage from "../../utils/DSL/mainPage";

describe("Electron Testing", () => {
  let mainPage: MainPage;

  beforeEach(() => {
    mainPage = new MainPage();
  });

  it("should successfully launches the app", async () => {
    assert.strictEqual(
      await mainPage.checkApplicationIsReady(),
      true,
      "Application is not ready"
    );
  });

  it("should test application title", async () => {
    const title = await mainPage.getApplicationTitle();

    assert.strictEqual(
      title,
      "MongoDB Query Executor",
      "Incorrect application title"
    );
  });

  it("should check the Enter MongoDB Query field is writable", async () => {
    await mainPage.setQueryText("{}");

    assert.strictEqual(
      await mainPage.getQueryText(),
      "{}",
      "Incorrect query text"
    );
  });
});
