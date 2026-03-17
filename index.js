/* empty css                      */import{a as d,S as f,i as a}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",m="55067966-cf05e757d51b20726f9c2f743";async function y(o){return(await d.get(p,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:l,downloads:u})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${i}" alt="${e}" />
        </a>
        <div class="info">
          <p>Likes: ${t}</p>
          <p>Views: ${n}</p>
          <p>Comments: ${l}</p>
          <p>Downloads: ${u}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function L(){c.innerHTML=""}function S(){document.querySelector(".loader").classList.remove("hidden")}function w(){document.querySelector(".loader").classList.add("hidden")}const b=document.querySelector(".form");b.addEventListener("submit",q);async function q(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search query!",position:"topRight"});return}L(),S();try{const i=await y(r);if(i.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i.hits)}catch{a.error({message:"Something went wrong. Try again later!",position:"topRight"})}finally{w()}}
//# sourceMappingURL=index.js.map
