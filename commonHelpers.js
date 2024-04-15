import{a as f,S as $,i as O}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const q="43304487-b7d5c7fa3c9a8a42508d5a037";f.defaults.baseURL="https://pixabay.com";const y=async(s,e,r)=>{const l={params:{key:q,q:s,image_type:"photo",orientation:"horizontal",page:e,per_page:r,safesearch:"true"}};return await f.get("/api",l)};function p(s){return s.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          data-source="${e.largeImageURL}"
          alt="${e.tags}"
          title="${e.tags}"
        />
        <div class="gallery-stat">
           <div class="gallery-stat-item">
              <b class="gallery-stat-item-b">Likes</b>
              <p class="gallery-stat-item-p">${e.likes}</p>
            </div>
            <div class="gallery-stat-item">
              <b class="gallery-stat-item-b">Views</b>
              <p class="gallery-stat-item-p">${e.views}</p>
            </div>
            <div class="gallery-stat-item">
              <b class="gallery-stat-item-b">Comments</b>
              <p class="gallery-stat-item-p">${e.comments}</p>
            </div>
          <div class="gallery-stat-item">
              <b class="gallery-stat-item-b">Downloads</b>
              <p class="gallery-stat-item-p">${e.downloads}</p>
          </div>
        </div>      
      </a>
    </li>`).join("")}const h="/goit-js-hw-12/assets/octagon-7962080a.svg",E="/goit-js-hw-12/assets/bell-28eb2f9b.svg",x="/goit-js-hw-12/assets/check2circle-2492957f.svg",L=new $(".gallery a",{captionData:"alt",captionDelay:250}),m=document.querySelector(".form-search"),u=document.querySelector(".gallery"),v=document.querySelector(".loader"),i=document.querySelector(".btn-load-more");m.addEventListener("submit",F);i.addEventListener("click",M);let o=1;const n=15;let c=null,b=null;async function F(s){if(s.preventDefault(),c=s.currentTarget.elements.search.value.trim(),u.innerHTML="",o=1,c==="")i.classList.add("is-hidden"),d("You entered an empty string!","#EF4040",h),m.reset();else try{i.classList.add("is-hidden"),w();const{data:{totalHits:e,hits:r}}=await y(c,o,n);r.length!=0?(b=Math.ceil(e/n),u.innerHTML=p(r),L.refresh(),d(`We found ${e} images!`,"#59A10D",x),e>n&&i.classList.remove("is-hidden")):d(`Sorry, there are no images matching 
            your search query. Please, try again!`,"#EF4040",h),m.reset()}catch(e){console.log(e.message)}finally{S()}}function d(s,e,r){O.show({message:s,messageColor:"white",backgroundColor:e,closeOnEscape:!0,position:"topRight",iconUrl:r,iconColor:"white",iconColor:"white",theme:"dark",maxWidth:"350px"})}function w(){v.classList.remove("is-hidden")}function S(){v.classList.add("is-hidden")}async function M(){i.classList.add("is-hidden"),w(),o+=1;try{const{data:{hits:s}}=await y(c,o,n);u.insertAdjacentHTML("beforeend",p(s)),L.refresh();const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),i.classList.remove("is-hidden"),b===o&&(i.classList.add("is-hidden"),d("We're sorry, but you've reached the end of search results.","#0099FF",E))}catch(s){console.log(s.message)}finally{S()}}
//# sourceMappingURL=commonHelpers.js.map
