document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("accordion");e&&e.addEventListener("click",(t=>{const n=t.target,r=e.querySelectorAll(".action__item"),o=n.classList.contains("action__head"),s="SPAN"===n.tagName,i="H5"===n.tagName;if(o||s||i){const e=n.closest(".action__item");r.forEach((e=>{e.classList.remove("active")})),e.classList.toggle("active")}}))})),document.addEventListener("DOMContentLoaded",(e=>{const t=document.querySelector(".nav--header"),n=document.querySelector(".nav--footer"),r=document.querySelector(".nav--sidebar");function o(e,t,n="nav__item"){t.querySelectorAll(`.${n}`).forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}t.addEventListener("click",(e=>{const t=e.target.getAttribute("href")[0];if("#"===t&&e.preventDefault(),!e.target.classList.contains("nav__item"))return;o(e.target,e.currentTarget);const n=document.querySelector(".nav--footer"),[...r]=n.querySelectorAll(".nav__item");o(r.find((t=>t.href===e.target.href)),n);const s=e.target.getAttribute("href").substring(1);"#"===t&&document.getElementById(s).scrollIntoView({behavior:"smooth",block:"start"})})),n.addEventListener("click",(e=>{const t=e.target.getAttribute("href")[0];if("#"===t&&e.preventDefault(),!e.target.classList.contains("nav__item"))return;o(e.target,e.currentTarget);const n=document.querySelector(".nav"),[...r]=n.querySelectorAll(".nav__item");o(r.find((t=>t.href===e.target.href)),n);const s=e.target.getAttribute("href").substring(1);"#"===t&&document.getElementById(s).scrollIntoView({behavior:"smooth",block:"start"})})),r.addEventListener("click",(e=>{const t=e.target.getAttribute("href")[0];if("#"===t&&e.preventDefault(),!e.target.classList.contains("nav__item"))return;o(e.target,e.currentTarget);const n=document.querySelector(".nav--footer"),[...r]=n.querySelectorAll(".nav__item");o(r.find((t=>t.href===e.target.href)),n);const s=e.target.getAttribute("href").substring(1);"#"===t&&document.getElementById(s).scrollIntoView({behavior:"smooth",block:"start"}),document.body.classList.remove("show-sidebar")}));const s=document.getElementById("activity"),i=document.querySelector(".activity__slider");if(i){const e=Number.parseFloat(window.getComputedStyle(s,null).height),t=Number.parseFloat(window.getComputedStyle(i,null).height),n=Number.parseInt(t/e*100);window.screen.width<993&&(s.style.backgroundImage=`linear-gradient(to top, #f2effa 0, #f2effa ${n}%, #fff ${n}%, #fff 100%)`)}})),$(document).ready((function(){$(".slider").slick({centerMode:!0,centerPadding:"",slidesToShow:3,infinite:!0,responsive:[{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"72px",arrows:!1}}]}),$(".t-slider").slick({centerMode:!0,centerPadding:"",slidesToShow:3,responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:2,centerPadding:"230px"}},{breakpoint:780,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"120px"}},{breakpoint:577,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"80px",arrows:!1}},{breakpoint:460,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"40px",arrows:!1}}]})})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("burger"),t=(document.getElementById("sidebar"),document.body),n=document.getElementById("pageMask");e.addEventListener("click",(e=>{t.classList.toggle("show-sidebar")})),n.addEventListener("click",(e=>{t.classList.remove("show-sidebar")}))}));