import { browser } from "@wdio/globals";
import { assert } from "chai";

describe("Electron Testing", () => {
  it("should test application title", async () => {
    await browser.electron.execute(
      (electron, param1, param2, param3) => {
        const appWindow = electron.BrowserWindow.getFocusedWindow();
      },
      1,
      2,
      3
    );
  });
});
