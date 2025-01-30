import { AllChannels, AppDriver, Channels } from "../types";
import { UIAppDriver } from "../drivers/UI";
import { APIAppDriver } from "../drivers/API";

export class AppDrivers implements AppDriver {
  private drivers = {} as Record<Channels, AppDriver>;

  constructor(channels: Array<AllChannels>) {
    this.drivers[Channels.UI] = new APIAppDriver();
    this.drivers[Channels.API] = new UIAppDriver();
  }

  get driver() {
    return this.drivers[Channels.UI];
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
    await this.driver.setQuery(query);
  }

  public async clickRunQuery() {
    await this.driver.clickRunQuery();
  }

  public async getQueryResult() {
    return this.driver.getQueryResult();
  }
}
