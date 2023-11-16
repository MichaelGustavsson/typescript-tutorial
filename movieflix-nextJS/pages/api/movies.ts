import { NextApiRequest, NextApiResponse } from 'next';

// http://localhost:3005/api/movies
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method);
  const _baseUrl = 'https://api.themoviedb.org/3';
  const _token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmQ4YWQ4ZjJkMTliNzI0YTIxY2EyNTEwYjQ1MGRhOSIsInN1YiI6IjY0MzU5ZjJmZTYzNTcxMDBmMjdhMjNhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ylJsoObCWHjzOmig4BQJHlSBwvzhfbHFIgog8HLLcY';

  if (req.method === 'GET') {
    let url = _baseUrl + '/discover/movie?page=1&language=sv-SE&sort_by=popularity.desc';

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: `bearer ${_token}`,
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    res.status(200).json({ status: 'Success', statusCode: 200, data: data });
  }
  if (req.method === 'DELETE') {
    res.status(304).end(); //.json({ status: 'Success', statusCode: 304, data: 'Information is removed' });
  }
  if (req.method === 'POST') {
    res.status(201).json({ status: 'Success', statusCode: 201, data: 'Information added' });
  }
}
