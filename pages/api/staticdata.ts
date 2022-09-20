import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

type Date = {
  aboutme: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filePath = path.join(process.cwd(), "json", "staticdata.json");
  let content = await fs.readFile(filePath, "utf-8");
  res.status(200).json(JSON.parse(content));
}
