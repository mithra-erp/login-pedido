const a0_0x1efce8=a0_0x4884;(function(_0x286be7,_0x5af190){const _0x11e67f=a0_0x4884,_0x35e332=_0x286be7();while(!![]){try{const _0x145d6e=-parseInt(_0x11e67f(0x1ac))/0x1+parseInt(_0x11e67f(0x1bb))/0x2*(-parseInt(_0x11e67f(0x1b3))/0x3)+parseInt(_0x11e67f(0x1c0))/0x4*(parseInt(_0x11e67f(0x1b6))/0x5)+parseInt(_0x11e67f(0x1b0))/0x6+parseInt(_0x11e67f(0x1b2))/0x7+-parseInt(_0x11e67f(0x1a6))/0x8+-parseInt(_0x11e67f(0x199))/0x9*(-parseInt(_0x11e67f(0x19c))/0xa);if(_0x145d6e===_0x5af190)break;else _0x35e332['push'](_0x35e332['shift']());}catch(_0x52dc18){_0x35e332['push'](_0x35e332['shift']());}}}(a0_0x24e9,0x3a858));function a0_0x4884(_0x509b6d,_0x134d53){const _0x24e9d5=a0_0x24e9();return a0_0x4884=function(_0x488451,_0x248f38){_0x488451=_0x488451-0x18e;let _0x52993b=_0x24e9d5[_0x488451];return _0x52993b;},a0_0x4884(_0x509b6d,_0x134d53);}const xClientId=a0_0x1efce8(0x1c3),baseUrlApi=a0_0x1efce8(0x1be),apiToken=()=>sessionStorage['getItem'](a0_0x1efce8(0x1a0)),validaToken=()=>{const _0x3e2f1b=a0_0x1efce8;!apiToken()&&(sessionStorage[_0x3e2f1b(0x1c6)](),window[_0x3e2f1b(0x1a5)][_0x3e2f1b(0x1b1)]=_0x3e2f1b(0x1a4));},search=async _0x47da03=>{const _0x1d769a=a0_0x1efce8;let _0x11a500={'method':'post','mode':_0x1d769a(0x1c1),'headers':new Headers({'X-Client-Id':xClientId,'Authorization':_0x1d769a(0x18f)+apiToken(),'Content-Type':_0x1d769a(0x1ab)}),'body':JSON[_0x1d769a(0x1a2)](_0x47da03)};return fetch(baseUrlApi+_0x1d769a(0x1a3),_0x11a500);},insert=async _0x3d5a1f=>{const _0x1cc63c=a0_0x1efce8;let _0x40d457={'method':_0x1cc63c(0x1ad),'mode':_0x1cc63c(0x1c1),'headers':new Headers({'X-Client-Id':xClientId,'Authorization':_0x1cc63c(0x18f)+apiToken()}),'body':JSON['stringify'](_0x3d5a1f)};return fetch(baseUrlApi+_0x1cc63c(0x18e),_0x40d457);},ShowOverlay=()=>{const _0x5d4663=a0_0x1efce8;var _0x496249='<div\x20id=\x22overlay\x22><div\x20class=\x22loader\x22></div></div>';$(_0x496249)[_0x5d4663(0x1bf)]('body');},HideOverlay=()=>{const _0x4a5266=a0_0x1efce8;$(_0x4a5266(0x192))['remove']();},currentDate=()=>{const _0x4a3937=a0_0x1efce8;let _0x48be05=new Date()[_0x4a3937(0x1c4)]()[_0x4a3937(0x194)](0x0,0xa);return _0x48be05[_0x4a3937(0x198)]('-','');},errorAlert=(_0x3c62e1,_0x1f09aa)=>{const _0x331f19=a0_0x1efce8;$[_0x331f19(0x1a9)]({'title':_0x3c62e1,'content':_0x1f09aa,'type':_0x331f19(0x1a8),'typeAnimated':!![],'buttons':{'ok':{'text':'Ok','btnClass':_0x331f19(0x1b7),'action':function(){}}}});},validaCNPJ=_0x64b3b9=>{const _0x4541c8=a0_0x1efce8;_0x64b3b9=_0x64b3b9[_0x4541c8(0x1ba)](/[^\d]+/g,'');if(_0x64b3b9=='')return![];if(_0x64b3b9['length']!=0xe)return![];if(_0x64b3b9==_0x4541c8(0x1bd)||_0x64b3b9==_0x4541c8(0x1aa)||_0x64b3b9==_0x4541c8(0x1b4)||_0x64b3b9==_0x4541c8(0x1bc)||_0x64b3b9==_0x4541c8(0x1af)||_0x64b3b9==_0x4541c8(0x1c2)||_0x64b3b9=='66666666666666'||_0x64b3b9==_0x4541c8(0x19a)||_0x64b3b9==_0x4541c8(0x19b)||_0x64b3b9==_0x4541c8(0x191))return![];tamanho=_0x64b3b9[_0x4541c8(0x195)]-0x2,numeros=_0x64b3b9[_0x4541c8(0x19d)](0x0,tamanho),digitos=_0x64b3b9[_0x4541c8(0x19d)](tamanho),soma=0x0,pos=tamanho-0x7;for(i=tamanho;i>=0x1;i--){soma+=numeros[_0x4541c8(0x193)](tamanho-i)*pos--;if(pos<0x2)pos=0x9;}resultado=soma%0xb<0x2?0x0:0xb-soma%0xb;if(resultado!=digitos[_0x4541c8(0x193)](0x0))return![];tamanho=tamanho+0x1,numeros=_0x64b3b9['substring'](0x0,tamanho),soma=0x0,pos=tamanho-0x7;for(i=tamanho;i>=0x1;i--){soma+=numeros[_0x4541c8(0x193)](tamanho-i)*pos--;if(pos<0x2)pos=0x9;}resultado=soma%0xb<0x2?0x0:0xb-soma%0xb;if(resultado!=digitos[_0x4541c8(0x193)](0x1))return![];return!![];},validaCPF=_0xacbe9c=>{const _0x27f3db=a0_0x1efce8;var _0x136725=0x0,_0x5d4d62,_0x204d7a=String(_0xacbe9c)[_0x27f3db(0x1ba)](/[^d]/g,'');if(_0x204d7a['length']!==0xb)return![];if([_0x27f3db(0x196),_0x27f3db(0x19e),_0x27f3db(0x1b8),'33333333333','44444444444',_0x27f3db(0x197),_0x27f3db(0x1ae),_0x27f3db(0x1b5),'88888888888',_0x27f3db(0x1c5)][_0x27f3db(0x19f)](_0x204d7a)!==-0x1)return![];for(i=0x1;i<=0x9;i++)_0x136725=_0x136725+parseInt(_0x204d7a['substring'](i-0x1,i))*(0xb-i);_0x5d4d62=_0x136725*0xa%0xb;if(_0x5d4d62==0xa||_0x5d4d62==0xb)_0x5d4d62=0x0;if(_0x5d4d62!=parseInt(_0x204d7a[_0x27f3db(0x19d)](0x9,0xa)))return![];_0x136725=0x0;for(i=0x1;i<=0xa;i++)_0x136725=_0x136725+parseInt(_0x204d7a[_0x27f3db(0x19d)](i-0x1,i))*(0xc-i);_0x5d4d62=_0x136725*0xa%0xb;if(_0x5d4d62==0xa||_0x5d4d62==0xb)_0x5d4d62=0x0;if(_0x5d4d62!=parseInt(_0x204d7a['substring'](0xa,0xb)))return![];return!![];};Number[a0_0x1efce8(0x1a7)][a0_0x1efce8(0x1b9)]=function(){const _0x3ff7a8=a0_0x1efce8;return this[_0x3ff7a8(0x190)](_0x3ff7a8(0x1a1),{'minimumFractionDigits':0x2,'maximumFractionDigits':0x2});},HTMLCollection[a0_0x1efce8(0x1a7)]['last']=function(){const _0x2309eb=a0_0x1efce8;return this[this[_0x2309eb(0x195)]-0x1];};function a0_0x24e9(){const _0x2c8164=['btn-red','22222222222','toLocalCurrency','replace','22Aoyvxo','33333333333333','00000000000000','https://api.mithra.com.br','appendTo','380ONppDW','cors','55555555555555','NDM5ODY1ODQwMDAxMjk=','toISOString','99999999999','clear','/mithra/v1/template','Bearer\x20','toLocaleString','99999999999999','#overlay','charAt','slice','length','00000000000','55555555555','replaceAll','45OCckda','77777777777777','88888888888888','1537230wfaBfp','substring','11111111111','indexOf','api_token','pt-BR','stringify','/mithra/v1/search','index.html','location','3690760pqPiuk','prototype','red','confirm','11111111111111','application/json','418000rfztMV','post','66666666666','44444444444444','33162iFAvTX','href','3310650wXVBXz','94719adtWJS','22222222222222','77777777777','11540EzCfQr'];a0_0x24e9=function(){return _0x2c8164;};return a0_0x24e9();}