import { assert } from "chai";

import { POM } from "../../utils/pom";

describe("MongoDB Query Execution Test", () => {
  it("should execute a simple query and display results", async () => {
    const mainPage = new POM();

    const queryInput = mainPage.getQueryInput();
    await queryInput.setValue("{}");

    const runButton = mainPage.getRunButton();
    await runButton.click();

    const resultText = await mainPage.getResultText();

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
