import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "PUT") {
    res.status(500).json({ message: "Sorry, PUT requests only" });
  }

  try {
    const result = await fetch(
      "https://api.sendgrid.com/v3/marketing/contacts",
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.SENDGRID_SECRET}`,
        },
        body: JSON.stringify({
          list_ids: [process.env.SENDGRID_MAILING_ID],
          contacts: [{ email: req.body.email }],
        }),
      }
    );

    if (result.status >= 400) {
      return res.status(400).json({
        message: `There was an error subscribing to the newsletter. Shoot me an email at [me@leerob.io] and I'll add you to the list.`,
      });
    }

    return res.status(201).json({ message: "Success!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error" });
  }
}
