import MainPage from "./mainPage";
import Modal from "./modal";
import MenuBar from "./menuBar";
import { AllChannels, AppDriver } from "../types";
import { UIAppDriver } from "../drivers/UI";

export class AppDrivers implements AppDriver {
//   private activeChannels: Array<AllChannels>;
  private drivers: Record<string, AppDriver> = {};

  constructor() {
    this.drivers["UI"] = new UIAppDriver();
    // this.drivers["API"] = new ApiShopDriver();
  }

  get driver(): AppDriver {
    // Get channel from annotations, see example: https://github.com/davef77/atdd-course-examples/blob/master/src/test/java/com/cd/acceptance/examples/bookshopping/drivers/BookShopDrivers.java
    // For simplicity, let's just return the UI driver, but the proper implementation should make it come from the channel annotations
    return this.drivers["UI"];
  }

  // @Override
  public async setQuery(query: string) {
    await this.driver.setQuery(query);
  }

  // @Override
  public async clickRunQuery() {
    await this.driver.clickRunQuery();
  }

  // @Override
  public async getQueryResult() {
    return this.driver.getQueryResult();
  }
}

export class AppDsl {
  private driver: AppDrivers;

  constructor(driver: AppDrivers) {
    this.driver = driver;
  }

  public async setQuery(query: string) {
    this.driver.setQuery(query);
  }

  public async clickRunQuery() {
    this.driver.clickRunQuery();
  }

  public async getQueryResult() {
    return this.driver.getQueryResult();
  }
}
