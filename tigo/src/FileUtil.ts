import { Response, chromium } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";
import { getDateStringDaysAgo } from "./DateUtil";

export const writeToJson = (file: string, jsonData: string) => {
  const filePath: string = path.join(__dirname, file);

  try {
    fs.writeFileSync(filePath, jsonData);
  } catch (err) {
    (err: NodeJS.ErrnoException | null) => {
      if (err) {
        console.error("Fehler beim Schreiben der Datei:", err);
      } else {
        console.log("JSON-Datei erfolgreich gespeichert:", filePath);
      }
    };
  }
};
