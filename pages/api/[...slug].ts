import type { NextApiRequest, NextApiResponse } from 'next';
import handler from './process';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  const [endpoint] = Array.isArray(slug) ? slug : [slug];

  if (['sharp', 's', 'p'].includes(endpoint)) {
    handler(req, res);
  } else {
    res.status(404).end();
  }
};
