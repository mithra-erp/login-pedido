function a0_0x5d60(){const _0x1694f7=['querySelector','json','306607WkpFHx','user_data','51yqosFw','USERAPP','9OoCXOu','EQUAL_TO','value','122502hRXVfk','catch','api_token','message','location','#usuario-login','47991151pBKziK','pedido.html','258032KNCcJR','success','112trawHS','access_token','12142097moeTyt','/mithra/v1/auth','setItem','post','then','8019170HboOjn','451926pEDADR','CODIGO','NOME','2jMGROR','data','stringify','70NNcmfp','ALTVAL','preventDefault','href','application/json','12rybCGc'];a0_0x5d60=function(){return _0x1694f7;};return a0_0x5d60();}function a0_0x3552(_0x193b34,_0x4434f4){const _0x5d601e=a0_0x5d60();return a0_0x3552=function(_0x3552f5,_0x563be6){_0x3552f5=_0x3552f5-0x91;let _0x24f125=_0x5d601e[_0x3552f5];return _0x24f125;},a0_0x3552(_0x193b34,_0x4434f4);}(function(_0x591ff3,_0x399c65){const _0x1b09a8=a0_0x3552,_0x7a5a71=_0x591ff3();while(!![]){try{const _0x24f697=-parseInt(_0x1b09a8(0x96))/0x1*(-parseInt(_0x1b09a8(0x93))/0x2)+-parseInt(_0x1b09a8(0xa3))/0x3*(parseInt(_0x1b09a8(0xb0))/0x4)+-parseInt(_0x1b09a8(0x99))/0x5*(-parseInt(_0x1b09a8(0xa8))/0x6)+-parseInt(_0x1b09a8(0xa1))/0x7*(parseInt(_0x1b09a8(0xb2))/0x8)+parseInt(_0x1b09a8(0xa5))/0x9*(-parseInt(_0x1b09a8(0x92))/0xa)+-parseInt(_0x1b09a8(0xb4))/0xb*(parseInt(_0x1b09a8(0x9e))/0xc)+parseInt(_0x1b09a8(0xae))/0xd;if(_0x24f697===_0x399c65)break;else _0x7a5a71['push'](_0x7a5a71['shift']());}catch(_0x7a8035){_0x7a5a71['push'](_0x7a5a71['shift']());}}}(a0_0x5d60,0xc6ae5));const validaUsuario=_0x3afe17=>{const _0x2499ad=a0_0x3552;_0x3afe17[_0x2499ad(0x9b)]();let _0x45aaff=document[_0x2499ad(0x9f)](_0x2499ad(0xad)),_0x232342=document[_0x2499ad(0x9f)]('#usuario-senha'),_0x12b5bd={'username':_0x45aaff[_0x2499ad(0xa7)],'password':_0x232342[_0x2499ad(0xa7)]},_0x3feb64={'method':_0x2499ad(0xb7),'headers':new Headers({'X-Client-Id':xClientId,'Content-Type':_0x2499ad(0x9d)}),'body':JSON[_0x2499ad(0x98)](_0x12b5bd)};ShowOverlay(),fetch(baseUrlApi+_0x2499ad(0xb5),_0x3feb64)[_0x2499ad(0x91)](async _0x355099=>{const _0x290a27=_0x2499ad;HideOverlay();if(_0x355099['ok']){let _0x25f8d1=await _0x355099['json']();sessionStorage[_0x290a27(0xb6)](_0x290a27(0xaa),_0x25f8d1[_0x290a27(0xb3)]);let _0x378f50={'area':'VENDED','fields':[_0x290a27(0x94),_0x290a27(0x95),'NOMVEN',_0x290a27(0x9a)],'search':[{'field':_0x290a27(0xa4),'operation':_0x290a27(0xa6),'value':_0x45aaff[_0x290a27(0xa7)]}]};ShowOverlay(),search(_0x378f50)['then'](async _0x19a153=>{const _0x56d9bc=_0x290a27;if(_0x19a153['ok']){let _0x13d0cb=await _0x19a153[_0x56d9bc(0xa0)]();_0x13d0cb[_0x56d9bc(0xb1)]&&sessionStorage[_0x56d9bc(0xb6)](_0x56d9bc(0xa2),JSON['stringify'](_0x13d0cb[_0x56d9bc(0x97)][0x0]));}window[_0x56d9bc(0xac)][_0x56d9bc(0x9c)]=_0x56d9bc(0xaf);})['then'](_0x10ebf9=>HideOverlay());}else{let _0x55b200=await _0x355099[_0x290a27(0xa0)]();alert(_0x55b200[_0x290a27(0xab)]);}})[_0x2499ad(0xa9)](_0x441c01=>{alert(_0x441c01),HideOverlay();});};