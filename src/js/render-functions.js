export function renderImages(images) {
  return images
    .map(
      object => `
    <li class="gallery-item">
      <a class="gallery-link" href="${object.largeImageURL}">
        <img
          class="gallery-image"
          src="${object.webformatURL}"
          data-source="${object.largeImageURL}"
          alt="${object.tags}"
          title="${object.tags}"
        />
        <div class="gallery-stat">
           <div class="gallery-stat-item">
              <b class="gallery-stat-item-b">Likes</b>
              <p class="gallery-stat-item-p">${object.likes}</p>
            </div>
            <div class="gallery-stat-item">
              <b class="gallery-stat-item-b">Views</b>
              <p class="gallery-stat-item-p">${object.views}</p>
            </div>
            <div class="gallery-stat-item">
              <b class="gallery-stat-item-b">Comments</b>
              <p class="gallery-stat-item-p">${object.comments}</p>
            </div>
          <div class="gallery-stat-item">
              <b class="gallery-stat-item-b">Downloads</b>
              <p class="gallery-stat-item-p">${object.downloads}</p>
          </div>
        </div>      
      </a>
    </li>`
    )
    .join('');
}
