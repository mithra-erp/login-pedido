function a0_0x44ce(_0x10a43a,_0xa7f299){const _0x481301=a0_0x4813();return a0_0x44ce=function(_0x44cedf,_0x37c2ec){_0x44cedf=_0x44cedf-0x189;let _0x32fdae=_0x481301[_0x44cedf];return _0x32fdae;},a0_0x44ce(_0x10a43a,_0xa7f299);}(function(_0x3a3427,_0x3f0021){const _0x512f41=a0_0x44ce,_0x15f05a=_0x3a3427();while(!![]){try{const _0x2cafa0=-parseInt(_0x512f41(0x193))/0x1+parseInt(_0x512f41(0x19b))/0x2+-parseInt(_0x512f41(0x1a2))/0x3+parseInt(_0x512f41(0x1a3))/0x4+-parseInt(_0x512f41(0x191))/0x5+-parseInt(_0x512f41(0x19a))/0x6*(-parseInt(_0x512f41(0x195))/0x7)+parseInt(_0x512f41(0x19f))/0x8;if(_0x2cafa0===_0x3f0021)break;else _0x15f05a['push'](_0x15f05a['shift']());}catch(_0x59c825){_0x15f05a['push'](_0x15f05a['shift']());}}}(a0_0x4813,0x482d0));function a0_0x4813(){const _0x4bfc24=['NOMVEN','href','ALTVAL','2148920mmsmER','message','then','666063kqWzfY','254128SFHJzl','setItem','USERAPP','catch','value','#usuario-senha','VENDED','#usuario-login','stringify','querySelector','json','2016250KQrBGg','api_token','467930IKlXjv','CODIGO','1281TJSjbh','EQUAL_TO','data','NOME','/mithra/v1/auth','16986feAWip','1077226ToHxEp'];a0_0x4813=function(){return _0x4bfc24;};return a0_0x4813();}const validaUsuario=_0x21dbf4=>{const _0x14757a=a0_0x44ce;_0x21dbf4['preventDefault']();let _0x989c7d=document[_0x14757a(0x18f)](_0x14757a(0x18d)),_0x52d070=document[_0x14757a(0x18f)](_0x14757a(0x18b)),_0xd31d7a={'username':_0x989c7d[_0x14757a(0x18a)],'password':_0x52d070[_0x14757a(0x18a)]},_0x217651={'method':'post','headers':new Headers({'X-Client-Id':xClientId,'Content-Type':'application/json'}),'body':JSON[_0x14757a(0x18e)](_0xd31d7a)};ShowOverlay(),fetch(baseUrlApi+_0x14757a(0x199),_0x217651)['then'](async _0x49dbaf=>{const _0x364ab0=_0x14757a;HideOverlay();if(_0x49dbaf['ok']){let _0x322404=await _0x49dbaf[_0x364ab0(0x190)]();sessionStorage[_0x364ab0(0x1a4)](_0x364ab0(0x192),_0x322404['access_token']);let _0x276d89={'area':_0x364ab0(0x18c),'fields':[_0x364ab0(0x194),_0x364ab0(0x198),_0x364ab0(0x19c),_0x364ab0(0x19e)],'search':[{'field':_0x364ab0(0x1a5),'operation':_0x364ab0(0x196),'value':_0x989c7d[_0x364ab0(0x18a)]}]};ShowOverlay(),search(_0x276d89)[_0x364ab0(0x1a1)](async _0x5d7d8b=>{const _0x44177d=_0x364ab0;if(_0x5d7d8b['ok']){let _0x4e48cd=await _0x5d7d8b['json']();_0x4e48cd['success']&&sessionStorage[_0x44177d(0x1a4)]('user_data',JSON[_0x44177d(0x18e)](_0x4e48cd[_0x44177d(0x197)][0x0]));}window['location'][_0x44177d(0x19d)]='pedido.html';})[_0x364ab0(0x1a1)](_0x512aa3=>HideOverlay());}else{let _0x27d779=await _0x49dbaf[_0x364ab0(0x190)]();alert(_0x27d779[_0x364ab0(0x1a0)]);}})[_0x14757a(0x189)](_0x37ea8f=>{alert(_0x37ea8f),HideOverlay();});};