const createSectionModule=(e,t,a=[],s=[])=>{const n=document.createElement("section"),o=document.createElement("div"),_=document.createElement("button"),l=document.createElement("img"),c=document.createElement("h3"),r=document.createElement("paragraph");let i,m="",u="";for(let e=0;e<a.length;e++)m+=a[e];for(let e=0;e<s.length;e++)u+=s[e];console.log(u),i=sessionStorage.getItem("userCounter")?sessionStorage.getItem("userCounter"):0,n.setAttribute("class","component"),o.setAttribute("class","component-content"),l.setAttribute("class","component-image"),l.setAttribute("src",t.image.src),l.setAttribute("alt",t.image.alt),l.setAttribute("srcset",m),l.setAttribute("sizes",u),c.setAttribute("class","component-header"),r.setAttribute("class","component-paragraph"),_.setAttribute("class","component-button"),_.textContent=t.buttonContent,c.textContent=t.header,r.textContent=t.paragraph,o.appendChild(c),o.appendChild(r),o.appendChild(_),n.appendChild(l),n.appendChild(o),_.addEventListener("click",()=>{sessionStorage.setItem("userCounter",++i),modal({headerContent:"Alert!",paragraphContent:`You have clicked <strong>${sessionStorage.getItem("userCounter")} times </strong>  to related button.`})}),e.appendChild(n)},modal=(createSectionModule(document.body,{buttonContent:"Button",header:"Lorem Ipsum",paragraph:"Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.",image:{src:"%PUBLIC_URL%/../images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg",alt:"sectionImage"}},["./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450.jpg 450w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_480.jpg 480w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_480.jpg 480w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg 538w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg 596w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_630.jpg 630w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_4_3,c_fill,g_auto__c_scale,w_694.jpg 694w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_720.jpg 720w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg 784w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1002.jpg 1002w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1234.jpg 1234w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1394.jpg 1394w,","./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg 1400w,"],["(max-width: 1040px) 100vw, 505px"]),({headerContent:e,paragraphContent:t})=>{const a=document.createElement("section"),s=document.createElement("dialog"),n=document.createElement("button"),o=document.createElement("h2"),_=document.createElement("p");var l=sessionStorage.getItem("userCounter");if(s.appendChild(o),s.appendChild(_),s.appendChild(n),5<Number(l)){const c=document.createElement("button");c.textContent="Resetuj licznik",c.setAttribute("class","reset-user-counter-btn"),c.addEventListener("click",()=>{sessionStorage.setItem("userCounter",0),location.reload(!0)}),s.appendChild(c)}n.setAttribute("class","close-modal-button"),n.textContent="X",o.textContent=e,_.innerHTML=t,a.appendChild(s),n.setAttribute("data-variant","close-modal"),a.setAttribute("class","modal-background"),a.setAttribute("data-variant","close-modal"),s.setAttribute("class","modal"),a.addEventListener("click",e=>{e=e.target.dataset.variant;"close-modal"==e&&a.remove()}),document.body.appendChild(a)});