!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=null;t.addEventListener("click",(function(){t.setAttribute("disabled",!0),n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.a2c7c633.js.map
