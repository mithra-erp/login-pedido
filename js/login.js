(function(_0xea4bc4,_0x2a2dc2){const _0x2ce578=a0_0x5466,_0x33c020=_0xea4bc4();while(!![]){try{const _0x5d4ec6=-parseInt(_0x2ce578(0x1a1))/0x1+parseInt(_0x2ce578(0x1a4))/0x2+-parseInt(_0x2ce578(0x1a5))/0x3+-parseInt(_0x2ce578(0x196))/0x4*(parseInt(_0x2ce578(0x1a7))/0x5)+parseInt(_0x2ce578(0x197))/0x6*(parseInt(_0x2ce578(0x190))/0x7)+-parseInt(_0x2ce578(0x198))/0x8+-parseInt(_0x2ce578(0x1a8))/0x9*(-parseInt(_0x2ce578(0x195))/0xa);if(_0x5d4ec6===_0x2a2dc2)break;else _0x33c020['push'](_0x33c020['shift']());}catch(_0x5d5b7d){_0x33c020['push'](_0x33c020['shift']());}}}(a0_0x28e0,0x707f5));const validaUsuario=_0x2df0db=>{const _0x20713d=a0_0x5466;_0x2df0db['preventDefault']();let _0x20ecb1=document[_0x20713d(0x18f)](_0x20713d(0x1a3)),_0x2cb454=document[_0x20713d(0x18f)](_0x20713d(0x1a9)),_0x3e3cfa={'username':_0x20ecb1['value'],'password':_0x2cb454['value']},_0x3bcfed={'method':_0x20713d(0x19d),'headers':new Headers({'X-Client-Id':xClientId,'Content-Type':_0x20713d(0x19e)}),'body':JSON[_0x20713d(0x19f)](_0x3e3cfa)};ShowOverlay(),fetch(baseUrlApi+_0x20713d(0x191),_0x3bcfed)['then'](async _0x558476=>{const _0x1b5f37=_0x20713d;HideOverlay();if(_0x558476['ok']){let _0x254c13=await _0x558476[_0x1b5f37(0x199)]();sessionStorage[_0x1b5f37(0x1ac)](_0x1b5f37(0x194),_0x254c13[_0x1b5f37(0x18e)]);let _0x786a2a={'area':_0x1b5f37(0x192),'fields':[_0x1b5f37(0x1a0),'NOME',_0x1b5f37(0x1a6)],'search':[{'field':_0x1b5f37(0x1ab),'operation':_0x1b5f37(0x193),'value':_0x20ecb1[_0x1b5f37(0x1a2)]}]};ShowOverlay(),search(_0x786a2a)[_0x1b5f37(0x18b)](async _0x32f9eb=>{const _0x4fa593=_0x1b5f37;if(_0x32f9eb['ok']){let _0x34380c=await _0x32f9eb[_0x4fa593(0x199)]();_0x34380c[_0x4fa593(0x19b)]&&sessionStorage['setItem'](_0x4fa593(0x19c),JSON[_0x4fa593(0x19f)](_0x34380c[_0x4fa593(0x1aa)][0x0]));}window[_0x4fa593(0x19a)][_0x4fa593(0x18d)]='pedido.html';})[_0x1b5f37(0x18b)](_0x5c49e4=>HideOverlay());}else{let _0x4444cc=await _0x558476[_0x1b5f37(0x199)]();alert(_0x4444cc[_0x1b5f37(0x18c)]);}})['catch'](_0x2515ab=>{alert(_0x2515ab),HideOverlay();});};function a0_0x5466(_0x573fed,_0x3a941b){const _0x28e0e4=a0_0x28e0();return a0_0x5466=function(_0x5466bd,_0x3578e8){_0x5466bd=_0x5466bd-0x18b;let _0x103802=_0x28e0e4[_0x5466bd];return _0x103802;},a0_0x5466(_0x573fed,_0x3a941b);}function a0_0x28e0(){const _0x5ddab9=['VENDED','EQUAL_TO','api_token','10OowaPm','12NynULh','83838iTsKBE','6774264pxcjYL','json','location','success','user_data','post','application/json','stringify','CODIGO','872798ZEQjht','value','#usuario-login','1239914ZmZpEd','561039iadVAF','NOMVEN','340820LEKLnF','16938477pvGKUR','#usuario-senha','data','USERAPP','setItem','then','message','href','access_token','querySelector','35yIIkzP','/mithra/v1/auth'];a0_0x28e0=function(){return _0x5ddab9;};return a0_0x28e0();}