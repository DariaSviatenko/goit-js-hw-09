const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let r=null;t.addEventListener("click",(()=>{t.setAttribute("disabled",!0),r=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(()=>{t.removeAttribute("disabled"),clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.31f43418.js.map