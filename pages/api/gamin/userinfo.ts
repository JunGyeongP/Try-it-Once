import { NextApiRequest, NextApiResponse } from "next";
import { GarminConnect } from "garmin-connect";

export default async function handler(req: any, res: any) {
  try {
    let id = ``;
    let password = "";

    const GCClient = new GarminConnect({
      username: id,
      password: password,
    });

    await GCClient.login(id, password);
    const userInfo = await GCClient.getUserInfo();
    console.log(userInfo);
    let userValue = Object.entries(userInfo);
    res.status(200).json(userValue); // Return userInfo as an object
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
