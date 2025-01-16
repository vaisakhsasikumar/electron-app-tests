import { browser } from "@wdio/globals";
import { assert } from "chai";
import MainPage from "../../DSL/mainPage";

describe("External System Contracts Test", () => {
  it("should check that application theme corresponds to the OS theme", async () => {
    const theme = process.env.WDIO_THEME;

    console.log(`Theme returned by the stub: ${theme}`);

    // Verify the class on the root element
    const rootClassList = await browser.execute(() => {
      const root = document.documentElement; // Select the root element
      return root.className.split(/\s+/); // Return the list of classes as an array
    });

    console.log(`Root element class list: ${rootClassList.join(", ")}`);

    if (theme === "dark") {
      console.log("Checking dark theme");

      assert.include(
        rootClassList,
        "dark-theme",
        "The root element does not have the 'dark-theme' class as expected."
      );
      assert.notInclude(
        rootClassList,
        "light-theme",
        "The root element incorrectly has the 'light-theme' class when it should not."
      );
    } else {
      console.log("Checking light theme");

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
    }
  });
});
