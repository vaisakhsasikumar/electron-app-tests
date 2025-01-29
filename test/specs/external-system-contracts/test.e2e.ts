import { browser } from "wdio-electron-service";
import { assert } from "chai";
import MainPage from "../../utils/DSL/mainPage";
import * as semver from "semver";

describe("External System Contracts Test", () => {
  it("should check that application theme corresponds to the OS theme", async () => {
    // Verify the class on the root element
    const rootClassList = await browser.$("html").getAttribute("class");

    console.log(`Root element class list: ${rootClassList}`);

    assert.include(
      rootClassList,
      "light-theme",
      "The root element does not have the 'light-theme' class as expected."
    );
    assert.notInclude(
      rootClassList,
      "dark-theme",
      "The root element incorrectly has the 'dark-theme' class when it should not."
    );
  });
});

describe("Version", async () => {
  it("should successfully check version against stub", async () => {
    const mainPage = new MainPage();

    const appVersion = await mainPage.getAppVersion();

    const getMockResponse = await mainPage.getRealThemeVersionFromGithub();
    await expect(getMockResponse.status).toEqual(200);

    const data = await getMockResponse.json();

    await expect(data).toHaveProperty("tag_name");

    const stubVersion = semver.clean(data.tag_name);

    const newVersionBanner = await mainPage.newVersionBanner;

    if (semver.lte(appVersion, stubVersion as string)) {
      await expect(newVersionBanner).toBeDisplayed();
    } else {
      await expect(newVersionBanner).not.toBeDisplayed();
    }
  });
});
