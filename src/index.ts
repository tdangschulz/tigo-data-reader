require("dotenv").config({ path: "../.env" });

import { getDateStringDaysAgo } from "./DateUtil";
import { writeToJson } from "./FileUtil";
import { exportData } from "./Tigo";

exportData({
  baseDomain: process.env.BASE_URL!,
  date: getDateStringDaysAgo(4),
  login: {
    user: process.env.TIGO_USER!,
    password: process.env.TIGO_PASSWORD!,
  },
  sysid: process.env.SYSTEM_ID!,
}).then((result) =>
  writeToJson("./export.json", JSON.stringify(result, null, 2))
);
