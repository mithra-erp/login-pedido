const _0x4abd0f=_0x5c4b;(function(_0x10c4d2,_0x3dc3b9){const _0x2e6190=_0x5c4b,_0x57ee14=_0x10c4d2();while(!![]){try{const _0xbc0262=parseInt(_0x2e6190(0x136))/0x1+parseInt(_0x2e6190(0x173))/0x2*(parseInt(_0x2e6190(0x178))/0x3)+-parseInt(_0x2e6190(0x15a))/0x4+-parseInt(_0x2e6190(0x190))/0x5*(parseInt(_0x2e6190(0x179))/0x6)+-parseInt(_0x2e6190(0x17c))/0x7*(-parseInt(_0x2e6190(0x125))/0x8)+parseInt(_0x2e6190(0x15e))/0x9+-parseInt(_0x2e6190(0x18d))/0xa;if(_0xbc0262===_0x3dc3b9)break;else _0x57ee14['push'](_0x57ee14['shift']());}catch(_0x5f1bc0){_0x57ee14['push'](_0x57ee14['shift']());}}}(_0x45fe,0x52420));var novoCliente=![],dadosEndereco=null;const form=document['querySelector'](_0x4abd0f(0x168)),inputCgc=document[_0x4abd0f(0x17b)](_0x4abd0f(0x122));var tabelaPreco=[],produtosArray=[];const quantidade=document['querySelector'](_0x4abd0f(0x194)),condicaoPagamento=document['querySelector']('#input-condicao-pagamento'),formaPagamento=document['querySelector']('#input-forma-pagamento'),produto=document[_0x4abd0f(0x17b)]('#input-produto'),valorProduto=document[_0x4abd0f(0x17b)](_0x4abd0f(0x116)),totalPedido=document[_0x4abd0f(0x17b)](_0x4abd0f(0x195)),dadosUsuario=JSON[_0x4abd0f(0x15f)](sessionStorage['getItem'](_0x4abd0f(0x157)));function _0x45fe(){const _0xd4ce9=['</strong>','<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22produto-carrinho\x22\x20data-code=\x22','TELEFO','autocomplete-items','keyCode','GREATER_THAN','\x22\x20\x20type=\x22text\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-total\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22','0101','remove','5102.21','#input-produto','Informe\x20a\x20Condição\x20de\x20Pagamento','srcElement','focusout','add','replace','produto','lastElementChild','TABELA','Cadastrar','toUpperCase','filter','getAttribute','NOME','ENDERECO','btn-red','appendChild','Cliente\x20não\x20cadastrado!','<input\x20type=\x27hidden\x27\x20value=\x27','json','\x22\x20\x20type=\x22text\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-danger\x22\x20onclick=\x22removeItemClick(event)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20fa-trash\x22\x20aria-hidden=\x22true\x22\x20style=\x22pointer-events:\x20none;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20','user_data','Erro','value','522252lwGDoZ','#input-numero','preco','#input-endereco','5006484GTQeZZ','parse','getElementById','quantidade','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22produto-carrinho\x22\x20data-code=\x22','push','createElement','autocomplete-list','EQUAL_TO','success','#form-pedido','TOTAL','div','VENDEDOR:\x20','location','#input-cep','#input-telefone','parentNode','index','input','trim','942wGOkPu','addEventListener','reload','#input-nome','SEQ','1686ssJigY','36kxsoug','preventDefault','querySelector','21lXuSUQ','CLIENT','toString','removeChild','https://viacep.com.br/ws/','BAIRRO','#input-vendedor','PRODUTO','parentElement','bairro','data','\x22\x20\x20type=\x22number\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-preco\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22','reset','Informe\x20o\x20vendedor!','map','codigo','focus','10166610CupJVh','produtosPedido','max','350815xPdPMK','PRODUT','DOMContentLoaded','\x22\x20data-id=\x22','#input-quantidade','#total-pedido','CABPDV','status','length','classList','FORMPG','1058','stringify','ibge','getElementsByTagName','/json','#input-bairro','class','localidade','toLocalCurrency','green','\x20salvo!','\x22\x20\x20type=\x22text\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-total\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','MUNICIPIO','#adiciona-produto-botao','innerHTML','reduce','#input-valor','#input-codigo-cliente','getElementsByClassName','option','keyup','Cancelar','disabled','#finaliza-pedido-botao','getItem','QUANT','DESCRICAO','INPUT','#input-cgc','data-id','\x22\x20\x20type=\x22text\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-danger\x22\x20onclick=\x22removeItemClick(event)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20fa-trash\x22\x20aria-hidden=\x22true\x22\x20style=\x22pointer-events:\x20none;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tbody>','1477056OJZcpn','PRECO','data-code','CODIGO','get','target','setAttribute','autocomplete-active','Informe\x20a\x20Forma\x20de\x20Pagamento','#input-cidade','then','undefined','NOMVEN','setItem','includes','click','confirm','530256DfTtpB','CONDPG'];_0x45fe=function(){return _0xd4ce9;};return _0x45fe();}let produtosPedido=JSON[_0x4abd0f(0x15f)](sessionStorage[_0x4abd0f(0x11e)]('produtosPedido'))||[],tabelaProdutos=document[_0x4abd0f(0x17b)]('#produtos-carrinho\x20tbody');document['querySelector'](_0x4abd0f(0x113))['addEventListener'](_0x4abd0f(0x134),_0x6d5003=>{const _0x49c6fe=_0x4abd0f;_0x6d5003[_0x49c6fe(0x17a)]();let _0x49335d=produto[_0x49c6fe(0x14e)](_0x49c6fe(0x127)),_0x353901=parseFloat(valorProduto['value'][_0x49c6fe(0x147)](',','.')),_0x3cb23b=Math[_0x49c6fe(0x18f)](...produtosPedido[_0x49c6fe(0x18a)](_0x24a32e=>_0x24a32e[_0x49c6fe(0x170)]));if(_0x3cb23b==null||isNaN(_0x3cb23b)||!isFinite(_0x3cb23b))_0x3cb23b=0x0;_0x3cb23b++;const _0x51ee30=_0x49c6fe(0x139)+_0x49335d+'\x22\x20data-id=\x22'+_0x3cb23b+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto\x20nobr\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+produto[_0x49c6fe(0x159)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-quantidade\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22'+quantidade[_0x49c6fe(0x159)]+'\x22\x20\x20type=\x22number\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-preco\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22'+_0x353901['toLocalCurrency']()+_0x49c6fe(0x1a6)+parseFloat(quantidade[_0x49c6fe(0x159)]*_0x353901)[_0x49c6fe(0x1a3)]()+_0x49c6fe(0x124);tabelaProdutos[_0x49c6fe(0x114)]+=_0x51ee30,produtosPedido[_0x49c6fe(0x163)]({'index':_0x3cb23b,'codigo':_0x49335d,'produto':produto[_0x49c6fe(0x159)],'quantidade':parseFloat(quantidade['value']),'preco':_0x353901}),sessionStorage['setItem'](_0x49c6fe(0x18e),JSON[_0x49c6fe(0x19c)](produtosPedido)),atualizaTotal(),form[_0x49c6fe(0x188)](),produto[_0x49c6fe(0x18c)]();});const removeItemClick=_0x4d7b03=>{const _0x146bab=_0x4abd0f;_0x4d7b03[_0x146bab(0x17a)]();var _0x368048=_0x4d7b03['target']||_0x4d7b03[_0x146bab(0x144)];let _0x489b91=_0x368048[_0x146bab(0x184)][_0x146bab(0x184)][_0x146bab(0x14e)](_0x146bab(0x123));removeItem(parseInt(_0x489b91),_0x368048['parentElement'][_0x146bab(0x184)]);};function removeItem(_0x5590c3,_0x9db890){const _0x568d9e=_0x4abd0f;produtosPedido=produtosPedido[_0x568d9e(0x14d)](_0xfbdc89=>_0xfbdc89[_0x568d9e(0x170)]!==_0x5590c3),sessionStorage[_0x568d9e(0x132)](_0x568d9e(0x18e),JSON[_0x568d9e(0x19c)](produtosPedido)),_0x9db890[_0x568d9e(0x140)](),atualizaTotal();}function _0x5c4b(_0x514542,_0xd01e83){const _0x45feeb=_0x45fe();return _0x5c4b=function(_0x5c4b5d,_0x129369){_0x5c4b5d=_0x5c4b5d-0x113;let _0x6e1ff8=_0x45feeb[_0x5c4b5d];return _0x6e1ff8;},_0x5c4b(_0x514542,_0xd01e83);}const atualizaTotal=()=>{const _0xc3b4c8=_0x4abd0f;let _0x4e3485=produtosPedido['reduce']((_0x1d995c,_0x5cae0a)=>{const _0x45c165=_0x5c4b;return _0x1d995c+_0x5cae0a['quantidade']*_0x5cae0a[_0x45c165(0x15c)];},0x0);totalPedido[_0xc3b4c8(0x114)]=_0x4e3485[_0xc3b4c8(0x1a3)]();},onContentLoaded=_0x3731f6=>{const _0x59a2a2=_0x4abd0f;document[_0x59a2a2(0x17b)](_0x59a2a2(0x182))[_0x59a2a2(0x159)]=dadosUsuario[_0x59a2a2(0x131)];let _0x4fa791={'area':_0x59a2a2(0x191),'fields':[_0x59a2a2(0x128),_0x59a2a2(0x120)],'search':[{'field':'STATUS','operation':_0x59a2a2(0x166),'value':'A'}]};search(_0x4fa791)[_0x59a2a2(0x12f)](async _0x2b3240=>{const _0x3fc445=_0x59a2a2;if(_0x2b3240['ok']){json=await _0x2b3240[_0x3fc445(0x155)]();let _0x22bceb=json[_0x3fc445(0x186)];autocomplete(document['querySelector'](_0x3fc445(0x142)),_0x22bceb);}else{if(_0x2b3240['status']==0x191){}}});},buscaTabela=_0x2acba4=>{const _0x2d969f=_0x4abd0f;let _0x2c0b3e={'area':'ITETAB','fields':[_0x2d969f(0x183),_0x2d969f(0x126)],'search':[{'field':'CHAVE','operation':_0x2d969f(0x166),'value':_0x2acba4}]};ShowOverlay(),search(_0x2c0b3e)[_0x2d969f(0x12f)](async _0x6c45c1=>{const _0x1cf73b=_0x2d969f;if(_0x6c45c1['ok']){let _0x565825=await _0x6c45c1[_0x1cf73b(0x155)]();tabelaPreco=_0x565825[_0x1cf73b(0x186)];}else{if(_0x6c45c1[_0x1cf73b(0x197)]==0x191){}}HideOverlay();});},buscaCondicoes=()=>{const _0x1534a0=_0x4abd0f;let _0x3e9967={'area':_0x1534a0(0x137),'fields':['CODIGO','DESCRICAO'],'search':[{'field':_0x1534a0(0x128),'operation':'GREATER_THAN','value':''}]};ShowOverlay(),search(_0x3e9967)[_0x1534a0(0x12f)](async _0x668cbe=>{const _0x30758f=_0x1534a0;if(_0x668cbe['ok']){let _0x5ec75c=await _0x668cbe[_0x30758f(0x155)]();if(_0x5ec75c[_0x30758f(0x167)])for(const _0x5cea11 of _0x5ec75c['data']){let _0x59a033=document[_0x30758f(0x164)]('option');_0x59a033[_0x30758f(0x159)]=_0x5cea11['CODIGO'],_0x59a033['innerHTML']=_0x5cea11[_0x30758f(0x120)],condicaoPagamento[_0x30758f(0x152)](_0x59a033);}}else{if(_0x668cbe[_0x30758f(0x197)]==0x191){}}HideOverlay();});},buscaFormasPagamento=()=>{const _0x3a6b7a=_0x4abd0f;let _0x1e5ec9={'area':_0x3a6b7a(0x19a),'fields':[_0x3a6b7a(0x128),_0x3a6b7a(0x120)],'search':[{'field':_0x3a6b7a(0x128),'operation':_0x3a6b7a(0x13d),'value':''}]};ShowOverlay(),search(_0x1e5ec9)[_0x3a6b7a(0x12f)](async _0x31a69d=>{const _0x5af676=_0x3a6b7a;if(_0x31a69d['ok']){let _0x9d7bb5=await _0x31a69d['json']();if(_0x9d7bb5[_0x5af676(0x167)])for(const _0xaa66b5 of _0x9d7bb5[_0x5af676(0x186)]){let _0x5a277d=document[_0x5af676(0x164)](_0x5af676(0x119));_0x5a277d['value']=_0xaa66b5[_0x5af676(0x128)],_0x5a277d[_0x5af676(0x114)]=_0xaa66b5[_0x5af676(0x120)],formaPagamento[_0x5af676(0x152)](_0x5a277d);}}else{if(_0x31a69d[_0x5af676(0x197)]==0x191){}}HideOverlay();});};produto[_0x4abd0f(0x174)](_0x4abd0f(0x145),_0x4f374b=>{const _0x242271=_0x4abd0f;let _0x2da80c=0x0,_0x30dfd2=produto[_0x242271(0x14e)](_0x242271(0x127)),_0x4d599d=tabelaPreco['find'](_0x22e01f=>_0x22e01f[_0x242271(0x183)]===_0x30dfd2);_0x4d599d!=null&&_0x4d599d!=_0x242271(0x130)&&(_0x2da80c=_0x4d599d[_0x242271(0x126)]),valorProduto[_0x242271(0x159)]=_0x2da80c;}),inputCgc[_0x4abd0f(0x174)]('focusout',_0xbcaba=>{const _0x37d4e6=_0x4abd0f;if(inputCgc[_0x37d4e6(0x159)][_0x37d4e6(0x172)]()['length']<0xb)return;let _0x5e24ff={'area':'CLIENT','fields':[_0x37d4e6(0x128),_0x37d4e6(0x14f),'ENDERECO','NUMERO',_0x37d4e6(0x181),'CEP',_0x37d4e6(0x1a8),_0x37d4e6(0x13a),_0x37d4e6(0x14a)],'search':[{'field':'CGC','operation':'EQUAL_TO','value':inputCgc['value']}]};ShowOverlay(),search(_0x5e24ff)[_0x37d4e6(0x12f)](async _0x597793=>{const _0x269098=_0x37d4e6;HideOverlay();if(_0x597793['ok']){let _0x2ae68c=await _0x597793[_0x269098(0x155)]();if(_0x2ae68c[_0x269098(0x167)]){let _0x4058f2=_0x2ae68c['data'];if(_0x4058f2[_0x269098(0x198)]>0x0){_0x4058f2=_0x4058f2[0x0],document[_0x269098(0x17b)](_0x269098(0x117))['value']=_0x4058f2['CODIGO'],document[_0x269098(0x17b)](_0x269098(0x176))[_0x269098(0x159)]=_0x4058f2[_0x269098(0x14f)],document[_0x269098(0x17b)](_0x269098(0x15d))[_0x269098(0x159)]=_0x4058f2[_0x269098(0x150)],document[_0x269098(0x17b)](_0x269098(0x15b))['value']=_0x4058f2['NUMERO'],document[_0x269098(0x17b)](_0x269098(0x1a0))['value']=_0x4058f2[_0x269098(0x181)],document[_0x269098(0x17b)]('#input-cep')['value']=_0x4058f2['CEP'],document['querySelector'](_0x269098(0x12e))[_0x269098(0x159)]=_0x4058f2['MUNICIPIO'],document[_0x269098(0x17b)](_0x269098(0x16e))['value']=_0x4058f2[_0x269098(0x13a)],buscaTabela(_0x4058f2[_0x269098(0x14a)]);return;}}$[_0x269098(0x135)]({'title':'Erro!','content':_0x269098(0x153),'type':'red','typeAnimated':!![],'buttons':{'success':{'text':_0x269098(0x11b),'btnClass':_0x269098(0x151),'action':function(){inputCgc['value']='';}},'register':{'text':_0x269098(0x14b),'btnClass':'btn-green','action':cadastro}}});}else{if(_0x597793[_0x269098(0x197)]==0x191){}}});});const cadastro=()=>{const _0x2db0c6=_0x4abd0f;document[_0x2db0c6(0x17b)](_0x2db0c6(0x176))[_0x2db0c6(0x11c)]=![],document[_0x2db0c6(0x17b)]('#input-endereco')[_0x2db0c6(0x11c)]=![],document['querySelector']('#input-numero')[_0x2db0c6(0x11c)]=![],document[_0x2db0c6(0x17b)](_0x2db0c6(0x1a0))[_0x2db0c6(0x11c)]=![],document['querySelector'](_0x2db0c6(0x16d))[_0x2db0c6(0x11c)]=![],document[_0x2db0c6(0x17b)]('#input-cidade')[_0x2db0c6(0x11c)]=![],document[_0x2db0c6(0x17b)](_0x2db0c6(0x16e))[_0x2db0c6(0x11c)]=![],novoCliente=!![],document[_0x2db0c6(0x17b)](_0x2db0c6(0x176))[_0x2db0c6(0x18c)]();},cadastrar=async()=>{const _0x2dda36=_0x4abd0f;let _0x5b75a5=_0x2dda36(0x180)+document[_0x2dda36(0x17b)](_0x2dda36(0x16d))['value']+'/json',_0x42a99d={'method':_0x2dda36(0x129)},_0x4316a3=await fetch(_0x5b75a5,_0x42a99d);dadosEndereco=null;_0x4316a3['ok']&&(dadosEndereco=await _0x4316a3[_0x2dda36(0x155)]());let _0x3cf477=document['querySelector'](_0x2dda36(0x176))[_0x2dda36(0x159)][_0x2dda36(0x14c)](),_0x5414b0=document[_0x2dda36(0x17b)]('#input-endereco')[_0x2dda36(0x159)][_0x2dda36(0x14c)](),_0x1de27f=document['querySelector']('#input-numero')['value'][_0x2dda36(0x14c)](),_0x5570ec=document['querySelector']('#input-bairro')['value']['toUpperCase'](),_0x389a2a=document['querySelector']('#input-cep')[_0x2dda36(0x159)][_0x2dda36(0x14c)](),_0x42765f=document['querySelector']('#input-cidade')[_0x2dda36(0x159)][_0x2dda36(0x14c)](),_0x4db406=document['querySelector'](_0x2dda36(0x16e))[_0x2dda36(0x159)][_0x2dda36(0x14c)](),_0x42e0fb=[{'area':_0x2dda36(0x17d),'data':[{'CODIGO':_0x2dda36(0x177),'CGC':inputCgc[_0x2dda36(0x159)],'PESSOA':inputCgc['value'][_0x2dda36(0x198)]==0xe?'J':'F','CODPAIS':_0x2dda36(0x19b),'DATCAD':currentDate(),'NOME':_0x3cf477,'ENDERECO':_0x5414b0,'NUMERO':_0x1de27f,'BAIRRO':_0x5570ec,'CEP':_0x389a2a,'MUNICIPIO':_0x42765f,'TELEFO':_0x4db406,'VENDED':dadosUsuario['CODIGO'],'CODMUN':dadosEndereco!=null?dadosEndereco[_0x2dda36(0x19d)]:'','ESTADO':dadosEndereco!=null?dadosEndereco['uf']:''}],'RETURN_ID':_0x2dda36(0x128)}],_0x5b293c=await insert(_0x42e0fb);if(_0x5b293c['ok']){let _0x202628=await _0x5b293c[_0x2dda36(0x155)]();return _0x202628['data'][0x0];}else return'';};document['querySelector'](_0x4abd0f(0x16d))[_0x4abd0f(0x174)](_0x4abd0f(0x145),async _0x5aacb4=>{const _0x15623f=_0x4abd0f;let _0x8261e7=_0x5aacb4[_0x15623f(0x12a)][_0x15623f(0x159)][_0x15623f(0x147)](/\D/g,'');if(_0x8261e7[_0x15623f(0x172)]()[_0x15623f(0x198)]!=0x8)return;ShowOverlay();let _0x198673=_0x15623f(0x180)+_0x8261e7+_0x15623f(0x19f),_0x387fd7={'method':_0x15623f(0x129)},_0x1e82bf=await fetch(_0x198673,_0x387fd7);dadosEndereco=null,_0x1e82bf['ok']?(dadosEndereco=await _0x1e82bf['json'](),document['querySelector'](_0x15623f(0x15d))['value']=dadosEndereco['logradouro'][_0x15623f(0x14c)](),document['querySelector'](_0x15623f(0x1a0))[_0x15623f(0x159)]=dadosEndereco[_0x15623f(0x185)][_0x15623f(0x14c)](),document['querySelector']('#input-cidade')[_0x15623f(0x159)]=dadosEndereco[_0x15623f(0x1a2)][_0x15623f(0x14c)](),HideOverlay(),document[_0x15623f(0x17b)](_0x15623f(0x15b))['focus']()):HideOverlay();}),document[_0x4abd0f(0x17b)](_0x4abd0f(0x11d))[_0x4abd0f(0x174)](_0x4abd0f(0x134),async _0x14d5de=>{const _0x281268=_0x4abd0f;_0x14d5de[_0x281268(0x17a)]();let _0x1ee771=document[_0x281268(0x17b)](_0x281268(0x117)),_0x18d74b=document[_0x281268(0x17b)]('#input-vendedor')[_0x281268(0x159)];if(_0x1ee771[_0x281268(0x159)]===''){novoCliente&&(_0x1ee771['value']=await cadastrar());if(_0x1ee771['value']===''){errorAlert(_0x281268(0x158),'Informe\x20o\x20cliente!');return;}}if(_0x18d74b===''){errorAlert('Erro',_0x281268(0x189));return;}if(condicaoPagamento[_0x281268(0x159)]===''){errorAlert(_0x281268(0x158),_0x281268(0x143));return;}if(formaPagamento[_0x281268(0x159)]===''){errorAlert(_0x281268(0x158),_0x281268(0x12d));return;}if(produtosPedido[_0x281268(0x198)]==0x0){errorAlert(_0x281268(0x158),'Pedido\x20sem\x20itens');return;}ShowOverlay();let _0x2d5db9=[],_0x35042f=0x0;for(const _0x437d1c of produtosPedido){_0x2d5db9[_0x281268(0x163)]({'ORDEM':(++_0x35042f)['toString'](),'PRODUTO':_0x437d1c[_0x281268(0x18b)],'QUANT':_0x437d1c[_0x281268(0x161)]['toString'](),'VALUNIT':_0x437d1c['preco'][_0x281268(0x17e)](),'TOTAL':(_0x437d1c[_0x281268(0x15c)]*_0x437d1c['quantidade'])[_0x281268(0x17e)](),'INTEGR':_0x281268(0x141),'ARMAZEM':'01'});}const _0x4c888d=_0x2d5db9[_0x281268(0x115)]((_0x4a29db,_0x1791a3)=>{const _0x2c13cc=_0x281268;return _0x4a29db+parseFloat(_0x1791a3[_0x2c13cc(0x169)]);},0x0),_0x71880c=_0x2d5db9['reduce']((_0x1768be,_0x1ec7d7)=>{const _0x2d748a=_0x281268;return _0x1768be+parseFloat(_0x1ec7d7[_0x2d748a(0x11f)]);},0x0);let _0x35f2be=[{'area':_0x281268(0x196),'data':[{'CLIENTE':_0x1ee771[_0x281268(0x159)],'VENDEDOR':dadosUsuario[_0x281268(0x128)],'CONDICAO':condicaoPagamento[_0x281268(0x159)],'FORMPG':formaPagamento['value'],'EMISSAO':currentDate(),'DATAINC':currentDate(),'TIPO':'P','STATUS':'B','FLAG':'A','FILIAL':_0x281268(0x13f),'TABELA':'1','QTDTOT':_0x71880c[_0x281268(0x17e)](),'VALOR':_0x4c888d['toString'](),'VALBRUT':_0x4c888d[_0x281268(0x17e)](),'VALMERC':_0x4c888d[_0x281268(0x17e)](),'OBS_INT':_0x281268(0x16b)+_0x18d74b[_0x281268(0x14c)](),'ITEPDV':_0x2d5db9}]}];insert(_0x35f2be)[_0x281268(0x12f)](async _0x4e0b8c=>{const _0x2ef853=_0x281268;if(_0x4e0b8c['ok']){let _0x1b2ac5=await _0x4e0b8c[_0x2ef853(0x155)]();if(_0x1b2ac5[_0x2ef853(0x167)]){let _0x4f5d81=_0x1b2ac5[_0x2ef853(0x186)][0x0];$[_0x2ef853(0x135)]({'title':'Sucesso!','content':'Pedido\x20'+_0x4f5d81+_0x2ef853(0x1a5),'type':_0x2ef853(0x1a4),'typeAnimated':!![],'buttons':{'success':{'text':'Ok','btnClass':'btn-green','action':function(){const _0x298845=_0x2ef853;document[_0x298845(0x16c)][_0x298845(0x175)]();}}}}),sessionStorage['removeItem'](_0x2ef853(0x18e));}}else{let _0x1e2e0c=await _0x4e0b8c['text']();}HideOverlay();});;});function autocomplete(_0x54423e,_0x10df19){const _0x4c10e0=_0x4abd0f;var _0x4b9c1b;_0x54423e[_0x4c10e0(0x174)](_0x4c10e0(0x171),function(_0x3a3970){const _0x53ec72=_0x4c10e0;var _0x58f1b1,_0x36ce9a,_0x2609fb,_0x6ab19=this[_0x53ec72(0x159)];_0x4f41a0();if(!_0x6ab19)return![];_0x4b9c1b=-0x1,_0x58f1b1=document['createElement']('DIV'),_0x58f1b1['setAttribute']('id',this['id']+_0x53ec72(0x165)),_0x58f1b1[_0x53ec72(0x12b)](_0x53ec72(0x1a1),_0x53ec72(0x13b)),this[_0x53ec72(0x16f)][_0x53ec72(0x152)](_0x58f1b1);for(_0x2609fb=0x0;_0x2609fb<_0x10df19[_0x53ec72(0x198)];_0x2609fb++){_0x10df19[_0x2609fb]['DESCRICAO'][_0x53ec72(0x14c)]()[_0x53ec72(0x133)](_0x6ab19['toUpperCase']())&&(_0x36ce9a=document[_0x53ec72(0x164)]('DIV'),_0x36ce9a['setAttribute']('data-code',_0x10df19[_0x2609fb][_0x53ec72(0x128)]),_0x36ce9a['innerHTML']=_0x10df19[_0x2609fb]['DESCRICAO']['toUpperCase']()['replace'](_0x6ab19[_0x53ec72(0x14c)](),'<strong>'+_0x6ab19['toUpperCase']()+_0x53ec72(0x138)),_0x36ce9a[_0x53ec72(0x114)]+=_0x53ec72(0x154)+_0x10df19[_0x2609fb]['DESCRICAO']+'\x27>',_0x36ce9a[_0x53ec72(0x174)](_0x53ec72(0x134),function(_0x57338c){const _0x2b6fea=_0x53ec72;_0x54423e[_0x2b6fea(0x159)]=this[_0x2b6fea(0x19e)](_0x2b6fea(0x171))[0x0][_0x2b6fea(0x159)],_0x54423e[_0x2b6fea(0x12b)](_0x2b6fea(0x127),this['getAttribute'](_0x2b6fea(0x127))),_0x4f41a0();}),_0x58f1b1[_0x53ec72(0x152)](_0x36ce9a));}}),_0x54423e[_0x4c10e0(0x174)](_0x4c10e0(0x145),function(_0x56de66){const _0x476529=_0x4c10e0;var _0x195687=document[_0x476529(0x160)](this['id']+_0x476529(0x165));if(_0x195687)_0x195687=_0x195687[_0x476529(0x19e)](_0x476529(0x16a));_0x56de66[_0x476529(0x17a)]();if(_0x4b9c1b>-0x1){if(_0x195687)_0x195687[_0x4b9c1b][_0x476529(0x134)]();}}),_0x54423e['addEventListener']('keydown',function(_0x3797d2){const _0xe77811=_0x4c10e0;var _0x2c94ac=document[_0xe77811(0x160)](this['id']+'autocomplete-list');if(_0x2c94ac)_0x2c94ac=_0x2c94ac[_0xe77811(0x19e)](_0xe77811(0x16a));if(_0x3797d2[_0xe77811(0x13c)]==0x28)_0x4b9c1b++,_0x5d6085(_0x2c94ac);else{if(_0x3797d2[_0xe77811(0x13c)]==0x26)_0x4b9c1b--,_0x5d6085(_0x2c94ac);else{if(_0x3797d2['keyCode']==0xd){_0x3797d2[_0xe77811(0x17a)]();if(_0x4b9c1b>-0x1){if(_0x2c94ac)_0x2c94ac[_0x4b9c1b]['click']();}}else{if(_0x3797d2[_0xe77811(0x13c)]==0x9){if(_0x4b9c1b>-0x1){if(_0x2c94ac)_0x2c94ac[_0x4b9c1b]['click']();}}}}}});function _0x5d6085(_0x37d5fd){const _0x158fc0=_0x4c10e0;if(!_0x37d5fd)return![];_0x6228df(_0x37d5fd);if(_0x4b9c1b>=_0x37d5fd[_0x158fc0(0x198)])_0x4b9c1b=0x0;if(_0x4b9c1b<0x0)_0x4b9c1b=_0x37d5fd[_0x158fc0(0x198)]-0x1;_0x37d5fd[_0x4b9c1b][_0x158fc0(0x199)][_0x158fc0(0x146)](_0x158fc0(0x12c)),_0x54423e[_0x158fc0(0x159)]=_0x37d5fd[_0x4b9c1b][_0x158fc0(0x149)][_0x158fc0(0x159)];}function _0x6228df(_0x4e69d5){const _0x4b1036=_0x4c10e0;for(var _0x1b9995=0x0;_0x1b9995<_0x4e69d5[_0x4b1036(0x198)];_0x1b9995++){_0x4e69d5[_0x1b9995][_0x4b1036(0x199)][_0x4b1036(0x140)](_0x4b1036(0x12c));}}function _0x4f41a0(_0x4ad591){const _0x4d75a6=_0x4c10e0;var _0x4b07e8=document[_0x4d75a6(0x118)](_0x4d75a6(0x13b));for(var _0x176a4a=0x0;_0x176a4a<_0x4b07e8['length'];_0x176a4a++){_0x4ad591!=_0x4b07e8[_0x176a4a]&&_0x4ad591!=_0x54423e&&_0x4b07e8[_0x176a4a]['parentNode'][_0x4d75a6(0x17f)](_0x4b07e8[_0x176a4a]);}}document[_0x4c10e0(0x174)](_0x4c10e0(0x134),function(_0x165203){const _0x543be4=_0x4c10e0;_0x4f41a0(_0x165203[_0x543be4(0x12a)]);});}buscaCondicoes(),buscaFormasPagamento(),document['addEventListener'](_0x4abd0f(0x11a),_0xf876d7=>{const _0x18b90c=_0x4abd0f;_0xf876d7[_0x18b90c(0x12a)]['nodeName']==_0x18b90c(0x121)&&(_0xf876d7[_0x18b90c(0x12a)][_0x18b90c(0x159)]=_0xf876d7[_0x18b90c(0x12a)][_0x18b90c(0x159)][_0x18b90c(0x14c)]());}),produtosPedido['forEach'](_0x397e97=>{const _0xf9fe32=_0x4abd0f,_0x29483e=_0xf9fe32(0x162)+_0x397e97['codigo']+_0xf9fe32(0x193)+_0x397e97[_0xf9fe32(0x170)]+_0xf9fe32(0x1a7)+_0x397e97[_0xf9fe32(0x148)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-quantidade\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22'+_0x397e97[_0xf9fe32(0x161)]+_0xf9fe32(0x187)+parseFloat(_0x397e97['preco'])[_0xf9fe32(0x1a3)]()+_0xf9fe32(0x13e)+parseFloat(_0x397e97[_0xf9fe32(0x161)]*(_0x397e97[_0xf9fe32(0x15c)]||0x0))[_0xf9fe32(0x1a3)]()+_0xf9fe32(0x156);tabelaProdutos['innerHTML']+=_0x29483e;}),document[_0x4abd0f(0x174)](_0x4abd0f(0x192),onContentLoaded),validaToken();