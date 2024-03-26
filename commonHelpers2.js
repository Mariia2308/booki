import{i as r,a as p,T as n,g as d}from"./assets/switch-button-5d4f229b.js";import"./assets/vendor-f87d3a68.js";const h="/booki/assets/IMG_9606-a8e7c57b.png",m="/booki/assets/amazon-2651c11a.svg",k="/booki/assets/book-5e54f05d.svg",b="/booki/assets/trash-121ef440.svg",i=document.querySelector(".shoppinglist-container"),l=`
    <div class="shoppinglist-blocks">
        <h2 class="text">This page is empty, add some books and proceed to order.</h2>
        <img src="${h}" alt="Shopping Image" class="shoppinglist-img96061">
    </div>
`;async function u(){try{const s=r(n);if(!s||!s.length){i.innerHTML=l;return}let t="";for(const o of s){const a=await d(o.constID);t+=f(a,o)}i.innerHTML=t}catch(s){console.error("Error fetching book data:",s)}}function f(s,t){return`
    <div class="container-block" id="${t.constID}">
        <div class="btn-and-links">
            <button class="trash-btn"><img src="${b}" alt=""></button>
            <ul class="links">
                <li><img src="${m}" class="amazon"></li>
                <li><img src="${k}"></li>
            </ul>
        </div>
        <img src="${s.book_image}" alt="${s.title}" class="book-image">
        <div class="text-area">
            <h2 class="shopping-list-title">${s.title}</h2>
            <h2 class="shopping-list-title-name">${s.list_name}</h2>
            <p class="shopping-list-description">${s.description}</p>
            <h2 class="shopping-list-author">${s.author}</h2>
        </div>
    </div>
  `}i.addEventListener("click",function(s){const t=s.target;if(s.target.parentNode.nodeName==="BUTTON"||s.target.nodeName==="BUTTON"){const o=t.closest(".container-block"),a=o.getAttribute("id");let e=[];const g=r(n);for(const c of g)c.constID!==a&&e.push(c);p(n,e),o.remove(),i.querySelector(".container-block")||(i.innerHTML=l)}});u();
//# sourceMappingURL=commonHelpers2.js.map
