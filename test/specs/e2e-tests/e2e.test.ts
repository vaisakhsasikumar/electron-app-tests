import { assert } from "chai";

import { AppDsl, AppDrivers } from "../../utils/DSL/dsl";

describe("MongoDB Query Execution Test", () => {
  it("should execute a simple query and display results", async () => {
    //Four Layer Model applied here

    const application = new AppDsl(new AppDrivers(["UI", "API"]));

    await application.setQuery("{}");
    await application.clickRunQuery();
    const queryResult = await application.getQueryResult();

    assert.notInclude(
      queryResult,
      "Invalid query",
      'Query result should not contain "Invalid query"'
    );
    assert.include(queryResult, "test1", "Query result should contain field");
    assert.include(queryResult, "test2", "Query result should contain field");
    assert.include(queryResult, "test3", "Query result should contain field");
  });
});
