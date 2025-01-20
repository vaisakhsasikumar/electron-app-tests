import { browser } from "@wdio/globals";
import { assert } from "chai";

describe("MongoDB Query Execution Test", () => {
  it("should execute a simple query and display res-ults", async () => {
    const queryInput = browser.$(`textarea[data-testid="query"]`);
    await queryInput.setValue("{}");

    expect(await queryInput.getText()).toBe("{}");

    const runButton = browser.$('button[data-testid="runQueryButton"]');
    await runButton.click();

    const resultText = await browser
      .$("h5=Query Result")
      .nextElement()
      .getText();

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
    const queryInput = await browser.$('textarea[data-testid="query"]');
    await queryInput.setValue('{"name":"test4}');

    const runButton = await browser.$(".btn.btn-primary.btn-block");
    await runButton.click();

    const resultElement = await browser.$(".card-body pre");
    const resultText = await resultElement.getText();

    assert.include(
      resultText,
      "Invalid query or server error.",
      'Query result should not contain "Invalid Query"'
    );
  });
});

describe("Advanced View Toggle Test", () => {
  it("should toggle advanced view and toggle query history", async () => {
    const advancedViewToggle = $('input[data-testid="advancedViewToggle"]');
    await advancedViewToggle.click();

    const queryHistorySection = await $(".app-history div");
    await queryHistorySection.waitForDisplayed();

    // Assert that the "Query History" section is visible
    await expect(queryHistorySection).toBeDisplayed();
    await advancedViewToggle.click();
    await expect(queryHistorySection).not.toBeDisplayed();
  });
});
