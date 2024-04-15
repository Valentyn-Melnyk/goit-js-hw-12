import{a as y,S as E,i as $}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const F="43304487-b7d5c7fa3c9a8a42508d5a037";y.defaults.baseURL="https://pixabay.com";const f=async(s,e,r)=>{const n={params:{key:F,q:s,image_type:"photo",orientation:"horizontal",page:e,per_page:r,safesearch:"true"}};return await y.get("/api",n)};function p(s){return s.map(e=>`
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
    </li>`).join("")}const c="/goit-js-hw-12/assets/octagon-7962080a.svg",O="/goit-js-hw-12/assets/bell-28eb2f9b.svg",q="/goit-js-hw-12/assets/check2circle-2492957f.svg",L=new E(".gallery a",{captionData:"alt",captionDelay:250}),h=document.querySelector(".form-search"),u=document.querySelector(".gallery"),w=document.querySelector(".loader"),i=document.querySelector(".btn-load-more");h.addEventListener("submit",x);i.addEventListener("click",M);let l=1;const d=15;let g=null,v=null;async function x(s){if(s.preventDefault(),g=s.currentTarget.elements.search.value.trim(),u.innerHTML="",l=1,g==="")i.classList.add("is-hidden"),o("You entered an empty string!","#EF4040",c),h.reset();else try{i.classList.add("is-hidden"),b();const{data:{totalHits:e,hits:r}}=await f(g,l,d);r.length!=0?(v=Math.ceil(e/d),u.innerHTML=p(r),L.refresh(),o(`We found ${e} images!`,"#59A10D",q),e>d&&i.classList.remove("is-hidden")):o(`Sorry, there are no images matching 
            your search query. Please, try again!`,"#EF4040",c),h.reset()}catch(e){console.log(e.message),o("Ups! Something went wrong, please try again later!","#EF4040",c)}finally{S()}}function o(s,e,r){$.show({message:s,messageColor:"white",backgroundColor:e,closeOnEscape:!0,position:"topRight",iconUrl:r,iconColor:"white",iconColor:"white",theme:"dark",maxWidth:"350px"})}function b(){w.classList.remove("is-hidden")}function S(){w.classList.add("is-hidden")}async function M(){i.classList.add("is-hidden"),b(),l+=1;try{const{data:{hits:s}}=await f(g,l,d);u.insertAdjacentHTML("beforeend",p(s)),L.refresh();const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),i.classList.remove("is-hidden"),v===l&&(i.classList.add("is-hidden"),o("We're sorry, but you've reached the end of search results.","#0099FF",O))}catch(s){console.log(s.message),o("Ups! Something went wrong, please try again later!","#EF4040",c)}finally{S()}}
//# sourceMappingURL=commonHelpers.js.map
