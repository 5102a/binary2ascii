const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u=a=>{const e=new Uint8Array(a),i=e.length,o=[],r=i%3,d=i-r;let n=-1;for(;++n<d;){const t=e[n],c=e[++n],b=e[++n];o.push(s[t>>>2],s[(t&3)<<4|c>>>4],s[(c&15)<<2|b>>>6],s[b&63])}if(r===1){const t=e[n];o.push(s[t>>>2],s[(t&3)<<4],"=","=")}else if(r===2){const t=e[n],c=e[++n];o.push(s[t>>>2],s[(t&3)<<4|c>>>4],s[(c&15)<<2],"=")}return o.join("")};export{u as binary2ascii};
//# sourceMappingURL=index.mjs.map
