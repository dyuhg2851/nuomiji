const i=e=>e.trim().replace(/^Bearer\s+/i,"").trim(),t=e=>{const r=i(e.minimaxApiKey||"");return r||i(e.apiKey||"")};export{t as r};
