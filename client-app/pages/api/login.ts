import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if(!req.body) {
        res.statusCode = 500;
        res.end("Erro");
    }

    const { email, password } = req.body;
    res.json({ email: email });
}