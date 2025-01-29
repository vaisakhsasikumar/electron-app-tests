import { assert } from "chai";

import { AppDsl, AppDrivers } from "../../utils/DSL/dsl";

describe("MongoDB Query Execution Test", () => {

  it("should execute a simple query and display results", async () => {
    const application = new AppDsl(new AppDrivers());

    await application.setQuery("{}");
    await application.clickRunQuery();
    const resultText = await application.getQueryResult();

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
