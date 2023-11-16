export async function getStaticProps() {
  const url =
    'https://api.themoviedb.org/3/discover/movie?page=1&language=sv-SE&sort_by=popularity.desc';
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmQ4YWQ4ZjJkMTliNzI0YTIxY2EyNTEwYjQ1MGRhOSIsInN1YiI6IjY0MzU5ZjJmZTYzNTcxMDBmMjdhMjNhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ylJsoObCWHjzOmig4BQJHlSBwvzhfbHFIgog8HLLcY';

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `bearer ${token}`,
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  console.log('Data from getStaticProps:', result);

  return { props: result };
}
