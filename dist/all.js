const createSectionModule=(t,e)=>{const a=document.createElement("section"),n=document.createElement("div"),o=document.createElement("button"),d=document.createElement("img"),c=document.createElement("h3"),r=document.createElement("paragraph");a.setAttribute("class","component"),n.setAttribute("class","component-content"),d.setAttribute("class","component-image"),d.setAttribute("src",e.image.src),d.setAttribute("alt",e.image.alt),c.setAttribute("class","component-header"),r.setAttribute("class","component-paragraph"),o.setAttribute("class","component-button"),o.textContent=e.buttonContent,c.textContent=e.header,r.textContent=e.paragraph,o.addEventListener("click",()=>modal({headerContent:"Alert!",paragraphContent:"You have clicked X times to related button."})),n.appendChild(c),n.appendChild(r),n.appendChild(o),a.appendChild(d),a.appendChild(n),t.appendChild(a)},modal=(createSectionModule(document.body,{buttonContent:"Button",header:"Lorem Ipsum",paragraph:"Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.",image:{src:"%PUBLIC_URL%/../images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg",alt:"sectionImage"}}),({headerContent:t,paragraphContent:e})=>{const a=document.createElement("section"),n=document.createElement("dialog"),o=document.createElement("button"),d=document.createElement("h2"),c=document.createElement("p");o.textContent="X",d.textContent=t,c.textContent=e,a.appendChild(n),o.setAttribute("data-variant","close-modal"),a.setAttribute("class","modal-background"),a.setAttribute("data-variant","close-modal"),n.setAttribute("class","modal"),n.appendChild(d),n.appendChild(c),n.appendChild(o),a.addEventListener("click",function(t){t=t.target.dataset.variant;"close-modal"==t&&this.remove()}),document.body.appendChild(a)});