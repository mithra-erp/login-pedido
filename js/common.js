function a0_0x4cf0(_0x423f92,_0x2e5443){const _0x197173=a0_0x1971();return a0_0x4cf0=function(_0x4cf044,_0xba93b9){_0x4cf044=_0x4cf044-0x64;let _0x2e2d62=_0x197173[_0x4cf044];return _0x2e2d62;},a0_0x4cf0(_0x423f92,_0x2e5443);}const a0_0x516c0b=a0_0x4cf0;(function(_0x42dcfc,_0x1826b0){const _0x28844c=a0_0x4cf0,_0x442c8a=_0x42dcfc();while(!![]){try{const _0x215632=-parseInt(_0x28844c(0x7f))/0x1*(-parseInt(_0x28844c(0x85))/0x2)+parseInt(_0x28844c(0x81))/0x3*(parseInt(_0x28844c(0x9c))/0x4)+parseInt(_0x28844c(0x70))/0x5*(-parseInt(_0x28844c(0x95))/0x6)+parseInt(_0x28844c(0x74))/0x7*(-parseInt(_0x28844c(0x80))/0x8)+-parseInt(_0x28844c(0x8b))/0x9*(-parseInt(_0x28844c(0x72))/0xa)+parseInt(_0x28844c(0x8f))/0xb*(-parseInt(_0x28844c(0x77))/0xc)+parseInt(_0x28844c(0x96))/0xd*(-parseInt(_0x28844c(0x6c))/0xe);if(_0x215632===_0x1826b0)break;else _0x442c8a['push'](_0x442c8a['shift']());}catch(_0x533cc0){_0x442c8a['push'](_0x442c8a['shift']());}}}(a0_0x1971,0xc7187));function a0_0x1971(){const _0x493e5a=['66666666666','33333333333333','toLocaleString','11111111111','625446sHFcId','13aFIKim','55555555555555','NDM5ODY1ODQwMDAxMjk=','pt-BR','33333333333','application/json','4wvMRkR','88888888888','88888888888888','77777777777777','99999999999999','substring','replaceAll','post','last','6590486UNgGwk','Bearer\x20','stringify','22222222222','40jqaaaA','confirm','13670IdDvQr','charAt','21poRSkG','prototype','slice','2134812hNWfSO','length','btn-red','toISOString','location','replace','body','cors','1177597XqsruG','919144RjPxZK','3579366QlIEQC','https://api.mithra.com.br','api_token','/mithra/v1/search','2TnMmcw','00000000000','red','toLocalCurrency','44444444444','00000000000000','1791pcnkLb','index.html','href','clear','11qCKLIE','/mithra/v1/template'];a0_0x1971=function(){return _0x493e5a;};return a0_0x1971();}const xClientId=a0_0x516c0b(0x98),baseUrlApi=a0_0x516c0b(0x82),apiToken=()=>sessionStorage['getItem'](a0_0x516c0b(0x83)),validaToken=()=>{const _0x44fc05=a0_0x516c0b;!apiToken()&&(sessionStorage[_0x44fc05(0x8e)](),window[_0x44fc05(0x7b)][_0x44fc05(0x8d)]=_0x44fc05(0x8c));},search=async _0x2f0315=>{const _0x5d67c1=a0_0x516c0b;let _0x4f0202={'method':'post','mode':_0x5d67c1(0x7e),'headers':new Headers({'X-Client-Id':xClientId,'Authorization':_0x5d67c1(0x6d)+apiToken(),'Content-Type':_0x5d67c1(0x9b)}),'body':JSON['stringify'](_0x2f0315)};return fetch(baseUrlApi+_0x5d67c1(0x84),_0x4f0202);},insert=async _0x225001=>{const _0x46d629=a0_0x516c0b;let _0x8fd5bb={'method':_0x46d629(0x6a),'mode':'cors','headers':new Headers({'X-Client-Id':xClientId,'Authorization':_0x46d629(0x6d)+apiToken()}),'body':JSON[_0x46d629(0x6e)](_0x225001)};return fetch(baseUrlApi+_0x46d629(0x90),_0x8fd5bb);},ShowOverlay=()=>{const _0xe11cf4=a0_0x516c0b;var _0x5d5170='<div\x20id=\x22overlay\x22><div\x20class=\x22loader\x22></div></div>';$(_0x5d5170)['appendTo'](_0xe11cf4(0x7d));},HideOverlay=()=>{$('#overlay')['remove']();},currentDate=()=>{const _0x45f323=a0_0x516c0b;let _0x479c83=new Date()[_0x45f323(0x7a)]()[_0x45f323(0x76)](0x0,0xa);return _0x479c83[_0x45f323(0x69)]('-','');},errorAlert=(_0x42fab9,_0x2a61ef)=>{const _0x176ce8=a0_0x516c0b;$[_0x176ce8(0x71)]({'title':_0x42fab9,'content':_0x2a61ef,'type':_0x176ce8(0x87),'typeAnimated':!![],'buttons':{'ok':{'text':'Ok','btnClass':_0x176ce8(0x79),'action':function(){}}}});},validaCNPJ=_0x15c700=>{const _0x30b7e9=a0_0x516c0b;_0x15c700=_0x15c700[_0x30b7e9(0x7c)](/[^\d]+/g,'');if(_0x15c700=='')return![];if(_0x15c700[_0x30b7e9(0x78)]!=0xe)return![];if(_0x15c700==_0x30b7e9(0x8a)||_0x15c700=='11111111111111'||_0x15c700=='22222222222222'||_0x15c700==_0x30b7e9(0x92)||_0x15c700=='44444444444444'||_0x15c700==_0x30b7e9(0x97)||_0x15c700=='66666666666666'||_0x15c700==_0x30b7e9(0x66)||_0x15c700==_0x30b7e9(0x65)||_0x15c700==_0x30b7e9(0x67))return![];tamanho=_0x15c700['length']-0x2,numeros=_0x15c700[_0x30b7e9(0x68)](0x0,tamanho),digitos=_0x15c700[_0x30b7e9(0x68)](tamanho),soma=0x0,pos=tamanho-0x7;for(i=tamanho;i>=0x1;i--){soma+=numeros['charAt'](tamanho-i)*pos--;if(pos<0x2)pos=0x9;}resultado=soma%0xb<0x2?0x0:0xb-soma%0xb;if(resultado!=digitos[_0x30b7e9(0x73)](0x0))return![];tamanho=tamanho+0x1,numeros=_0x15c700['substring'](0x0,tamanho),soma=0x0,pos=tamanho-0x7;for(i=tamanho;i>=0x1;i--){soma+=numeros[_0x30b7e9(0x73)](tamanho-i)*pos--;if(pos<0x2)pos=0x9;}resultado=soma%0xb<0x2?0x0:0xb-soma%0xb;if(resultado!=digitos['charAt'](0x1))return![];return!![];},validaCPF=_0x31013c=>{const _0x24d6ee=a0_0x516c0b;_0x31013c=_0x31013c[_0x24d6ee(0x7c)](/[^\d]+/g,'');if(_0x31013c=='')return![];if(_0x31013c[_0x24d6ee(0x78)]!=0xb||_0x31013c==_0x24d6ee(0x86)||_0x31013c==_0x24d6ee(0x94)||_0x31013c==_0x24d6ee(0x6f)||_0x31013c==_0x24d6ee(0x9a)||_0x31013c==_0x24d6ee(0x89)||_0x31013c=='55555555555'||_0x31013c==_0x24d6ee(0x91)||_0x31013c=='77777777777'||_0x31013c==_0x24d6ee(0x64)||_0x31013c=='99999999999')return![];add=0x0;for(i=0x0;i<0x9;i++)add+=parseInt(_0x31013c[_0x24d6ee(0x73)](i))*(0xa-i);rev=0xb-add%0xb;if(rev==0xa||rev==0xb)rev=0x0;if(rev!=parseInt(_0x31013c[_0x24d6ee(0x73)](0x9)))return![];add=0x0;for(i=0x0;i<0xa;i++)add+=parseInt(_0x31013c[_0x24d6ee(0x73)](i))*(0xb-i);rev=0xb-add%0xb;if(rev==0xa||rev==0xb)rev=0x0;if(rev!=parseInt(_0x31013c[_0x24d6ee(0x73)](0xa)))return![];return!![];};Number['prototype'][a0_0x516c0b(0x88)]=function(){const _0x397987=a0_0x516c0b;return this[_0x397987(0x93)](_0x397987(0x99),{'minimumFractionDigits':0x2,'maximumFractionDigits':0x2});},HTMLCollection[a0_0x516c0b(0x75)][a0_0x516c0b(0x6b)]=function(){const _0x295414=a0_0x516c0b;return this[this[_0x295414(0x78)]-0x1];};