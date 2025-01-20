import { browser } from "@wdio/globals";

export class POM {
  public async checkApplicationIsReady() {
    const status = await browser.status();
    return status.ready;
  }

  public async getTitle() {
    return browser.getTitle();
  }

  public getQueryInput() {
    return browser.$("textarea");
  }

  public async getQueryInputText() {
    return browser.$("textarea").getText();
  }

  public getRunButton() {
    return browser.$("button=Run Query");
  }

  public async getResultText() {
    const element = browser.$("h5=Query Result").nextElement();
    return element.getText();
  }
}
