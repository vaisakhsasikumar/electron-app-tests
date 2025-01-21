import { assert } from "chai";

import MainPage from "../../utils/DSL/mainPage";

describe("MongoDB Query Execution Test", () => {
  let mainPage: MainPage;

  beforeEach(() => {
    mainPage = new MainPage();
  });

  it("should execute a simple query and display res-ults", async () => {
    await mainPage.setQueryText("{}");

    expect(await mainPage.getQueryText()).toBe("{}");

    await mainPage.clickRunQueryButton();

    const resultText = await mainPage.getQueryResultText();

    assert.notInclude(
      resultText,
      "Invalid Query",
      'Query result should not contain "Invalid Query"'
    );
    assert.include(resultText, "test1", "Query result should contain field");
    assert.include(resultText, "test2", "Query result should contain field");
    assert.include(resultText, "test3", "Query result should contain field");
  });

  it("should execute a simple unsuccessful query and display error", async () => {
    await mainPage.setQueryText('{"name":"test4}');
    await mainPage.clickRunQueryButton();

    const resultText = await mainPage.getQueryResultText();

    assert.include(
      resultText,
      "Invalid query or server error.",
      'Query result should not contain "Invalid Query"'
    );
  });
});

describe("Advanced View Toggle Test", () => {
  it("should toggle advanced view and toggle query history", async () => {
    const mainPage = new MainPage();

    await mainPage.toggleAdvancedView();

    const queryHistorySection = await mainPage.queryHistoryResults;

    // Assert that the "Query History" section is visible
    await expect(queryHistorySection).toBeDisplayed();

    await mainPage.toggleAdvancedView();
    await expect(queryHistorySection).not.toBeDisplayed();
  });
});
