let e,n,t="",d=0;window.addEventListener("load",(()=>{e=document.querySelector("#board"),function(){t="",e.innerHTML="",n=[],d=0;for(let t=0;t<=21;t++){const d=document.createElement("div");d.classList.add("row");for(let e=0;e<21;e++){const o=document.createElement("div");o.classList.add("cell"),o.innerText=`${e} / ${t}`,n[e]||(n[e]=[]),n[e][t]=o,d.append(o)}e.append(d),console.log(e)}}()}));
//# sourceMappingURL=index.5bd85d2d.js.map
