import { NextApiRequest, NextApiResponse } from "next";

const fetchSchools = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(
      `http://universities.hipolabs.com/search?name=${req.query.name}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default fetchSchools;
