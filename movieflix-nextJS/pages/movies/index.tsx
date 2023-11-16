import Item from '@/components/item/item';
import { IMovie } from '@/models/IMovie';
import { useEffect, useState } from 'react';

// Server Side Rendering(SSR)
export default function MoviesPage(props: any) {
  console.log('props:', props);
  const { results } = props;
  return (
    <article>
      <h1 className='page-title'>Populära filmer</h1>
      <div className='grid'>
        {results.map((movie: IMovie) => (
          <Item
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
            original_language={movie.original_language}
            overview={movie.overview}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
            popularity={movie.popularity}
          />
        ))}
      </div>
    </article>
  );
}

// Sker i backend på servern...
// export async function getServerSideProps(){}
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

// Client Side Rendering(CSR)
// export default function MoviesPage() {
//   const [movies, setMovies] = useState<IMovie[]>([]);
//   useEffect(() => {
//     async function loadMovies() {
//       const response = await fetch('api/movies');
//       console.log('Response', response);
//       const result = await response.json();
//       console.log('Json Result', result);
//       setMovies(result.data.results);
//     }

//     loadMovies();
//   }, []);
//   return (
//     <article>
//       <h1 className='page-title'>Populära filmer</h1>
//       <div className='grid'>
//         {movies.map((movie) => (
//           <Item
//             key={movie.id}
//             id={movie.id}
//             poster_path={movie.poster_path}
//             title={movie.title}
//             release_date={movie.release_date}
//             original_language={movie.original_language}
//             overview={movie.overview}
//             vote_average={movie.vote_average}
//             vote_count={movie.vote_count}
//             popularity={movie.popularity}
//           />
//         ))}
//       </div>
//     </article>
//   );
// }
