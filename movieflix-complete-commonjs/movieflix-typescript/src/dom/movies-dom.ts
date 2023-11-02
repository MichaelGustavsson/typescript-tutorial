import { BaseInfo } from '../models/baseInfo';
import { listAllMovies, searchMovies } from '../movies.js';

document.querySelector<HTMLFormElement>('#searchForm')!.addEventListener('submit', onSearch);
document.querySelector<HTMLSpanElement>('#gotoFirst')!.addEventListener('click', onGotoFirstPageHandler);
document.querySelector<HTMLSpanElement>('#gotoPrevious')!.addEventListener('click', onGotoPrevHandler);
document.querySelector<HTMLSpanElement>('#gotoNext')!.addEventListener('click', onGotoNextPageHandler);
document.querySelector<HTMLSpanElement>('#gotoLast')!.addEventListener('click', onGotoLastPageHandler);

const pageNumber = document.querySelector<HTMLSpanElement>('#pageNo');
const pages = document.querySelector<HTMLSpanElement>('#pages');

async function getMovies(page: number = 1): Promise<void> {
  let result: BaseInfo;
  let query: string = document.querySelector<HTMLInputElement>('#searchInput')!.value;

  if (query) {
    result = await searchMovies(query, page);
  } else {
    result = await listAllMovies(page);
  }

  displayPagination(result);
  displayMovies(result);
}

async function displayMovies(result: BaseInfo): Promise<void> {
  const app = document.querySelector('#top-movies') as HTMLDivElement;
  app.innerHTML = '';

  const movies = result.results;

  for (let movie of movies) {
    const div = document.createElement('div');
    const imageAnchor = document.createElement('a');
    const image = document.createElement('img');
    const cardBody = document.createElement('div');
    const heading = document.createElement('h5');
    const p = document.createElement('p');
    const small = document.createElement('small');

    div.classList.add('card');
    imageAnchor.href = `./movie-details.html?id=${movie.id}`;
    image.alt = `alt=${movie.title}`;
    image.src = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '../dist/assets/images/No-Image.jpg';
    imageAnchor.appendChild(image);
    div.appendChild(imageAnchor);

    cardBody.classList.add('card-body');
    heading.classList.add('card-title');
    heading.textContent = movie.title;

    p.classList.add('card-text');
    p.classList.add('text-muted');
    small.textContent = `Premiär datum: ${movie.release_date}`;
    p.appendChild(small);

    cardBody.appendChild(heading);
    cardBody.appendChild(p);
    div.appendChild(cardBody);
    app.appendChild(div);
  }
}

function displayPagination(data: BaseInfo): void {
  const pages = data.total_pages > 500 ? 500 : data.total_pages;
  const currentPage = document.querySelector('#pageNo')!;
  const numOfPages = document.querySelector('#pages')!;
  currentPage.innerHTML = data.page.toString();
  numOfPages.innerHTML = pages.toString();
}

function onGotoFirstPageHandler(): void {
  getMovies(1);
}

function onGotoPrevHandler(): void {
  let page: number = +pageNumber!.innerHTML;
  page > 1 ? page-- : 1;
  getMovies(page);
}

async function onGotoNextPageHandler(): Promise<void> {
  const numOfPages: number = +pages!.innerHTML;
  let page: number = +pageNumber!.innerHTML;
  page < numOfPages ? page++ : 500;
  getMovies(page);
}

function onGotoLastPageHandler(): void {
  getMovies(+pages!.innerHTML);
}

async function onSearch(e: SubmitEvent): Promise<void> {
  e.preventDefault();

  getMovies(1);
}

getMovies();
