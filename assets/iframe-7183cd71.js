import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&m(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const p="modulepreload",d=function(i,s){return new URL(i,s).href},c={},t=function(s,n,m){if(!n||n.length===0)return s();const e=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=d(r,m),r in c)return;c[r]=!0;const o=r.endsWith(".css"),O=o?'[rel="stylesheet"]':"";if(!!m)for(let a=e.length-1;a>=0;a--){const u=e[a];if(u.href===r&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${O}`))return;const _=document.createElement("link");if(_.rel=o?"stylesheet":p,o||(_.as="script",_.crossOrigin=""),_.href=r,document.head.appendChild(_),o)return new Promise((a,u)=>{_.addEventListener("load",a),_.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>s())},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,l=R({page:"preview"});P.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const T={"./stories/all.stories.tsx":async()=>t(()=>import("./all.stories-67d58f93.js"),["./all.stories-67d58f93.js","./index-9af3809b.js","./index-ebeaab24.js","./Alert-19c1f4e5.js","./Write1-4d3cd2cb.js","./Modal-f54910e3.js","./index-f50b85d6.js","./index-9c09ad76.js","./Button-c53c5656.js","./index-b00b62c0.js","./Frame-b3eb3b92.js","./ModalContext-2b18b259.js","./avatar.stories-e836e863.js","./button.stories-04391718.js","./checkbox.stories-0b815200.js","./Checkbox-d5d444c7.js","./dropdown.stories-c180272b.js","./Dropdown-75460a15.js","./fieldset.stories-7336c49b.js","./Fieldset-aaed928f.js","./input.stories-d3232daf.js","./Input-31bbebc5.js","./index.esm-061bac8e.js","./list.stories-d6f7a95d.js","./List-e9516603.js","./ListDivider-1ac362e6.js","./progressbar.stories-5df58f8a.js","./radiobutton.stories-eb2ce1c2.js","./range.stories-e1735e62.js","./Range-fd9abf26.js","./tabs.stories-f220ae0e.js","./textarea.stories-d71c65f1.js","./titlebar.stories-c07518e1.js","./tooltip.stories-375daefc.js","./Tooltip-53081f26.js","./tree.stories-1f608192.js","./video.stories-977f01a4.js"],import.meta.url),"./stories/alert.stories.tsx":async()=>t(()=>import("./alert.stories-c9f1f792.js"),["./alert.stories-c9f1f792.js","./index-9af3809b.js","./index-ebeaab24.js","./Alert-19c1f4e5.js","./Write1-4d3cd2cb.js","./Modal-f54910e3.js","./index-f50b85d6.js","./index-9c09ad76.js","./Button-c53c5656.js","./index-b00b62c0.js","./Frame-b3eb3b92.js","./ModalContext-2b18b259.js","./Checkbox-d5d444c7.js","./Dropdown-75460a15.js"],import.meta.url),"./stories/avatar.stories.tsx":async()=>t(()=>import("./avatar.stories-e836e863.js"),["./avatar.stories-e836e863.js","./index-9af3809b.js","./index-ebeaab24.js","./Frame-b3eb3b92.js"],import.meta.url),"./stories/button.stories.tsx":async()=>t(()=>import("./button.stories-04391718.js"),["./button.stories-04391718.js","./index-9af3809b.js","./index-ebeaab24.js","./Button-c53c5656.js"],import.meta.url),"./stories/checkbox.stories.tsx":async()=>t(()=>import("./checkbox.stories-0b815200.js"),["./checkbox.stories-0b815200.js","./index-9af3809b.js","./index-ebeaab24.js","./Checkbox-d5d444c7.js"],import.meta.url),"./stories/cursor.stories.tsx":async()=>t(()=>import("./cursor.stories-7e94bd3b.js"),["./cursor.stories-7e94bd3b.js","./index-9af3809b.js","./index-ebeaab24.js","./Frame-b3eb3b92.js","./Cursor-8657a891.js"],import.meta.url),"./stories/dropdown.stories.tsx":async()=>t(()=>import("./dropdown.stories-c180272b.js"),["./dropdown.stories-c180272b.js","./index-9af3809b.js","./index-ebeaab24.js","./Dropdown-75460a15.js"],import.meta.url),"./stories/fieldset.stories.tsx":async()=>t(()=>import("./fieldset.stories-7336c49b.js"),["./fieldset.stories-7336c49b.js","./index-9af3809b.js","./index-ebeaab24.js","./Checkbox-d5d444c7.js","./Fieldset-aaed928f.js"],import.meta.url),"./stories/frame.stories.tsx":async()=>t(()=>import("./frame.stories-763f76f9.js"),["./frame.stories-763f76f9.js","./index-9af3809b.js","./index-ebeaab24.js","./Frame-b3eb3b92.js"],import.meta.url),"./stories/icons.stories.tsx":async()=>t(()=>import("./icons.stories-8bba0aa4.js"),["./icons.stories-8bba0aa4.js","./index-9af3809b.js","./index-ebeaab24.js","./index-f50b85d6.js","./Frame-b3eb3b92.js","./Write1-4d3cd2cb.js"],import.meta.url),"./stories/input.stories.tsx":async()=>t(()=>import("./input.stories-d3232daf.js"),["./input.stories-d3232daf.js","./index-9af3809b.js","./index-ebeaab24.js","./Input-31bbebc5.js","./index.esm-061bac8e.js"],import.meta.url),"./stories/list.stories.tsx":async()=>t(()=>import("./list.stories-d6f7a95d.js"),["./list.stories-d6f7a95d.js","./index-9af3809b.js","./index-ebeaab24.js","./Write1-4d3cd2cb.js","./List-e9516603.js","./ListDivider-1ac362e6.js"],import.meta.url),"./stories/modal.stories.tsx":async()=>t(()=>import("./modal.stories-eb28cd73.js"),["./modal.stories-eb28cd73.js","./index-9af3809b.js","./index-ebeaab24.js","./Button-c53c5656.js","./Frame-b3eb3b92.js","./List-e9516603.js","./ListDivider-1ac362e6.js","./Modal-f54910e3.js","./index-f50b85d6.js","./index-9c09ad76.js","./index-b00b62c0.js","./ModalContext-2b18b259.js","./Write1-4d3cd2cb.js"],import.meta.url),"./stories/progressbar.stories.tsx":async()=>t(()=>import("./progressbar.stories-5df58f8a.js"),["./progressbar.stories-5df58f8a.js","./index-9af3809b.js","./index-ebeaab24.js"],import.meta.url),"./stories/radiobutton.stories.tsx":async()=>t(()=>import("./radiobutton.stories-eb2ce1c2.js"),["./radiobutton.stories-eb2ce1c2.js","./index-9af3809b.js","./index-ebeaab24.js"],import.meta.url),"./stories/range.stories.tsx":async()=>t(()=>import("./range.stories-e1735e62.js"),["./range.stories-e1735e62.js","./index-9af3809b.js","./index-ebeaab24.js","./Range-fd9abf26.js"],import.meta.url),"./stories/tabs.stories.tsx":async()=>t(()=>import("./tabs.stories-f220ae0e.js"),["./tabs.stories-f220ae0e.js","./index-9af3809b.js","./index-ebeaab24.js","./Checkbox-d5d444c7.js","./Dropdown-75460a15.js","./Fieldset-aaed928f.js","./Input-31bbebc5.js","./index.esm-061bac8e.js","./Frame-b3eb3b92.js"],import.meta.url),"./stories/taskbar.stories.tsx":async()=>t(()=>import("./taskbar.stories-6df06360.js"),["./taskbar.stories-6df06360.js","./index-9af3809b.js","./index-ebeaab24.js","./Write1-4d3cd2cb.js","./List-e9516603.js","./ListDivider-1ac362e6.js","./Modal-f54910e3.js","./index-f50b85d6.js","./index-9c09ad76.js","./Button-c53c5656.js","./index-b00b62c0.js","./Frame-b3eb3b92.js","./ModalContext-2b18b259.js","./Tooltip-53081f26.js"],import.meta.url),"./stories/textarea.stories.tsx":async()=>t(()=>import("./textarea.stories-d71c65f1.js"),["./textarea.stories-d71c65f1.js","./index-9af3809b.js","./index-ebeaab24.js","./index.esm-061bac8e.js"],import.meta.url),"./stories/titlebar.stories.tsx":async()=>t(()=>import("./titlebar.stories-c07518e1.js"),["./titlebar.stories-c07518e1.js","./index-9af3809b.js","./index-ebeaab24.js","./Write1-4d3cd2cb.js","./index-b00b62c0.js","./Button-c53c5656.js","./Frame-b3eb3b92.js"],import.meta.url),"./stories/tooltip.stories.tsx":async()=>t(()=>import("./tooltip.stories-375daefc.js"),["./tooltip.stories-375daefc.js","./index-9af3809b.js","./index-ebeaab24.js","./Tooltip-53081f26.js","./Frame-b3eb3b92.js"],import.meta.url),"./stories/tree.stories.tsx":async()=>t(()=>import("./tree.stories-1f608192.js"),["./tree.stories-1f608192.js","./index-9af3809b.js","./index-ebeaab24.js","./Write1-4d3cd2cb.js"],import.meta.url),"./stories/video.stories.tsx":async()=>t(()=>import("./video.stories-977f01a4.js"),["./video.stories-977f01a4.js","./index-9af3809b.js","./index-ebeaab24.js","./Write1-4d3cd2cb.js","./Frame-b3eb3b92.js","./Button-c53c5656.js","./Range-fd9abf26.js","./index-b00b62c0.js","./ListDivider-1ac362e6.js"],import.meta.url)};async function E(i){return T[i]()}E.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:L,PreviewWeb:f,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,y=async()=>{const i=await Promise.all([t(()=>import("./config-9b9704de.js"),["./config-9b9704de.js","./index-ebeaab24.js","./_getPrototype-18404d63.js","./index-9c09ad76.js","./index-f50b85d6.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-852a3245.js"),[],import.meta.url),t(()=>import("./preview-15309724.js"),["./preview-15309724.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-2059b184.js"),[],import.meta.url),t(()=>import("./preview-b8d6c68d.js"),["./preview-b8d6c68d.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-b3c37142.js"),[],import.meta.url),t(()=>import("./preview-2fc269b0.js"),["./preview-2fc269b0.js","./index-9af3809b.js","./index-ebeaab24.js","./Cursor-8657a891.js","./ModalContext-2b18b259.js"],import.meta.url)]);return L(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new f;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:E,getProjectAnnotations:y});export{t as _};
//# sourceMappingURL=iframe-7183cd71.js.map
