let counter=0;const imagePath="/images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg",titleText="Lorem Ipsum",descriptionText="Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.",buttonMainText="Button",alertTitle="Alert!",onMainButtonClick=()=>{counter+=1;let t="";t=1===counter?"time":"times",document.getElementById("alert-content").textContent=`You have clicked ${counter} ${t} to related button`,document.getElementsByClassName("blured")[0].style.display="flex"};function createModule(t,e,n,a){var i=(t,e,n)=>{const a=document.createElement(t);return a.classList.add(e),"h1"===t||"p"===t||"button"===t||"span"===t?a.textContent=n:"img"===t&&a.setAttribute("src",n),a};const o=i("div","image-section"),c=i("div","content-section");document.querySelector(".main-container").append(o,c);t=i("img","image",t),o.appendChild(t),t=i("h1","title",e),e=i("p","description",n);const d=i("button","button-main",a);c.append(t,e,d),d.addEventListener("click",onMainButtonClick)}function createPopup(t){var e=(t,e,n)=>{const a=document.createElement(t);return a.classList.add(e),"h1"===t||"p"===t||"button"===t||"span"===t?a.textContent=n:"img"===t&&a.setAttribute("src",n),a};const n=e("div","blured"),a=(document.querySelector(".main-container").appendChild(n),n.addEventListener("click",t=>{t.stopPropagation(),t.target!==d&&t.target!==n||(n.style.display="none")}),e("div","popup")),i=(n.appendChild(a),e("div","close")),o=e("div","popUpContent"),c=(a.append(i,o),e("div","close-button")),d=(i.appendChild(c),e("span","x-icon","+"));c.append(d);t=e("h1","title",t);const r=e("p","description","");r.setAttribute("id","alert-content"),o.append(t,r)}createPopup(alertTitle),createModule(imagePath,titleText,descriptionText,buttonMainText);