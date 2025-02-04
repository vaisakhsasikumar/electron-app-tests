import { browser } from "wdio-electron-service";

import { GithubStubDriverTest } from "../../utils/helpers/GithubHelpers";

//From External Systsems -> Version test uses DSL-Four Layer Model

describe("External System Stub Contract Test. Github API", async () => {
  const githubStub = new GithubStubDriverTest();

  it("should successfully check that higher version exist", async () => {
    await githubStub.shouldReturnHigherVersionThanCurrent("1.0.0");
  });

  it("should successfully check that lower version exist", async () => {
    await githubStub.shouldReturnLowerVersionThanCurrent("1.0.0");
  });
});
