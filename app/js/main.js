(()=>{"use strict";var e,t={4:(e,t,r)=>{r(638).ajax({url:"https://api.coincap.io/v2/assets",method:"GET",timeout:0}).done((function(e){for(let t=0;t<e.data.length;t++){let r=document.createElement("div");r.classList.add("field__card");let a=document.createElement("h2");a.classList.add("card__symbol"),a.innerHTML=`${e.data[t].symbol} | `;let c=document.createElement("span");c.classList.add("card__name"),c.innerHTML=`${e.data[t].name}`,a.append(c);let n=document.createElement("p");n.classList.add("card__price"),n.innerHTML=`Price: ${e.data[t].priceUsd.substr(0,10)}$`;let l=document.createElement("p");l.classList.add("card__volume"),l.innerHTML=`Volume USD 24HR: ${e.data[t].volumeUsd24Hr.substr(0,10)}$`;let s=document.createElement("p");s.classList.add("card__vwap24hr"),s.innerHTML=`Intraday settlement: ${e.data[t].vwap24Hr}$`,r.append(a),r.append(n),r.append(l),r.append(s),document.querySelector(".main__field").append(r)}}));let a=document.querySelector(".main__switcher-circle");document.querySelector(".main__switcher").addEventListener("click",(()=>{a.classList.contains("main__switcher-circle_dark")?(a.classList.remove("main__switcher-circle_dark"),a.classList.toggle("main__switcher-circle_light"),document.querySelector(".main__switcher").style.background="#0d1117",document.querySelector("main").style.background="#0d1117",document.querySelector("main").style.color="#c9d1d9"):(a.classList.toggle("main__switcher-circle_dark"),a.classList.remove("main__switcher-circle_light"),document.querySelector(".main__switcher").style.background="#F5F5F5",document.querySelector("main").style.background="#F5F5F5",document.querySelector("main").style.color="#0d1117")}))}},r={};function a(e){var c=r[e];if(void 0!==c)return c.exports;var n=r[e]={exports:{}};return t[e].call(n.exports,n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,r,c,n)=>{if(!r){var l=1/0;for(d=0;d<e.length;d++){for(var[r,c,n]=e[d],s=!0,i=0;i<r.length;i++)(!1&n||l>=n)&&Object.keys(a.O).every((e=>a.O[e](r[i])))?r.splice(i--,1):(s=!1,n<l&&(l=n));s&&(e.splice(d--,1),t=c())}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,c,n]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var c,n,[l,s,i]=r,d=0;for(c in s)a.o(s,c)&&(a.m[c]=s[c]);if(i)var o=i(a);for(t&&t(r);d<l.length;d++)n=l[d],a.o(e,n)&&e[n]&&e[n][0](),e[l[d]]=0;return a.O(o)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=a.O(void 0,[638],(()=>a(4)));c=a.O(c)})();