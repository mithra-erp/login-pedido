function a0_0x550f(_0x81dabe,_0xf5731f){const _0x5356c7=a0_0x5356();return a0_0x550f=function(_0x550f1d,_0x3a2aa2){_0x550f1d=_0x550f1d-0x140;let _0x191daf=_0x5356c7[_0x550f1d];return _0x191daf;},a0_0x550f(_0x81dabe,_0xf5731f);}function a0_0x5356(){const _0x3cad3e=['message','setItem','stringify','api_token','success','value','#usuario-login','900bsQYCg','USERAPP','225276jFdJBE','user_data','access_token','610Irvata','NOMVEN','/mithra/v1/auth','href','1210034dXEfVJ','json','993lyFZIT','post','1474696veYOvf','querySelector','EQUAL_TO','60eiiGhc','catch','application/json','location','694301iGjQwI','#usuario-senha','NOME','CODIGO','5143039ZfoMCz','32nxYhbk','then','ALTVAL','84411ZlikwD','205kdDimP'];a0_0x5356=function(){return _0x3cad3e;};return a0_0x5356();}(function(_0x4c4da5,_0x1e5846){const _0x225541=a0_0x550f,_0x243df2=_0x4c4da5();while(!![]){try{const _0x1153ee=parseInt(_0x225541(0x157))/0x1+-parseInt(_0x225541(0x150))/0x2+-parseInt(_0x225541(0x14e))/0x3*(-parseInt(_0x225541(0x143))/0x4)+-parseInt(_0x225541(0x160))/0x5*(parseInt(_0x225541(0x145))/0x6)+-parseInt(_0x225541(0x14c))/0x7*(-parseInt(_0x225541(0x15c))/0x8)+parseInt(_0x225541(0x15f))/0x9*(-parseInt(_0x225541(0x148))/0xa)+-parseInt(_0x225541(0x15b))/0xb*(-parseInt(_0x225541(0x153))/0xc);if(_0x1153ee===_0x1e5846)break;else _0x243df2['push'](_0x243df2['shift']());}catch(_0x5da5ea){_0x243df2['push'](_0x243df2['shift']());}}}(a0_0x5356,0xe7b7c));const validaUsuario=_0x100818=>{const _0x34f864=a0_0x550f;_0x100818['preventDefault']();let _0x34961a=document[_0x34f864(0x151)](_0x34f864(0x142)),_0xfb521e=document[_0x34f864(0x151)](_0x34f864(0x158)),_0xe36c0a={'username':_0x34961a['value'],'password':_0xfb521e[_0x34f864(0x141)]},_0xe70de6={'method':_0x34f864(0x14f),'headers':new Headers({'X-Client-Id':xClientId,'Content-Type':_0x34f864(0x155)}),'body':JSON[_0x34f864(0x163)](_0xe36c0a)};ShowOverlay(),fetch(baseUrlApi+_0x34f864(0x14a),_0xe70de6)['then'](async _0x15ec16=>{const _0x3bf926=_0x34f864;HideOverlay();if(_0x15ec16['ok']){let _0x41a354=await _0x15ec16[_0x3bf926(0x14d)]();sessionStorage[_0x3bf926(0x162)](_0x3bf926(0x164),_0x41a354[_0x3bf926(0x147)]);let _0x39984d={'area':'VENDED','fields':[_0x3bf926(0x15a),_0x3bf926(0x159),_0x3bf926(0x149),_0x3bf926(0x15e)],'search':[{'field':_0x3bf926(0x144),'operation':_0x3bf926(0x152),'value':_0x34961a[_0x3bf926(0x141)]}]};ShowOverlay(),search(_0x39984d)[_0x3bf926(0x15d)](async _0x529ba7=>{const _0x360673=_0x3bf926;if(_0x529ba7['ok']){let _0x500c0f=await _0x529ba7['json']();_0x500c0f[_0x360673(0x140)]&&sessionStorage[_0x360673(0x162)](_0x360673(0x146),JSON[_0x360673(0x163)](_0x500c0f['data'][0x0]));}window[_0x360673(0x156)][_0x360673(0x14b)]='pedido.html';})[_0x3bf926(0x15d)](_0xcb6482=>HideOverlay());}else{let _0x365ad6=await _0x15ec16['json']();alert(_0x365ad6[_0x3bf926(0x161)]);}})[_0x34f864(0x154)](_0x3d5e10=>{alert(_0x3d5e10),HideOverlay();});};