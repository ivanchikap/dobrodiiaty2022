document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("accordion");e.addEventListener("click",(t=>{const n=t.target,o=e.querySelectorAll(".action__item"),r=n.classList.contains("action__head"),s="SPAN"===n.tagName,i="H5"===n.tagName;if(r||s||i){const e=n.closest(".action__item");o.forEach((e=>{e.classList.remove("active")})),e.classList.toggle("active")}}))})),document.addEventListener("DOMContentLoaded",(e=>{const t=document.querySelector(".nav"),n=document.querySelector(".nav--footer"),o=document.querySelector(".nav--sidebar");function r(e,t,n="nav__item"){t.querySelectorAll(`.${n}`).forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}t.addEventListener("click",(e=>{if(e.preventDefault(),!e.target.classList.contains("nav__item"))return;r(e.target,e.currentTarget);const t=document.querySelector(".nav--footer"),[...n]=t.querySelectorAll(".nav__item");r(n.find((t=>t.href===e.target.href)),t);const o=e.target.getAttribute("href").substring(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})})),n.addEventListener("click",(e=>{if(e.preventDefault(),!e.target.classList.contains("nav__item"))return;r(e.target,e.currentTarget);const t=document.querySelector(".nav"),[...n]=t.querySelectorAll(".nav__item");r(n.find((t=>t.href===e.target.href)),t);const o=e.target.getAttribute("href").substring(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})})),o.addEventListener("click",(e=>{if(e.preventDefault(),!e.target.classList.contains("nav__item"))return;r(e.target,e.currentTarget);const t=document.querySelector(".nav--footer"),[...n]=t.querySelectorAll(".nav__item");r(n.find((t=>t.href===e.target.href)),t);const o=e.target.getAttribute("href").substring(1);o&&document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"}),document.body.classList.remove("show-sidebar")}));const s=document.getElementById("activity"),i=document.querySelector(".activity__slider"),a=Number.parseFloat(window.getComputedStyle(s,null).height),c=Number.parseFloat(window.getComputedStyle(i,null).height),d=Number.parseInt(c/a*100);window.screen.width<993&&(s.style.backgroundImage=`linear-gradient(to top, #f2effa 0, #f2effa ${d}%, #fff ${d}%, #fff 100%)`)})),$(document).ready((function(){$(".slider").slick({centerMode:!0,centerPadding:"",slidesToShow:3,infinite:!0,responsive:[{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"72px",arrows:!1}}]}),$(".t-slider").slick({centerMode:!0,centerPadding:"",slidesToShow:3,responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:2,centerPadding:"230px"}},{breakpoint:780,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"120px"}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"80px",arrows:!1}},{breakpoint:460,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"40px",arrows:!1}}]})})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("burger"),t=(document.getElementById("sidebar"),document.body),n=document.getElementById("pageMask");e.addEventListener("click",(e=>{t.classList.toggle("show-sidebar")})),n.addEventListener("click",(e=>{t.classList.remove("show-sidebar")}))}));