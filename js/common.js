const a0_0x24a097=a0_0x4cd0;function a0_0x4cd0(_0x45e4ce,_0x4bfae2){const _0x5678f7=a0_0x5678();return a0_0x4cd0=function(_0x4cd0ee,_0x2bfa89){_0x4cd0ee=_0x4cd0ee-0xa3;let _0x36832c=_0x5678f7[_0x4cd0ee];return _0x36832c;},a0_0x4cd0(_0x45e4ce,_0x4bfae2);}function a0_0x5678(){const _0x5259bb=['126JMdVKP','replace','88888888888888','99999999999999','post','500965omoajJ','slice','charAt','last','body','clear','<div\x20id=\x22overlay\x22><div\x20class=\x22loader\x22></div></div>','45OJDEVj','4414185BczmwV','77777777777777','33333333333','remove','length','58108780jAFXXm','/mithra/v1/template','891400NcwJsQ','11111111111','btn-red','9kgEJhP','873958tKpFuP','prototype','location','cors','pt-BR','5437772kTjRoQ','/mithra/v1/search','77777777777','#overlay','confirm','00000000000','index.html','toISOString','44444444444','22222222222','22222222222222','NDM5ODY1ODQwMDAxMjk=','toLocalCurrency','red','https://api.mithra.com.br','api_token','getItem','497413HGIumY','44444444444444','substring','66666666666666','11111111111111','href','replaceAll'];a0_0x5678=function(){return _0x5259bb;};return a0_0x5678();}(function(_0x230813,_0x30521f){const _0x375e0d=a0_0x4cd0,_0x3b6f7c=_0x230813();while(!![]){try{const _0x500965=-parseInt(_0x375e0d(0xa9))/0x1+parseInt(_0x375e0d(0xbc))/0x2*(-parseInt(_0x375e0d(0xbb))/0x3)+-parseInt(_0x375e0d(0xc1))/0x4+-parseInt(_0x375e0d(0xb1))/0x5+-parseInt(_0x375e0d(0xa4))/0x6*(parseInt(_0x375e0d(0xd2))/0x7)+parseInt(_0x375e0d(0xb8))/0x8*(parseInt(_0x375e0d(0xb0))/0x9)+parseInt(_0x375e0d(0xb6))/0xa;if(_0x500965===_0x30521f)break;else _0x3b6f7c['push'](_0x3b6f7c['shift']());}catch(_0x4559ea){_0x3b6f7c['push'](_0x3b6f7c['shift']());}}}(a0_0x5678,0xc894e));const xClientId=a0_0x24a097(0xcc),baseUrlApi=a0_0x24a097(0xcf),apiToken=()=>sessionStorage[a0_0x24a097(0xd1)](a0_0x24a097(0xd0)),validaToken=()=>{const _0x45d9db=a0_0x24a097;!apiToken()&&(sessionStorage[_0x45d9db(0xae)](),window[_0x45d9db(0xbe)][_0x45d9db(0xd7)]=_0x45d9db(0xc7));},search=async _0x235fc6=>{const _0x21a361=a0_0x24a097;let _0x1db0b4={'method':_0x21a361(0xa8),'mode':_0x21a361(0xbf),'headers':new Headers({'X-Client-Id':xClientId,'Authorization':'Bearer\x20'+apiToken(),'Content-Type':'application/json'}),'body':JSON['stringify'](_0x235fc6)};return fetch(baseUrlApi+_0x21a361(0xc2),_0x1db0b4);},insert=async _0x20fb27=>{const _0x593017=a0_0x24a097;let _0x1c56f0={'method':_0x593017(0xa8),'mode':_0x593017(0xbf),'headers':new Headers({'X-Client-Id':xClientId,'Authorization':'Bearer\x20'+apiToken()}),'body':JSON['stringify'](_0x20fb27)};return fetch(baseUrlApi+_0x593017(0xb7),_0x1c56f0);},ShowOverlay=()=>{const _0x45e83f=a0_0x24a097;var _0xe16ae6=_0x45e83f(0xaf);$(_0xe16ae6)['appendTo'](_0x45e83f(0xad));},HideOverlay=()=>{const _0x2da094=a0_0x24a097;$(_0x2da094(0xc4))[_0x2da094(0xb4)]();},currentDate=()=>{const _0x1a83cf=a0_0x24a097;let _0x22e5f0=new Date()[_0x1a83cf(0xc8)]()[_0x1a83cf(0xaa)](0x0,0xa);return _0x22e5f0[_0x1a83cf(0xa3)]('-','');},errorAlert=(_0x5d80a4,_0x3c61d6)=>{const _0x3affb3=a0_0x24a097;$[_0x3affb3(0xc5)]({'title':_0x5d80a4,'content':_0x3c61d6,'type':_0x3affb3(0xce),'typeAnimated':!![],'buttons':{'ok':{'text':'Ok','btnClass':_0x3affb3(0xba),'action':function(){}}}});},validaCNPJ=_0x32f587=>{const _0x1eebfa=a0_0x24a097;_0x32f587=_0x32f587[_0x1eebfa(0xa5)](/[^\d]+/g,'');if(_0x32f587=='')return![];if(_0x32f587['length']!=0xe)return![];if(_0x32f587=='00000000000000'||_0x32f587==_0x1eebfa(0xd6)||_0x32f587==_0x1eebfa(0xcb)||_0x32f587=='33333333333333'||_0x32f587==_0x1eebfa(0xd3)||_0x32f587=='55555555555555'||_0x32f587==_0x1eebfa(0xd5)||_0x32f587==_0x1eebfa(0xb2)||_0x32f587==_0x1eebfa(0xa6)||_0x32f587==_0x1eebfa(0xa7))return![];tamanho=_0x32f587[_0x1eebfa(0xb5)]-0x2,numeros=_0x32f587[_0x1eebfa(0xd4)](0x0,tamanho),digitos=_0x32f587[_0x1eebfa(0xd4)](tamanho),soma=0x0,pos=tamanho-0x7;for(i=tamanho;i>=0x1;i--){soma+=numeros[_0x1eebfa(0xab)](tamanho-i)*pos--;if(pos<0x2)pos=0x9;}resultado=soma%0xb<0x2?0x0:0xb-soma%0xb;if(resultado!=digitos[_0x1eebfa(0xab)](0x0))return![];tamanho=tamanho+0x1,numeros=_0x32f587[_0x1eebfa(0xd4)](0x0,tamanho),soma=0x0,pos=tamanho-0x7;for(i=tamanho;i>=0x1;i--){soma+=numeros[_0x1eebfa(0xab)](tamanho-i)*pos--;if(pos<0x2)pos=0x9;}resultado=soma%0xb<0x2?0x0:0xb-soma%0xb;if(resultado!=digitos[_0x1eebfa(0xab)](0x1))return![];return!![];},validaCPF=_0x31fa5a=>{const _0x61e0a=a0_0x24a097;_0x31fa5a=_0x31fa5a[_0x61e0a(0xa5)](/[^\d]+/g,'');if(_0x31fa5a=='')return![];if(_0x31fa5a[_0x61e0a(0xb5)]!=0xb||_0x31fa5a==_0x61e0a(0xc6)||_0x31fa5a==_0x61e0a(0xb9)||_0x31fa5a==_0x61e0a(0xca)||_0x31fa5a==_0x61e0a(0xb3)||_0x31fa5a==_0x61e0a(0xc9)||_0x31fa5a=='55555555555'||_0x31fa5a=='66666666666'||_0x31fa5a==_0x61e0a(0xc3)||_0x31fa5a=='88888888888'||_0x31fa5a=='99999999999')return![];add=0x0;for(i=0x0;i<0x9;i++)add+=parseInt(_0x31fa5a[_0x61e0a(0xab)](i))*(0xa-i);rev=0xb-add%0xb;if(rev==0xa||rev==0xb)rev=0x0;if(rev!=parseInt(_0x31fa5a[_0x61e0a(0xab)](0x9)))return![];add=0x0;for(i=0x0;i<0xa;i++)add+=parseInt(_0x31fa5a['charAt'](i))*(0xb-i);rev=0xb-add%0xb;if(rev==0xa||rev==0xb)rev=0x0;if(rev!=parseInt(_0x31fa5a['charAt'](0xa)))return![];return!![];};Number['prototype'][a0_0x24a097(0xcd)]=function(){const _0x599324=a0_0x24a097;return this['toLocaleString'](_0x599324(0xc0),{'minimumFractionDigits':0x2,'maximumFractionDigits':0x2});},HTMLCollection[a0_0x24a097(0xbd)][a0_0x24a097(0xac)]=function(){const _0xee4cb2=a0_0x24a097;return this[this[_0xee4cb2(0xb5)]-0x1];};