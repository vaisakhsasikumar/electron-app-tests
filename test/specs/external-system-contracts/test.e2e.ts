import { browser } from "@wdio/globals";
import { assert } from "chai";

describe("External System Contracts Test", () => {
  it("should check that application theme corresponds to the OS theme", async () => {
    const STUB_URL = "http://localhost:8080/api/theme";

    // Fetch the theme from the stub using fetch
    const response = await browser.call(async () =>
      fetch(STUB_URL).then((res) => {
        if (!res.ok) {
          throw new Error(
            `Failed to fetch stub: ${res.status} ${res.statusText}`
          );
        }
        return res.json();
      })
    );

    const theme = response.theme;

    // Validate the theme value
    assert.isTrue(
      theme === "dark" || theme === "light",
      `Invalid theme returned from stub: ${theme}`
    );

    console.log(`Theme returned by the stub: ${theme}`);

    // Verify the class on the root element
    const rootClassList = await browser.execute(() => {
      const root = document.documentElement; // Select the root element
      return root.className.split(/\s+/); // Return the list of classes as an array
    });

    if (theme === "dark") {
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
    } else {
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
    }
  });
});
