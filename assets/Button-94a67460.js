import{e as o}from"./index-2bb93bb6.js";function u({children:t,onClickHandler:n,isDisabled:r=!1,type:e="button",isDownloadButton:a=!1}){return a?o("a",{className:"button",href:`${window.location.origin}/curriculum-v2/doc/CV.pdf`,target:"_blank",rel:"noreferrer",download:!0,children:"Download CV"}):o("button",{type:e,className:"button",onClick:n,disabled:r,children:t})}export{u as B};
