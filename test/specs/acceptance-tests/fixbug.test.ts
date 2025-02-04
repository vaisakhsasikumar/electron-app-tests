import { assert } from "chai";
import { browser } from "wdio-electron-service";

import MainPage from "../../utils/DSL/mainPage";
import Modal from "../../utils/DSL/modal";
import MenuBar from "../../utils/DSL/menuBar";

import { WireMock } from "wiremock-captain";
import { ThemeStubDriver } from "../../utils/drivers/ThemeStubDriver";
import { RealThemeDriver } from "../../utils/drivers/ThemeStubDriver";
import { ThemeStubDsl } from "../../utils/DSL/ThemeStubDsl";

import { AppDsl, AppDrivers } from "../../utils/DSL/dsl";


describe("Theme Change Acceptance Test", async () => {
  let mainPage: MainPage;

  beforeEach(async () => {
    mainPage = new MainPage();
    // assume the app is already open and initial (light) theme is set.
  });

  it("should update background to dark when system theme changes to dark", async () => {
    // simulate a change in system theme to dark by triggering the IPC event.
    // We use browser.execute to run code in the renderer context.
    await browser.execute(() => {
      // @ts-ignore
      window.ipcRenderer.emit("set-dark-theme", null, true);
    });

    // Allow time for the UI to update (you might adjust the pause as needed)
    await browser.pause(1000);

    const queryResultBg = await mainPage.getQueryResultBackgroundColor();
    const queryHistoryBg = await mainPage.getQueryHistoryItemBackgroundColor();

    // According to our CSS, a dark theme sets --card-background to #1e1e1e,
    // which in most browsers computes to "rgb(30, 30, 30)".
    expect(queryResultBg).to.equal("rgb(30, 30, 30)");
    expect(queryHistoryBg).to.equal("rgb(30, 30, 30)");
  });
});