export class MainPage {
  // Selectors

  // Retrieves the button element responsible for running queries.
  get runQueryButton(): Promise<WebdriverIO.Element> {
    return Promise.resolve($('[data-testid="runQueryButton"]'));
  }

  // Retrieves the input field for entering query text
  get queryTextField(): Promise<WebdriverIO.Element> {
    return Promise.resolve($('[data-testid="query"]'));
  }

  // Retrieves the query result container element
  get queryResultContainer(): Promise<WebdriverIO.Element> {
    return Promise.resolve($('[data-testid="queryResult"]'));
  }

  // Retrieves the toggle switch for advanced view
  get advancedViewToggle(): Promise<WebdriverIO.Element> {
    return Promise.resolve($('[data-testid="advancedViewToggle"]'));
  }

  // Retrieves the query history list container
  get queryHistoryResults(): Promise<Array<WebdriverIO.Element>> {
    return Promise.resolve($$('[data-testid="queryHistorySingleElement"]'));
  }

  //Interactions

  // Simulates a click on the run query button.
  async clickRunQueryButton(): Promise<void> {
    const button = await this.runQueryButton;
    await button?.click();
  }

  // Sets the query text in the query text field.
  async setQueryText(query: string): Promise<void> {
    const inputField = await this.queryTextField;
    await inputField.setValue(query);
  }

  // Retrieves the current query text
  async getQueryText(): Promise<string> {
    const inputField = await this.queryTextField;
    return inputField.getValue();
  }

  // Retrieves the query result as a string
  async getQueryResultText(): Promise<string> {
    const resultContainer = await this.queryResultContainer;
    return resultContainer.getText();
  }

  // Toggles the advanced view switch.
  async toggleAdvancedView(): Promise<void> {
    const toggle = await this.advancedViewToggle;
    await toggle.click(); // Simulates a user click to toggle the checkbox
  }

  async getLastQueryHistoryText(): Promise<string> {
    const results = await this.queryHistoryResults;
    const lastElement = results[results.length - 1];
    const lastElementText = await lastElement.getText();
    return lastElementText;
  }
}

export default MainPage;
