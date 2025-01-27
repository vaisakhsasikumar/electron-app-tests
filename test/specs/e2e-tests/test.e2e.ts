import { assert } from "chai";

import MainPage from "../../utils/DSL/mainPage";

describe("MongoDB Query Execution Test", () => {
  it("should execute a simple query and display results", async () => {
    const mainPage = new MainPage();

    await mainPage.setQueryText("{}");
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
});
