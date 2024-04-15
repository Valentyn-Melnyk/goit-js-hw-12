import{a as f,S as O,i as y}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();const q="43304487-b7d5c7fa3c9a8a42508d5a037";f.defaults.baseURL="https://pixabay.com";const p=async(s,e,i)=>{const l={params:{key:q,q:s,image_type:"photo",orientation:"horizontal",page:e,per_page:i,safesearch:"true"}};return await f.get("/api",l)};function L(s){return s.map(e=>`
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
    </li>`).join("")}const u="/goit-js-hw-12/assets/octagon-7962080a.svg",E="/goit-js-hw-12/assets/bell-28eb2f9b.svg",x="/goit-js-hw-12/assets/check2circle-2492957f.svg",v=new O(".gallery a",{captionData:"alt",captionDelay:250}),m=document.querySelector(".form-search"),h=document.querySelector(".gallery"),b=document.querySelector(".loader"),r=document.querySelector(".btn-load-more");m.addEventListener("submit",F);r.addEventListener("click",M);let o=1;const n=15;let c=null,w=null;async function F(s){if(s.preventDefault(),c=s.currentTarget.elements.search.value.trim(),h.innerHTML="",o=1,c==="")r.classList.add("is-hidden"),d("You entered an empty string!","#EF4040",u),m.reset();else try{r.classList.add("is-hidden"),S();const{data:{totalHits:e,hits:i}}=await p(c,o,n);i.length!=0?(w=Math.ceil(e/n),h.innerHTML=L(i),v.refresh(),d(`We found ${e} images!`,"#59A10D",x),e>n&&r.classList.remove("is-hidden")):d(`Sorry, there are no images matching 
            your search query. Please, try again!`,"#EF4040",u),m.reset()}catch(e){console.log(e.message),y.error({position:"topRight",message:"Ups! Something went wrong, please try again later!"})}finally{$()}}function d(s,e,i){y.show({message:s,messageColor:"white",backgroundColor:e,closeOnEscape:!0,position:"topRight",iconUrl:i,iconColor:"white",iconColor:"white",theme:"dark",maxWidth:"350px"})}function S(){b.classList.remove("is-hidden")}function $(){b.classList.add("is-hidden")}async function M(){r.classList.add("is-hidden"),S(),o+=1;try{const{data:{hits:s}}=await p(c,o,n);h.insertAdjacentHTML("beforeend",L(s)),v.refresh();const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),r.classList.remove("is-hidden"),w===o&&(r.classList.add("is-hidden"),d("We're sorry, but you've reached the end of search results.","#0099FF",E))}catch{}finally{$()}}
//# sourceMappingURL=commonHelpers.js.map
