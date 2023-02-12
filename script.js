var main=document.querySelector("#main");
var first=document.querySelector("#first");
var second=document.querySelector("#second");
var third=document.querySelector("#third");
var fourth=document.querySelector("#fourth");
var fifth=document.querySelector("#fifth");

var prev1=document.querySelector("#prev1");
var next1=document.querySelector("#next1");

var prev2=document.querySelector("#prev2");
var next2=document.querySelector("#next2");

var prev3=document.querySelector("#prev3");
var next3=document.querySelector("#next3");

var prev4=document.querySelector("#prev4");
var next4=document.querySelector("#next4");

var prev5=document.querySelector("#prev5");
var next5=document.querySelector("#next5");



next1.addEventListener("click",function(){
    first.style.display="none";
    second.style.display="flex";
    third.style.display="none";
    fourth.style.display="none";
    fifth.style.display="none";
    main.style.backgroundImage="url(https://www.jagranimages.com/images/newimg/23052022/23_05_2022-nikamma_song_22737449.jpg)"
})

prev2.addEventListener("click",function(){
    first.style.display="flex";
    second.style.display="none";
    third.style.display="none";
    fourth.style.display="none";
    fifth.style.display="none";
    main.style.backgroundImage="url(https://www.filmibeat.com/img/2022/07/kesariya-2022-07-17at12-1658051669.jpg)";
})
next2.addEventListener("click",function(){
    first.style.display="none";
    second.style.display="none";
    third.style.display="flex";
    fourth.style.display="none";
    fifth.style.display="none";
    main.style.backgroundImage="url(https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/04/14/565562-raabta.jpg)";
})

prev3.addEventListener("click",function(){
    first.style.display="none";
    second.style.display="flex";
    third.style.display="none";
    fourth.style.display="none";
    fifth.style.display="none";
    main.style.backgroundImage="url(https://www.glamsham.com/wp-content/uploads/2022/05/Nikamma-Title-Track-Lyrics-starring-Abhimanyu-Dassani-Shilpa-Shetty-and-Shirley-Sethia-pic-courtesy-yt.jpg)"
})
next3.addEventListener("click",function(){
    first.style.display="none";
    second.style.display="none";
    third.style.display="none";
    fourth.style.display="flex";
    fifth.style.display="none";
    main.style.backgroundImage="url(https://i.ytimg.com/vi/DB3D-mtWR0c/maxresdefault.jpg)";
})

prev4.addEventListener("click",function(){
    first.style.display="none";
    second.style.display="none";
    third.style.display="flex";
    fourth.style.display="none";
    fifth.style.display="none";
    main.style.backgroundImage="url(https://static-koimoi.akamaized.net/wp-content/new-galleries/2017/05/raabta-music-review-is-bollywood-losing-its-capability-to-create-new-songs-1.jpg)";
})
next4.addEventListener("click",function(){
    first.style.display="none";
    second.style.display="none";
    third.style.display="none";
    fourth.style.display="none";
    fifth.style.display="flex";
    main.style.backgroundImage="url(https://i.ytimg.com/vi/sqyWwqg9wwE/maxresdefault.jpg)";
})

prev5.addEventListener("click",function(){
    first.style.display="none";
    second.style.display="none";
    third.style.display="none";
    fourth.style.display="flex";
    fifth.style.display="none";
    main.style.backgroundImage="url(https://i.ytimg.com/vi/DB3D-mtWR0c/maxresdefault.jpg)";
})