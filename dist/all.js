const createSectionModule=(e,t,a=[],s=[])=>{const n=document.createElement("section"),o=document.createElement("div"),_=document.createElement("button"),c=document.createElement("img"),l=document.createElement("h3"),r=document.createElement("p");let i,m="",u="";for(const d of a)m+=d;for(const p of s)u+=p;i=sessionStorage.getItem("userCounter")?sessionStorage.getItem("userCounter"):0,n.setAttribute("class","component"),o.setAttribute("class","component-content"),c.setAttribute("class","component-image"),c.setAttribute("src",t.image.src),c.setAttribute("alt",t.image.alt),c.setAttribute("srcset",m),c.setAttribute("sizes",u),l.setAttribute("class","component-header"),r.setAttribute("class","component-paragraph"),_.setAttribute("class","component-button"),_.textContent=t.buttonContent,l.textContent=t.header,r.textContent=t.paragraph,o.appendChild(l),o.appendChild(r),o.appendChild(_),n.appendChild(c),n.appendChild(o),_.addEventListener("click",()=>{sessionStorage.setItem("userCounter",++i),modal({headerContent:"Alert!",paragraphContent:`You have clicked <strong>${sessionStorage.getItem("userCounter")} times </strong>  to related button.`})}),e.appendChild(n)},root=document.getElementById("root"),content={buttonContent:"Button",header:"Lorem Ipsum",paragraph:"Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.",image:{src:"%PUBLIC_URL%/../images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg",alt:"sectionImage"}},sizes=["(max-width: 1200px) 100vw, 505px"],srcset=["./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450.jpg 450w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_480.jpg 480w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_480.jpg 480w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg 538w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg 596w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_630.jpg 630w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_4_3,c_fill,g_auto__c_scale,w_694.jpg 694w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_720.jpg 720w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg 784w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1002.jpg 1002w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1234.jpg 1234w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1394.jpg 1394w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg 1400w,"],modal=(createSectionModule(root,content,srcset,sizes),({headerContent:e,paragraphContent:t})=>{const a=document.createElement("section"),s=document.createElement("dialog"),n=document.createElement("button"),o=document.createElement("h2"),_=document.createElement("p");var c=sessionStorage.getItem("userCounter");if(s.appendChild(o),s.appendChild(_),s.appendChild(n),5<Number(c)){const l=document.createElement("button");l.setAttribute("class","reset-user-counter-btn"),l.textContent="Resetuj licznik",l.addEventListener("click",()=>{sessionStorage.setItem("userCounter",0),location.reload(!0)}),s.appendChild(l)}n.textContent="X",o.textContent=e,_.innerHTML=t,n.setAttribute("class","close-modal-button"),n.setAttribute("data-variant","close-modal"),a.setAttribute("class","modal-background"),a.setAttribute("data-variant","close-modal"),s.setAttribute("class","modal"),a.addEventListener("click",e=>{e=e.target.dataset.variant;"close-modal"==e&&a.remove()}),window.addEventListener("keyup",e=>{"Escape"===e.code&&a.remove()}),a.appendChild(s),document.body.appendChild(a)});