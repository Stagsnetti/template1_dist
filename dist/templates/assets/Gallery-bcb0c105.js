import{r as a,j as s}from"../template1.js";import{i as x}from"./index.esm-d4aa6f5c.js";import{c as f}from"./index-d40a9b99.js";const u=["xxl","xl","lg","md","sm","xs"],j="xs",w=a.createContext({prefixes:{},breakpoints:u,minBreakpoint:j});function b(r,c){const{prefixes:n}=a.useContext(w);return r||n[c]||c}const m=a.forwardRef(({bsPrefix:r,variant:c,animation:n="border",size:t,as:e="div",className:l,...o},p)=>{r=b(r,"spinner");const d=`${r}-${n}`;return s.jsx(e,{ref:p,...o,className:f(l,d,t&&`${d}-${t}`,c&&`text-${c}`)})});m.displayName="Spinner";const i=m;function y({apiData:r,activeSection:c,firstImage:n}){let t=[];if(r&&r.details&&r.details.propertylist&&r.details.propertylist[0]){const e=c*5,l=r.details.propertylist[0].property_image_list||[];n&&(l[0]=n),t=l.slice(e,e+5).map((o,p)=>({src:o.image_url,alt:o.image_caption,className:"w-full md:w-6/12 lg:w-5/12 h-[300px] rounded-3xl object-cover"}))}return s.jsxs("div",{className:"flex flex-wrap justify-center lg:px-0 px-4 py-8 gap-3",children:[t.slice(0,1).map((e,l)=>s.jsx(a.Suspense,{fallback:s.jsx(i,{animation:"border"}),children:s.jsx(x,{className:"w-full md:w-6/12 lg:w-5/12 h-[300px] rounded-3xl object-cover",src:e.src,alt:e.alt,lazy:!0})},l)),t.slice(1,2).map((e,l)=>s.jsx(a.Suspense,{fallback:s.jsx(i,{animation:"border"}),children:s.jsx(x,{className:"w-full md:w-5/12 lg:w-3/12 h-[300px] rounded-3xl object-cover",src:e.src,alt:e.alt,lazy:!0})},l)),s.jsxs("div",{className:"w-full lg:w-3/12 flex lg:flex-col md:flex-row flex-col justify-between gap-2 lg:mx-0 md:mx-6",children:[t.slice(2,3).map((e,l)=>s.jsx(a.Suspense,{fallback:s.jsx(i,{animation:"border"}),children:s.jsx(x,{className:"lg:w-full md:w-1/2 w-full lg:h-[145px] h-[200px] rounded-3xl object-cover",src:e.src,alt:e.alt})},l)),s.jsx("div",{className:"flex flex-row gap-2",children:t.slice(3,5).map((e,l)=>s.jsx(a.Suspense,{fallback:s.jsx(i,{animation:"border"}),children:s.jsx(x,{className:"lg:w-1/2 w-1/2 lg:h-[145px] h-[200px]  rounded-3xl object-cover",src:e.src,alt:e.alt})},l))})]})]})}export{y as default};
