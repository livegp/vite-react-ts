import{n as l,j as e,c as p,k as m,a as o,r as g,T as h,C as f,b as v,F as u}from"./index-CIdRevfS.js";const w={avif:"/vite-react-ts/assets/vite-BmXhp8or.avif 100w, /vite-react-ts/assets/vite-B3Dp-wDg.avif 300w, /vite-react-ts/assets/vite-4Siq62t4.avif 500w",webp:"/vite-react-ts/assets/vite-B8xzYHYZ.webp 100w, /vite-react-ts/assets/vite-DLjWPP7d.webp 300w, /vite-react-ts/assets/vite-CWykc8u3.webp 500w",jpeg:"/vite-react-ts/assets/vite-rnr-Fxhl.jpg 100w, /vite-react-ts/assets/vite-naAt2f8L.jpg 300w, /vite-react-ts/assets/vite-CNn45MDi.jpg 500w"},b={src:"/vite-react-ts/assets/vite-CNn45MDi.jpg",w:500,h:250},x={sources:w,img:b},k=l("button",{target:"e1e3hmnn0"})("border-radius:8px;border:1px solid transparent;padding:0.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color 0.25s;&:hover{border-color:#646cff;}&:focus,&:focus-visible{outline:4px auto -webkit-focus-ring-color;}@media (prefers-color-scheme:light){background-color:#f9f9f9;}"),y=({onClick:t,label:r})=>e(k,{type:"button",onClick:t,children:r}),j=m("from{transform:rotate(0deg);}to{transform:rotate(360deg);}"),C=l("svg",{target:"euuhbx20"})("height:6em;width:6em;padding:1.5em;will-change:filter;transition:filter 300ms;&:hover{filter:",t=>t.primary?"drop-shadow(0 0 2em #61dafbaa)":"drop-shadow(0 0 2em #646cffaa)",";}",t=>t.animated?p`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${j} infinite 20s linear;
          }
        `:null),a=({name:t,animated:r=!1,primary:s=!1})=>e(C,{animated:r,primary:s,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-label":`Logo ${t}`,children:e("use",{xlinkHref:`spritemap.svg#${t}`})}),n=({href:t,children:r})=>e("a",{href:t,target:"_blank",rel:"noreferrer",children:r}),S=({picture:{img:{src:t,w:r,h:s},sources:i}})=>o("picture",{children:[Object.entries(i).map(([c,d])=>e("source",{srcSet:d,type:`image/${c}`},c)),e("img",{src:t,alt:"Example",width:r,height:s,loading:"eager",title:"Example Image"})]}),D=()=>{const[t,r]=g.useState(0),s=()=>{r(i=>i+1)};return o(u,{children:[o("div",{children:[e(n,{href:"https://vitejs.dev",children:e(a,{name:"vite",primary:!0})}),e(n,{href:"https://react.dev",children:e(a,{name:"react",animated:!0})}),e(n,{href:"https://typescriptlang.org/",children:e(a,{name:"ts"})})]}),e(h,{children:"Vite + React + TS"}),e(f,{children:e(y,{label:`count is ${t}`,onClick:s})}),e(v,{children:"Click on logos to learn more"}),e(S,{picture:x})]})};export{D as HomePage,D as default};
//# sourceMappingURL=index-n2UXaR33.js.map