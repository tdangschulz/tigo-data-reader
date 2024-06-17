import { Request, Response } from "express";

import { getDateStringDaysAgo } from "../DateUtil";
import { writeToJson } from "../FileUtil";
import { exportData } from "../Tigo";

export const getTigoData = async (req: Request, res: Response) => {
  const result = await exportData({
    baseDomain: process.env.BASE_URL!,
    date: getDateStringDaysAgo(4),
    login: {
      user: process.env.TIGO_USER!,
      password: process.env.TIGO_PASSWORD!,
    },
    sysid: process.env.SYSTEM_ID!,
  });

  writeToJson("./export.json", JSON.stringify(result, null, 2));

  res.send("Okay");
};
