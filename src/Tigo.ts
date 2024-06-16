import { Response, chromium } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";
import { getDateStringDaysAgo } from "./DateUtil";

type Props = {
  baseDomain: string;
  sysid: string;
  date: string;
  login: {
    user: string;
    password: string;
  };
};

export const exportData = async (props: Props) => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(`${props.baseDomain}`);

  await page.fill("#loginformmodel-login", props.login.user);
  await page.fill("#loginformmodel-password", props.login.password);

  await page.click('button[type="submit"]');

  await page.waitForURL(`${props.baseDomain}/system/overview?*`);

  await page.goto(
    `${props.baseDomain}/system/view?sysid=${props.sysid}&date=${props.date}`
  );

  await page.waitForURL(
    `${props.baseDomain}/system/view?sysid=${props.sysid}&date=${props.date}`
  );

  const [systeminfo, aggenergy, config] = await Promise.all([
    page.waitForResponse(`${props.baseDomain}/system/summary/systeminfo?*`),
    page.waitForResponse(
      `${props.baseDomain}/api/v4/system/summary/aggenergy?*`
    ),
    page.waitForResponse(`${props.baseDomain}/system/summary/config?*`),
  ]);

  const result = {
    systeminfo: JSON.parse(await systeminfo.text()),
    aggenergy: JSON.parse(await aggenergy.text()),
    config: JSON.parse(await config.text()),
  };

  await page.close();
  await browser.close();

  return result;
};
