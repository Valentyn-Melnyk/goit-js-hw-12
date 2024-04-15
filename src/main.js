import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getFotos } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import octagon from './img/octagon.svg';
import bell from './img/bell.svg';
import check2circle from './img/check2circle.svg';

const lightbox = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.form-search');
const imagesList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const getFotosBtn = document.querySelector('.btn-load-more');

form.addEventListener('submit', handleSubmit);
getFotosBtn.addEventListener('click', OnBtnLoadMore);

let page = 1;
const per_page = 15;
let formSearch = null;
let lastPage = null;

async function handleSubmit(event) {
  event.preventDefault();
  formSearch = event.currentTarget.elements.search.value.trim();
  imagesList.innerHTML = '';
  page = 1;

  if (formSearch === '') {
    getFotosBtn.classList.add('is-hidden');
    showMessage(`You entered an empty string!`, '#EF4040', octagon);
    form.reset();
  } else {
    try {
      getFotosBtn.classList.add('is-hidden');
      showLoader();
      // const res = await getFotos(formSearch, page, per_page);
      // на цьому робимо глибоку деструктуризацію
      const {
        data: { totalHits, hits },
      } = await getFotos(formSearch, page, per_page);
      if (hits.length != 0) {
        // було так
        //if (res.data.hits.length != 0) {
        // lastPage = Math.ceil(res.data.totalHits / per_page);
        lastPage = Math.ceil(totalHits / per_page);
        imagesList.innerHTML = renderImages(hits);
        lightbox.refresh();
        showMessage(`We found ${totalHits} images!`, '#59A10D', check2circle);
        if (totalHits > per_page) {
          getFotosBtn.classList.remove('is-hidden');
        }
      } else {
        showMessage(
          `Sorry, there are no images matching 
            your search query. Please, try again!`,
          '#EF4040',
          octagon
        );
      }
      form.reset();
    } catch (error) {
      // сonsole.log(error.response.status);
      console.log(error.message);
      // showMessage(
      //   `Ups! Something went wrong, please try again later!`,
      //   '#EF4040',
      //   octagon
      // );
    } finally {
      hideLoader();
    }
  }
}

function showMessage(message, backgroundColor, iconUrl) {
  // частково короткі властивості
  iziToast.show({
    message,
    messageColor: 'white',
    backgroundColor,
    closeOnEscape: true,
    position: 'topRight',
    iconUrl,
    iconColor: 'white',
    iconColor: 'white',
    theme: 'dark',
    maxWidth: '350px',
  });
}

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

async function OnBtnLoadMore() {
  getFotosBtn.classList.add('is-hidden');
  showLoader();
  page += 1;
  try {
    // const res = await getFotos(formSearch, page, per_page);
    // на цьому робимо глибоку деструктуризацію
    const {
      data: { hits },
    } = await getFotos(formSearch, page, per_page);

    imagesList.insertAdjacentHTML('beforeend', renderImages(hits));
    lightbox.refresh();

    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    getFotosBtn.classList.remove('is-hidden');
    if (lastPage === page) {
      getFotosBtn.classList.add('is-hidden');

      showMessage(
        `We're sorry, but you've reached the end of search results.`,
        '#0099FF',
        bell
      );
    }
  } catch (error) {
    // сonsole.log(error.response.status);
    console.log(error.message);
    // showMessage(
    //   `Ups! Something went wrong, please try again later!`,
    //   '#EF4040',
    //   octagon
    // );
  } finally {
    hideLoader();
  }
}
