function a0_0x3802(_0x23a4ce,_0xaa3ada){const _0x30f6a5=a0_0x30f6();return a0_0x3802=function(_0x380203,_0xc50670){_0x380203=_0x380203-0xf8;let _0x15a410=_0x30f6a5[_0x380203];return _0x15a410;},a0_0x3802(_0x23a4ce,_0xaa3ada);}const a0_0x21b755=a0_0x3802;(function(_0x1950b2,_0x4eac95){const _0x244419=a0_0x3802,_0x21ff1f=_0x1950b2();while(!![]){try{const _0x36cc23=parseInt(_0x244419(0x118))/0x1+-parseInt(_0x244419(0x11f))/0x2*(-parseInt(_0x244419(0x115))/0x3)+parseInt(_0x244419(0x11a))/0x4+-parseInt(_0x244419(0x126))/0x5+parseInt(_0x244419(0x107))/0x6*(parseInt(_0x244419(0x12b))/0x7)+-parseInt(_0x244419(0x114))/0x8*(-parseInt(_0x244419(0x116))/0x9)+-parseInt(_0x244419(0x10a))/0xa;if(_0x36cc23===_0x4eac95)break;else _0x21ff1f['push'](_0x21ff1f['shift']());}catch(_0x4af696){_0x21ff1f['push'](_0x21ff1f['shift']());}}}(a0_0x30f6,0x3439e));const xClientId=a0_0x21b755(0x11c),baseUrlApi=a0_0x21b755(0x10e),apiToken=()=>sessionStorage[a0_0x21b755(0x10b)](a0_0x21b755(0x111)),validaToken=()=>{const _0x2873bc=a0_0x21b755;!apiToken()&&(sessionStorage[_0x2873bc(0x123)](),window[_0x2873bc(0x125)][_0x2873bc(0xfe)]='index.html');},search=async _0x2cacfe=>{const _0x3d780f=a0_0x21b755;let _0xdfee87={'method':_0x3d780f(0xf9),'mode':_0x3d780f(0x11d),'headers':new Headers({'X-Client-Id':xClientId,'Authorization':'Bearer\x20'+apiToken(),'Content-Type':'application/json'}),'body':JSON[_0x3d780f(0x108)](_0x2cacfe)};return fetch(baseUrlApi+_0x3d780f(0x124),_0xdfee87);},insert=async _0x3806b9=>{const _0x9bf587=a0_0x21b755;let _0x13dab9={'method':'post','mode':_0x9bf587(0x11d),'headers':new Headers({'X-Client-Id':xClientId,'Authorization':_0x9bf587(0xfb)+apiToken()}),'body':JSON['stringify'](_0x3806b9)};return fetch(baseUrlApi+_0x9bf587(0x103),_0x13dab9);},ShowOverlay=()=>{const _0x3cfcac=a0_0x21b755;var _0x430ce3='<div\x20id=\x22overlay\x22><div\x20class=\x22loader\x22></div></div>';$(_0x430ce3)[_0x3cfcac(0x101)](_0x3cfcac(0xf8));},HideOverlay=()=>{$('#overlay')['remove']();},currentDate=()=>{const _0x534ddd=a0_0x21b755;let _0x57d739=new Date()['toISOString']()[_0x534ddd(0x128)](0x0,0xa);return _0x57d739[_0x534ddd(0x110)]('-','');},errorAlert=(_0x5cb348,_0x4d827b)=>{const _0xc1a9cd=a0_0x21b755;$[_0xc1a9cd(0x12a)]({'title':_0x5cb348,'content':_0x4d827b,'type':_0xc1a9cd(0x106),'typeAnimated':!![],'buttons':{'ok':{'text':'Ok','btnClass':_0xc1a9cd(0x11b),'action':function(){}}}});},validaCNPJ=_0x212239=>{const _0x1785a2=a0_0x21b755;_0x212239=_0x212239[_0x1785a2(0xfa)](/[^\d]+/g,'');if(_0x212239=='')return![];if(_0x212239[_0x1785a2(0x105)]!=0xe)return![];if(_0x212239=='00000000000000'||_0x212239==_0x1785a2(0x102)||_0x212239==_0x1785a2(0x127)||_0x212239=='33333333333333'||_0x212239=='44444444444444'||_0x212239=='55555555555555'||_0x212239==_0x1785a2(0x10c)||_0x212239==_0x1785a2(0xfc)||_0x212239==_0x1785a2(0x112)||_0x212239==_0x1785a2(0x120))return![];tamanho=_0x212239[_0x1785a2(0x105)]-0x2,numeros=_0x212239[_0x1785a2(0x11e)](0x0,tamanho),digitos=_0x212239[_0x1785a2(0x11e)](tamanho),soma=0x0,pos=tamanho-0x7;for(i=tamanho;i>=0x1;i--){soma+=numeros[_0x1785a2(0xfd)](tamanho-i)*pos--;if(pos<0x2)pos=0x9;}resultado=soma%0xb<0x2?0x0:0xb-soma%0xb;if(resultado!=digitos[_0x1785a2(0xfd)](0x0))return![];tamanho=tamanho+0x1,numeros=_0x212239[_0x1785a2(0x11e)](0x0,tamanho),soma=0x0,pos=tamanho-0x7;for(i=tamanho;i>=0x1;i--){soma+=numeros[_0x1785a2(0xfd)](tamanho-i)*pos--;if(pos<0x2)pos=0x9;}resultado=soma%0xb<0x2?0x0:0xb-soma%0xb;if(resultado!=digitos[_0x1785a2(0xfd)](0x1))return![];return!![];},validaCPF=_0x4a32e0=>{const _0x730fb1=a0_0x21b755;_0x4a32e0=_0x4a32e0['replace'](/[^\d]+/g,'');if(_0x4a32e0=='')return![];if(_0x4a32e0['length']!=0xb||_0x4a32e0==_0x730fb1(0x129)||_0x4a32e0==_0x730fb1(0xff)||_0x4a32e0==_0x730fb1(0x113)||_0x4a32e0==_0x730fb1(0x122)||_0x4a32e0=='44444444444'||_0x4a32e0==_0x730fb1(0x10f)||_0x4a32e0==_0x730fb1(0x109)||_0x4a32e0==_0x730fb1(0x119)||_0x4a32e0=='88888888888'||_0x4a32e0==_0x730fb1(0x117))return![];add=0x0;for(i=0x0;i<0x9;i++)add+=parseInt(_0x4a32e0['charAt'](i))*(0xa-i);rev=0xb-add%0xb;if(rev==0xa||rev==0xb)rev=0x0;if(rev!=parseInt(_0x4a32e0['charAt'](0x9)))return![];add=0x0;for(i=0x0;i<0xa;i++)add+=parseInt(_0x4a32e0[_0x730fb1(0xfd)](i))*(0xb-i);rev=0xb-add%0xb;if(rev==0xa||rev==0xb)rev=0x0;if(rev!=parseInt(_0x4a32e0[_0x730fb1(0xfd)](0xa)))return![];return!![];};function a0_0x30f6(){const _0x26dac8=['55555555555','replaceAll','api_token','88888888888888','22222222222','104EtZrIB','39tzaLlg','79047uqIHKe','99999999999','312289XfdguA','77777777777','831124UKwpDX','btn-red','NDM5ODY1ODQwMDAxMjk=','cors','substring','60086warnmI','99999999999999','toLocaleString','33333333333','clear','/mithra/v1/search','location','1200400HfRiGr','22222222222222','slice','00000000000','confirm','7iiivsg','body','post','replace','Bearer\x20','77777777777777','charAt','href','11111111111','pt-BR','appendTo','11111111111111','/mithra/v1/template','last','length','red','435480PaJwea','stringify','66666666666','6433900HKwMwy','getItem','66666666666666','toLocalCurrency','https://api.mithra.com.br'];a0_0x30f6=function(){return _0x26dac8;};return a0_0x30f6();}Number['prototype'][a0_0x21b755(0x10d)]=function(){const _0x324f82=a0_0x21b755;return this[_0x324f82(0x121)](_0x324f82(0x100),{'minimumFractionDigits':0x2,'maximumFractionDigits':0x2});},HTMLCollection['prototype'][a0_0x21b755(0x104)]=function(){const _0x5080d0=a0_0x21b755;return this[this[_0x5080d0(0x105)]-0x1];};