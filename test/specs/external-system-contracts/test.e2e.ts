import { browser } from "wdio-electron-service";
import MainPage from "../../utils/DSL/mainPage";
import * as semver from "semver";
import nock from "nock";

describe("External System Contracts Test", () => {
  it("should check that application theme corresponds to the OS theme", async () => {
    // Verify the class on the root element
    const rootClassList = await browser.$("html").getAttribute("class");

    console.log(`Root element class list: ${rootClassList}`);

    await expect(rootClassList).toContain("light-theme");
    await expect(rootClassList).not.toContain("dark-theme");
  });
});

describe("Version", async () => {
  it("should successfully check version against stub", async () => {
    const mainPage = new MainPage();

    //We are mocking here github requeset because there a limit to how many calls can be made to check the version
    nock("https://api.github.com")
      .get("/repos/vaisakhsasikumar/my-electron-app/releases/latest")
      .reply(200, { data: { tag_name: "v1.0.29" } });

    const appVersion = await mainPage.getAppVersion();

    const getMockResponse = await mainPage.getRealThemeVersionFromGithub();
    await expect(getMockResponse.status).toEqual(200);

    const { data } = await getMockResponse.json();

    await expect(data).toHaveProperty("tag_name");

    const stubVersion = semver.clean(data.tag_name);

    const newVersionBanner = await mainPage.newVersionBanner;

    if (semver.lte(appVersion, stubVersion as string)) {
      await expect(newVersionBanner).not.toBeDisplayed();
    } else {
      await expect(newVersionBanner).toBeDisplayed();
    }
  });
});
