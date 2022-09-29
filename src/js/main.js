/*import "./main.css";



/*document.getElementById("imageWithText").innerHTML= `<div class="contener"> \
    <div class="imageLarge"> \
         <img width="505" height="330" src="../images/unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg" class="imageLarge" alt="Sunny beach" srcset="../images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg 505w, ../images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_480.jpg 480w, ../images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg 784w, ../images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1002.jpg 1002w, ../images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1234.jpg 1234w, ../images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg 1400w" sizes="(min-width: 460px) 50vw, 505px"></img> \
    </div>\
    <div class="content">\
         <h1>Lorem Ipsum</h1>\
         <p class="copyText">Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.</p>\
         <button><div class="buttonText">Button</div></button>\
    </div>\
</div>`;   Didn't work   */

let n=0;

function hiden ( ){
    document.getElementById("background").classList.remove('overlayHidden');

    n=n+1;
    document.getElementById("variable").innerText=n;
    if(n>5) {
        document.getElementById("cat").classList.remove('overlayHidden');
        
    };
}
function cat ( ){
    n=0;
    document.getElementById("cat").classList.add('overlayHidden');
};



function brumBrum (){
    document.getElementById("background").classList.add('overlayHidden');
};

