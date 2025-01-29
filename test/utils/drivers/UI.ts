import { browser } from "@wdio/globals";

import { AppDriver } from "../types";
import MainPage from "../DSL/mainPage";
import Modal from "../DSL/modal";
import MenuBar from "../DSL/menuBar";

export class UIAppDriver implements AppDriver {
  private driver: WebdriverIO.Browser = browser;
  private mainPage: MainPage;
  private modal: Modal;
  private menuBar: MenuBar;

  constructor() {
    this.mainPage = new MainPage();
    this.modal = new Modal();
    this.menuBar = new MenuBar();
  }

  public async setQuery(query: string) {
    await this.mainPage.setQueryText(query);
  }

  public async clickRunQuery() {
    await this.mainPage.clickRunQueryButton();
  }

  public async getQueryResult() {
    return this.mainPage.getQueryResultText();
  }
}
