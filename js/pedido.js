const a0_0xba376c=a0_0xe1ed;(function(_0x4df1af,_0x305a1e){const _0x2a13c8=a0_0xe1ed,_0x46a7b2=_0x4df1af();while(!![]){try{const _0xcc98cd=parseInt(_0x2a13c8(0x1cf))/0x1+-parseInt(_0x2a13c8(0x1dd))/0x2+parseInt(_0x2a13c8(0x1d7))/0x3*(parseInt(_0x2a13c8(0x1e5))/0x4)+parseInt(_0x2a13c8(0x19d))/0x5+parseInt(_0x2a13c8(0x196))/0x6+-parseInt(_0x2a13c8(0x1a0))/0x7*(parseInt(_0x2a13c8(0x1c1))/0x8)+-parseInt(_0x2a13c8(0x154))/0x9;if(_0xcc98cd===_0x305a1e)break;else _0x46a7b2['push'](_0x46a7b2['shift']());}catch(_0x304758){_0x46a7b2['push'](_0x46a7b2['shift']());}}}(a0_0x8bd2,0x472f6));var novoCliente=![],dadosEndereco=null,tabelaPreco=[],produtosArray=[],clienteAtual=null,ibgeRms=[a0_0xba376c(0x162),a0_0xba376c(0x1e8),a0_0xba376c(0x1b0),a0_0xba376c(0x1be),a0_0xba376c(0x156),a0_0xba376c(0x1d8),'2905408','2927408',a0_0xba376c(0x171),a0_0xba376c(0x160),a0_0xba376c(0x14c),'2906307'];const form=document[a0_0xba376c(0x1e9)](a0_0xba376c(0x1e3)),inputCgc=document[a0_0xba376c(0x1e9)]('#input-cgc'),quantidade=document['querySelector'](a0_0xba376c(0x198)),condicaoPagamento=document[a0_0xba376c(0x1e9)](a0_0xba376c(0x16f)),formaPagamento=document[a0_0xba376c(0x1e9)](a0_0xba376c(0x1f0)),produto=document[a0_0xba376c(0x1e9)]('#input-produto'),valorProduto=document[a0_0xba376c(0x1e9)]('#input-valor'),totalPedido=document['querySelector']('#total-pedido'),dadosUsuario=JSON[a0_0xba376c(0x1fa)](sessionStorage[a0_0xba376c(0x1c8)](a0_0xba376c(0x172)));let produtosPedido=JSON[a0_0xba376c(0x1fa)](sessionStorage[a0_0xba376c(0x1c8)](a0_0xba376c(0x191)))||[],tabelaProdutos=document[a0_0xba376c(0x1e9)](a0_0xba376c(0x182));document[a0_0xba376c(0x1e9)](a0_0xba376c(0x1dc))[a0_0xba376c(0x1b3)](a0_0xba376c(0x163),_0x25aeb9=>{const _0xde440=a0_0xba376c;_0x25aeb9[_0xde440(0x16d)]();let _0x2a7bb3=produto[_0xde440(0x1e2)](_0xde440(0x181)),_0x3c1f81=parseFloat(valorProduto[_0xde440(0x1d9)][_0xde440(0x19a)](',','.')),_0x5c87bd=Math[_0xde440(0x1ae)](...produtosPedido['map'](_0xc17d5=>_0xc17d5['index']));if(_0x5c87bd==null||isNaN(_0x5c87bd)||!isFinite(_0x5c87bd))_0x5c87bd=0x0;_0x5c87bd++;const _0x383513=_0xde440(0x184)+_0x2a7bb3+_0xde440(0x1d5)+_0x5c87bd+_0xde440(0x15e)+produto['value']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-quantidade\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22'+quantidade[_0xde440(0x1d9)]+'\x22\x20\x20type=\x22number\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-preco\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22'+_0x3c1f81['toLocalCurrency']()+_0xde440(0x17a)+parseFloat(quantidade[_0xde440(0x1d9)]*_0x3c1f81)['toLocalCurrency']()+'\x22\x20\x20type=\x22text\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-danger\x22\x20onclick=\x22removeItemClick(event)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20fa-trash\x22\x20aria-hidden=\x22true\x22\x20style=\x22pointer-events:\x20none;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tbody>';tabelaProdutos['innerHTML']+=_0x383513,produtosPedido[_0xde440(0x1e7)]({'index':_0x5c87bd,'codigo':_0x2a7bb3,'produto':produto['value'],'quantidade':parseFloat(quantidade[_0xde440(0x1d9)]),'preco':_0x3c1f81}),sessionStorage[_0xde440(0x197)](_0xde440(0x191),JSON[_0xde440(0x1f7)](produtosPedido)),atualizaTotal(),form['reset'](),produto[_0xde440(0x1ed)]();});const removeItemClick=_0x55e556=>{const _0x39e11a=a0_0xba376c;_0x55e556[_0x39e11a(0x16d)]();var _0x24e3df=_0x55e556[_0x39e11a(0x14f)]||_0x55e556[_0x39e11a(0x1ee)];let _0x54f5ce=_0x24e3df[_0x39e11a(0x18d)][_0x39e11a(0x18d)]['getAttribute']('data-id');removeItem(parseInt(_0x54f5ce),_0x24e3df[_0x39e11a(0x18d)][_0x39e11a(0x18d)]);};function a0_0xe1ed(_0x489174,_0x3c4055){const _0x8bd2af=a0_0x8bd2();return a0_0xe1ed=function(_0xe1edcc,_0x4eed76){_0xe1edcc=_0xe1edcc-0x147;let _0x5e675b=_0x8bd2af[_0xe1edcc];return _0x5e675b;},a0_0xe1ed(_0x489174,_0x3c4055);}function removeItem(_0x36c6f3,_0x50e1b2){const _0x1608ee=a0_0xba376c;produtosPedido=produtosPedido['filter'](_0x930965=>_0x930965[_0x1608ee(0x1db)]!==_0x36c6f3),sessionStorage[_0x1608ee(0x197)](_0x1608ee(0x191),JSON['stringify'](produtosPedido)),_0x50e1b2[_0x1608ee(0x185)](),atualizaTotal();}const atualizaTotal=()=>{const _0x46c8da=a0_0xba376c;let _0x5aec87=produtosPedido[_0x46c8da(0x1ec)]((_0x33a30d,_0x1654bc)=>{const _0x422325=_0x46c8da;return _0x33a30d+_0x1654bc[_0x422325(0x158)]*_0x1654bc['preco'];},0x0);totalPedido[_0x46c8da(0x190)]=_0x5aec87[_0x46c8da(0x180)]();},onContentLoaded=_0x25e1fa=>{const _0x187f67=a0_0xba376c;document[_0x187f67(0x1e9)](_0x187f67(0x17f))[_0x187f67(0x1d9)]=dadosUsuario[_0x187f67(0x17c)];let _0x1d0580={'area':_0x187f67(0x1ca),'fields':[_0x187f67(0x1bb),'DESCRICAO'],'search':[{'field':'STATUS','operation':_0x187f67(0x1d6),'value':'A'}]};search(_0x1d0580)[_0x187f67(0x1f9)](async _0x2a759e=>{const _0xea1a63=_0x187f67;if(_0x2a759e['ok']){json=await _0x2a759e[_0xea1a63(0x1a1)]();let _0x1187b0=json[_0xea1a63(0x1ab)];autocomplete(produto,_0x1187b0);}else _0x2a759e[_0xea1a63(0x1d3)]==0x191&&(sessionStorage['clear'](),window[_0xea1a63(0x18f)][_0xea1a63(0x1f5)]=_0xea1a63(0x18a));});},buscaTabela=_0x25d025=>{const _0x197b2e=a0_0xba376c;let _0x3085c={'area':'ITETAB','fields':[_0x197b2e(0x1c3),_0x197b2e(0x17b)],'search':[{'field':_0x197b2e(0x1cb),'operation':_0x197b2e(0x1d6),'value':_0x25d025}]};ShowOverlay(),search(_0x3085c)[_0x197b2e(0x1f9)](async _0x398507=>{const _0x1d9ed0=_0x197b2e;if(_0x398507['ok']){let _0x3e74a5=await _0x398507[_0x1d9ed0(0x1a1)]();tabelaPreco=_0x3e74a5[_0x1d9ed0(0x1ab)];}else{if(_0x398507['status']==0x191){}}HideOverlay();});},buscaCondicoes=()=>{const _0x1f3244=a0_0xba376c;let _0xdbcb01={'area':_0x1f3244(0x1a3),'fields':['CODIGO',_0x1f3244(0x176)],'search':[{'field':_0x1f3244(0x1bb),'operation':_0x1f3244(0x199),'value':''}]};ShowOverlay(),search(_0xdbcb01)[_0x1f3244(0x1f9)](async _0x16763a=>{const _0x476872=_0x1f3244;if(_0x16763a['ok']){let _0x4b99da=await _0x16763a[_0x476872(0x1a1)]();if(_0x4b99da[_0x476872(0x149)])for(const _0x4de840 of _0x4b99da[_0x476872(0x1ab)]){let _0x4fc8a1=document[_0x476872(0x157)](_0x476872(0x18b));_0x4fc8a1[_0x476872(0x1d9)]=_0x4de840[_0x476872(0x1bb)],_0x4fc8a1[_0x476872(0x190)]=_0x4de840['DESCRICAO'],condicaoPagamento['appendChild'](_0x4fc8a1);}}else{if(_0x16763a['status']==0x191){}}HideOverlay();});},buscaFormasPagamento=()=>{const _0x422310=a0_0xba376c;let _0x5d0501={'area':_0x422310(0x152),'fields':['CODIGO',_0x422310(0x176)],'search':[{'field':_0x422310(0x1bb),'operation':_0x422310(0x199),'value':''}]};ShowOverlay(),search(_0x5d0501)[_0x422310(0x1f9)](async _0x266ac7=>{const _0x4c6573=_0x422310;if(_0x266ac7['ok']){let _0x3f9c6a=await _0x266ac7[_0x4c6573(0x1a1)]();if(_0x3f9c6a[_0x4c6573(0x149)])for(const _0x5dfecc of _0x3f9c6a[_0x4c6573(0x1ab)]){let _0x4b4611=document[_0x4c6573(0x157)](_0x4c6573(0x18b));_0x4b4611['value']=_0x5dfecc[_0x4c6573(0x1bb)],_0x4b4611[_0x4c6573(0x190)]=_0x5dfecc[_0x4c6573(0x176)],formaPagamento[_0x4c6573(0x1c7)](_0x4b4611);}}else{if(_0x266ac7[_0x4c6573(0x1d3)]==0x191){}}HideOverlay();});},atualizaPreco=()=>{const _0x56cfb4=a0_0xba376c;let _0x27c7c8=0x0,_0x433236=produto[_0x56cfb4(0x1e2)](_0x56cfb4(0x181)),_0xb8f313=tabelaPreco[_0x56cfb4(0x188)](_0x16204b=>_0x16204b[_0x56cfb4(0x1c3)]===_0x433236);_0xb8f313!=null&&_0xb8f313!=_0x56cfb4(0x1c2)&&(_0x27c7c8=_0xb8f313[_0x56cfb4(0x17b)]),valorProduto[_0x56cfb4(0x1d9)]=_0x27c7c8;};produto[a0_0xba376c(0x1b3)]('focusout',_0x13afec=>{atualizaPreco();}),inputCgc[a0_0xba376c(0x1b3)]('focusout',_0x2ad39c=>{const _0x5c70f5=a0_0xba376c;inputCgc[_0x5c70f5(0x1d9)]=inputCgc[_0x5c70f5(0x1d9)][_0x5c70f5(0x19a)](/\D/g,'');if(inputCgc[_0x5c70f5(0x1d9)][_0x5c70f5(0x192)]()[_0x5c70f5(0x1af)]<0xb)return;if(!validaCNPJ(inputCgc[_0x5c70f5(0x1d9)][_0x5c70f5(0x192)]())&&!validaCPF(inputCgc[_0x5c70f5(0x1d9)][_0x5c70f5(0x192)]())){errorAlert(_0x5c70f5(0x193),'CPF\x20ou\x20CNPJ\x20inválido!'),document[_0x5c70f5(0x1ce)]('form-cliente')[_0x5c70f5(0x1b9)]();return;}let _0x2a5a40={'area':_0x5c70f5(0x177),'fields':[_0x5c70f5(0x1bb),'NOME',_0x5c70f5(0x16b),_0x5c70f5(0x148),'BAIRRO',_0x5c70f5(0x186),'MUNICIPIO',_0x5c70f5(0x1a9),_0x5c70f5(0x187),_0x5c70f5(0x15f)],'search':[{'field':_0x5c70f5(0x19f),'operation':_0x5c70f5(0x1d6),'value':inputCgc['value']}]};return ShowOverlay(),search(_0x2a5a40)['then'](async _0x4d0945=>{const _0x3a47bc=_0x5c70f5;HideOverlay();if(_0x4d0945['ok']){let _0x1a68ba=await _0x4d0945['json']();if(_0x1a68ba['success']){let _0x176ce1=_0x1a68ba[_0x3a47bc(0x1ab)];if(_0x176ce1[_0x3a47bc(0x1af)]>0x0){_0x176ce1=_0x176ce1[0x0];if(dadosUsuario['CODIGO']!=_0x3a47bc(0x147)&&_0x176ce1['VENDED']!=dadosUsuario[_0x3a47bc(0x1bb)]){errorAlert(_0x3a47bc(0x193),_0x3a47bc(0x1c0)),document['getElementById'](_0x3a47bc(0x1da))[_0x3a47bc(0x1b9)]();return;}clienteAtual=_0x176ce1,document['querySelector'](_0x3a47bc(0x151))[_0x3a47bc(0x1d9)]=_0x176ce1[_0x3a47bc(0x1bb)],document[_0x3a47bc(0x1e9)](_0x3a47bc(0x16a))[_0x3a47bc(0x1d9)]=_0x176ce1[_0x3a47bc(0x159)],document['querySelector'](_0x3a47bc(0x1ef))[_0x3a47bc(0x1d9)]=_0x176ce1[_0x3a47bc(0x16b)],document[_0x3a47bc(0x1e9)](_0x3a47bc(0x19e))[_0x3a47bc(0x1d9)]=_0x176ce1[_0x3a47bc(0x148)],document[_0x3a47bc(0x1e9)](_0x3a47bc(0x14e))[_0x3a47bc(0x1d9)]=_0x176ce1[_0x3a47bc(0x1b5)],document[_0x3a47bc(0x1e9)](_0x3a47bc(0x164))[_0x3a47bc(0x1d9)]=_0x176ce1[_0x3a47bc(0x186)],document[_0x3a47bc(0x1e9)](_0x3a47bc(0x15b))[_0x3a47bc(0x1d9)]=_0x176ce1[_0x3a47bc(0x178)],document[_0x3a47bc(0x1e9)](_0x3a47bc(0x1cc))['value']=_0x176ce1[_0x3a47bc(0x1a9)],buscaTabela(_0x176ce1[_0x3a47bc(0x187)]);return;}}$[_0x3a47bc(0x174)]({'title':'Erro!','content':_0x3a47bc(0x1de),'type':_0x3a47bc(0x155),'typeAnimated':!![],'buttons':{'success':{'text':_0x3a47bc(0x167),'btnClass':'btn-red','action':function(){const _0xfe882c=_0x3a47bc;inputCgc[_0xfe882c(0x1d9)]='',document[_0xfe882c(0x1e9)](_0xfe882c(0x17f))[_0xfe882c(0x1d4)]=![];}},'register':{'text':_0x3a47bc(0x14d),'btnClass':_0x3a47bc(0x1e1),'action':()=>{const _0x54612f=_0x3a47bc;cadastro(),document[_0x54612f(0x1e9)](_0x54612f(0x17f))[_0x54612f(0x1d4)]=![];}}}});}else{if(_0x4d0945[_0x3a47bc(0x1d3)]==0x191){}}}),document[_0x5c70f5(0x1e9)](_0x5c70f5(0x17f))[_0x5c70f5(0x1d4)]=!![],![];});const cadastro=async()=>{const _0x5e7620=a0_0xba376c;document[_0x5e7620(0x1e9)](_0x5e7620(0x16a))[_0x5e7620(0x1d4)]=![],document[_0x5e7620(0x1e9)](_0x5e7620(0x1ef))['disabled']=![],document[_0x5e7620(0x1e9)](_0x5e7620(0x19e))[_0x5e7620(0x1d4)]=![],document[_0x5e7620(0x1e9)]('#input-bairro')[_0x5e7620(0x1d4)]=![],document[_0x5e7620(0x1e9)](_0x5e7620(0x164))[_0x5e7620(0x1d4)]=![],document[_0x5e7620(0x1e9)]('#input-cidade')[_0x5e7620(0x1d4)]=![],document[_0x5e7620(0x1e9)](_0x5e7620(0x1cc))[_0x5e7620(0x1d4)]=![],novoCliente=!![],document['querySelector'](_0x5e7620(0x16a))[_0x5e7620(0x1ed)]();},cadastrar=async()=>{const _0x2e8234=a0_0xba376c;if(!validaCNPJ(inputCgc[_0x2e8234(0x1d9)][_0x2e8234(0x192)]())&&!validaCPF(inputCgc[_0x2e8234(0x1d9)][_0x2e8234(0x192)]())){errorAlert(_0x2e8234(0x193),_0x2e8234(0x17e));return;}let _0x44ade4='https://viacep.com.br/ws/'+document[_0x2e8234(0x1e9)](_0x2e8234(0x164))[_0x2e8234(0x1d9)]+'/json',_0x23c9e8={'method':_0x2e8234(0x1ba)},_0x25e933=await fetch(_0x44ade4,_0x23c9e8);dadosEndereco=null;_0x25e933['ok']&&(dadosEndereco=await _0x25e933[_0x2e8234(0x1a1)]());let _0x5e6c77=document[_0x2e8234(0x1e9)](_0x2e8234(0x16a))[_0x2e8234(0x1d9)]['toUpperCase'](),_0xe7d164=document[_0x2e8234(0x1e9)]('#input-endereco')[_0x2e8234(0x1d9)][_0x2e8234(0x1b2)](),_0x3c81f6=document[_0x2e8234(0x1e9)](_0x2e8234(0x19e))[_0x2e8234(0x1d9)]['toUpperCase'](),_0x496bf1=document[_0x2e8234(0x1e9)]('#input-bairro')[_0x2e8234(0x1d9)][_0x2e8234(0x1b2)](),_0x5ed0a7=document[_0x2e8234(0x1e9)](_0x2e8234(0x164))[_0x2e8234(0x1d9)][_0x2e8234(0x1b2)](),_0x34a72c=document[_0x2e8234(0x1e9)](_0x2e8234(0x15b))['value'][_0x2e8234(0x1b2)](),_0x2a9831=document[_0x2e8234(0x1e9)]('#input-telefone')[_0x2e8234(0x1d9)][_0x2e8234(0x1b2)](),_0x690a6d=dadosEndereco!=null?dadosEndereco['ibge']:'',_0x300b6d=ibgeRms[_0x2e8234(0x1d1)](_0x690a6d)?'1':'3',_0x40a2b3=[{'area':_0x2e8234(0x177),'data':[{'CODIGO':_0x2e8234(0x168),'CGC':inputCgc[_0x2e8234(0x1d9)],'PESSOA':inputCgc[_0x2e8234(0x1d9)][_0x2e8234(0x1af)]==0xe?'J':'F','CODPAIS':'1058','DATCAD':currentDate(),'NOME':_0x5e6c77,'ENDERECO':_0xe7d164,'NUMERO':_0x3c81f6,'BAIRRO':_0x496bf1,'CEP':_0x5ed0a7,'MUNICIPIO':_0x34a72c,'TELEFO':_0x2a9831,'VENDED':dadosUsuario[_0x2e8234(0x1bb)],'CODMUN':_0x690a6d,'ESTADO':dadosEndereco!=null?dadosEndereco['uf']:'','TABELA':_0x300b6d}],'RETURN_ID':'CODIGO'}],_0x57b69b=await insert(_0x40a2b3);if(_0x57b69b['ok']){let _0x387b75=await _0x57b69b[_0x2e8234(0x1a1)]();return _0x387b75[_0x2e8234(0x1ab)][0x0];}else return'';};document[a0_0xba376c(0x1e9)](a0_0xba376c(0x164))[a0_0xba376c(0x1b3)](a0_0xba376c(0x14b),async _0x1f26b3=>{const _0x3e8bce=a0_0xba376c;let _0x3b6b19=_0x1f26b3['target']['value']['replace'](/\D/g,'');if(_0x3b6b19[_0x3e8bce(0x192)]()[_0x3e8bce(0x1af)]!=0x8)return;ShowOverlay();let _0x479bfb=_0x3e8bce(0x161)+_0x3b6b19+_0x3e8bce(0x1b7),_0x558f08={'method':'get'},_0x3bf48d=await fetch(_0x479bfb,_0x558f08);dadosEndereco=null,_0x3bf48d['ok']?(dadosEndereco=await _0x3bf48d[_0x3e8bce(0x1a1)](),document[_0x3e8bce(0x1e9)]('#input-endereco')['value']=dadosEndereco[_0x3e8bce(0x1c5)][_0x3e8bce(0x1b2)](),document[_0x3e8bce(0x1e9)](_0x3e8bce(0x14e))['value']=dadosEndereco['bairro']['toUpperCase'](),document[_0x3e8bce(0x1e9)](_0x3e8bce(0x15b))[_0x3e8bce(0x1d9)]=dadosEndereco['localidade'][_0x3e8bce(0x1b2)](),HideOverlay(),document[_0x3e8bce(0x1e9)](_0x3e8bce(0x19e))['focus']()):HideOverlay();}),document['querySelector']('#teste-pdf')?.[a0_0xba376c(0x1b3)](a0_0xba376c(0x163),()=>{const _0x15c137=a0_0xba376c;var _0x224788=window[_0x15c137(0x1a2)][_0x15c137(0x175)]('body')[0x0];html2canvas(_0x224788)[_0x15c137(0x1f9)](_0x2d7ae3=>{const _0x263c50=_0x15c137;var _0x51bda6=_0x2d7ae3[_0x263c50(0x1a5)](_0x263c50(0x17d)),_0x5961a0=new jsPDF('p','mm','a4');_0x5961a0[_0x263c50(0x1ea)](_0x51bda6,_0x263c50(0x1aa),0x5,-0xa,0xc8,0xc8),_0x5961a0[_0x263c50(0x1eb)]('sample.pdf');});}),document[a0_0xba376c(0x1e9)](a0_0xba376c(0x1bd))[a0_0xba376c(0x1b3)](a0_0xba376c(0x163),async _0x1a1215=>{const _0x463f80=a0_0xba376c;_0x1a1215[_0x463f80(0x16d)]();let _0x577d19=document[_0x463f80(0x1e9)](_0x463f80(0x151)),_0x1d025b=document[_0x463f80(0x1e9)](_0x463f80(0x17f))[_0x463f80(0x1d9)],_0xe50b26=document[_0x463f80(0x1e9)]('input[name=tipo_pedido]:checked')[_0x463f80(0x1d9)],_0xee42a=document[_0x463f80(0x1e9)]('#observacao');if(_0x577d19[_0x463f80(0x1d9)]===''){novoCliente&&(_0x577d19[_0x463f80(0x1d9)]=await cadastrar());if(_0x577d19[_0x463f80(0x1d9)]===''){errorAlert('Erro',_0x463f80(0x166));return;}}if(_0x1d025b===''){errorAlert(_0x463f80(0x1a7),_0x463f80(0x1b4));return;}if(condicaoPagamento['value']===''){errorAlert('Erro',_0x463f80(0x1c4));return;}if(formaPagamento[_0x463f80(0x1d9)]===''){errorAlert('Erro',_0x463f80(0x165));return;}if(produtosPedido[_0x463f80(0x1af)]==0x0){errorAlert(_0x463f80(0x1a7),_0x463f80(0x189));return;}ShowOverlay();let _0x5013f6=[],_0x49ac7d=0x0;for(const _0x4e5426 of produtosPedido){_0x5013f6[_0x463f80(0x1e7)]({'ORDEM':(++_0x49ac7d)[_0x463f80(0x195)](),'PRODUTO':_0x4e5426[_0x463f80(0x169)],'QUANT':_0x4e5426[_0x463f80(0x158)][_0x463f80(0x195)](),'VALUNIT':_0x4e5426['preco'][_0x463f80(0x195)](),'TOTAL':(_0x4e5426[_0x463f80(0x1c6)]*_0x4e5426[_0x463f80(0x158)])[_0x463f80(0x195)](),'INTEGR':'5102.21','CFOP':'5102','ARMAZEM':'01'});}const _0x21e6d7=_0x5013f6[_0x463f80(0x1ec)]((_0x546fee,_0x13e6a5)=>{const _0x318164=_0x463f80;return _0x546fee+parseFloat(_0x13e6a5[_0x318164(0x1e0)]);},0x0),_0x10db8b=_0x5013f6[_0x463f80(0x1ec)]((_0x10c1b7,_0x32d11d)=>{return _0x10c1b7+parseFloat(_0x32d11d['QUANT']);},0x0);let _0x4ed0dc=[{'area':_0x463f80(0x194),'data':[{'CLIENTE':_0x577d19['value'],'VENDEDOR':dadosUsuario[_0x463f80(0x1bb)],'CONDICAO':condicaoPagamento[_0x463f80(0x1d9)],'FORMPG':formaPagamento['value'],'EMISSAO':currentDate(),'DATAINC':currentDate(),'TIPO':_0xe50b26,'STATUS':'B','FLAG':'A','FILIAL':_0x463f80(0x1cd),'TABELA':clienteAtual[_0x463f80(0x187)],'QTDTOT':_0x10db8b['toString'](),'VALOR':_0x21e6d7[_0x463f80(0x195)](),'VALBRUT':_0x21e6d7[_0x463f80(0x195)](),'VALMERC':_0x21e6d7[_0x463f80(0x195)](),'OBS_INT':_0x463f80(0x1fb)+_0x1d025b[_0x463f80(0x1b2)](),'OBSTXT':_0xee42a['value'],'ITEPDV':_0x5013f6}]}];insert(_0x4ed0dc)['then'](async _0x4f14d6=>{const _0x594bf4=_0x463f80;if(_0x4f14d6['ok']){let _0x175103=await _0x4f14d6[_0x594bf4(0x1a1)]();if(_0x175103[_0x594bf4(0x149)]){let _0x319bf7=_0x175103[_0x594bf4(0x1ab)][0x0];$['confirm']({'title':'Sucesso!','content':_0x594bf4(0x1a4)+_0x319bf7+_0x594bf4(0x18c),'type':_0x594bf4(0x183),'typeAnimated':!![],'buttons':{'success':{'text':'Ok','btnClass':'btn-green','action':function(){const _0x1a1f9a=_0x594bf4;document[_0x1a1f9a(0x18f)]['reload']();}}}}),sessionStorage[_0x594bf4(0x1a8)](_0x594bf4(0x191));}}else{let _0x239e73=await _0x4f14d6['text']();alert(_0x239e73);}HideOverlay();});;});function autocomplete(_0x10aaff,_0x533032){const _0x56ad57=a0_0xba376c;var _0x8ca1b3;_0x10aaff[_0x56ad57(0x1b3)](_0x56ad57(0x173),function(_0x68fbc4){const _0x41f48d=_0x56ad57;var _0x4cb246,_0x1f14e4,_0x4b68d3,_0xe6bcf6=this['value'];_0x2659d4();if(!_0xe6bcf6)return![];_0x8ca1b3=-0x1,_0x4cb246=document[_0x41f48d(0x157)]('DIV'),_0x4cb246[_0x41f48d(0x1f8)]('id',this['id']+'autocomplete-list'),_0x4cb246['setAttribute'](_0x41f48d(0x1b6),_0x41f48d(0x15c)),this[_0x41f48d(0x1d2)][_0x41f48d(0x1c7)](_0x4cb246);for(_0x4b68d3=0x0;_0x4b68d3<_0x533032[_0x41f48d(0x1af)];_0x4b68d3++){_0x533032[_0x4b68d3][_0x41f48d(0x176)]['toUpperCase']()[_0x41f48d(0x1d1)](_0xe6bcf6[_0x41f48d(0x1b2)]())&&(_0x1f14e4=document[_0x41f48d(0x157)]('DIV'),_0x1f14e4['setAttribute']('data-code',_0x533032[_0x4b68d3]['CODIGO']),_0x1f14e4[_0x41f48d(0x190)]=_0x533032[_0x4b68d3]['DESCRICAO']['toUpperCase']()[_0x41f48d(0x19a)](_0xe6bcf6[_0x41f48d(0x1b2)](),_0x41f48d(0x1f6)+_0xe6bcf6[_0x41f48d(0x1b2)]()+_0x41f48d(0x19b)),_0x1f14e4['innerHTML']+=_0x41f48d(0x1f4)+_0x533032[_0x4b68d3]['DESCRICAO']+'\x27>',_0x1f14e4[_0x41f48d(0x1b3)](_0x41f48d(0x163),function(_0x1cef5d){const _0x4ad582=_0x41f48d;_0x10aaff[_0x4ad582(0x1d9)]=this[_0x4ad582(0x175)](_0x4ad582(0x173))[0x0][_0x4ad582(0x1d9)],_0x10aaff[_0x4ad582(0x1f8)](_0x4ad582(0x181),this[_0x4ad582(0x1e2)]('data-code')),_0x2659d4(),atualizaPreco();}),_0x4cb246['appendChild'](_0x1f14e4));}}),_0x10aaff[_0x56ad57(0x1b3)](_0x56ad57(0x14b),function(_0x4db04a){const _0x1a90a2=_0x56ad57;var _0x903774=document[_0x1a90a2(0x1ce)](this['id']+_0x1a90a2(0x19c));if(_0x903774)_0x903774=_0x903774[_0x1a90a2(0x175)](_0x1a90a2(0x1d0));_0x4db04a['preventDefault']();if(_0x8ca1b3>-0x1){if(_0x903774)_0x903774[_0x8ca1b3][_0x1a90a2(0x163)]();}}),_0x10aaff['addEventListener'](_0x56ad57(0x1b1),function(_0x43b6ac){const _0x2a133e=_0x56ad57;var _0x1f2a1a=document['getElementById'](this['id']+_0x2a133e(0x19c));if(_0x1f2a1a)_0x1f2a1a=_0x1f2a1a[_0x2a133e(0x175)]('div');if(_0x43b6ac['keyCode']==0x28)_0x8ca1b3++,_0x4485a3(_0x1f2a1a);else{if(_0x43b6ac[_0x2a133e(0x1f1)]==0x26)_0x8ca1b3--,_0x4485a3(_0x1f2a1a);else{if(_0x43b6ac[_0x2a133e(0x1f1)]==0xd){_0x43b6ac['preventDefault']();if(_0x8ca1b3>-0x1){if(_0x1f2a1a)_0x1f2a1a[_0x8ca1b3][_0x2a133e(0x163)]();}}else{if(_0x43b6ac[_0x2a133e(0x1f1)]==0x9){if(_0x8ca1b3>-0x1){if(_0x1f2a1a)_0x1f2a1a[_0x8ca1b3][_0x2a133e(0x163)]();}}}}}});function _0x4485a3(_0xc0bd61){const _0x24deab=_0x56ad57;if(!_0xc0bd61)return![];_0x5b9a5e(_0xc0bd61);if(_0x8ca1b3>=_0xc0bd61[_0x24deab(0x1af)])_0x8ca1b3=0x0;if(_0x8ca1b3<0x0)_0x8ca1b3=_0xc0bd61[_0x24deab(0x1af)]-0x1;_0xc0bd61[_0x8ca1b3][_0x24deab(0x1f3)][_0x24deab(0x14a)](_0x24deab(0x179)),_0x10aaff[_0x24deab(0x1d9)]=_0xc0bd61[_0x8ca1b3][_0x24deab(0x1c9)]['value'];}function _0x5b9a5e(_0x28687a){const _0x47e995=_0x56ad57;for(var _0x18baf0=0x0;_0x18baf0<_0x28687a['length'];_0x18baf0++){_0x28687a[_0x18baf0]['classList'][_0x47e995(0x185)]('autocomplete-active');}}function _0x2659d4(_0x5ecf4f){const _0x97d691=_0x56ad57;var _0x29e710=document[_0x97d691(0x1ac)](_0x97d691(0x15c));for(var _0x1ea1c5=0x0;_0x1ea1c5<_0x29e710['length'];_0x1ea1c5++){_0x5ecf4f!=_0x29e710[_0x1ea1c5]&&_0x5ecf4f!=_0x10aaff&&_0x29e710[_0x1ea1c5][_0x97d691(0x1d2)][_0x97d691(0x1bf)](_0x29e710[_0x1ea1c5]);}}document[_0x56ad57(0x1b3)](_0x56ad57(0x163),function(_0x48164a){const _0x33431e=_0x56ad57;_0x2659d4(_0x48164a[_0x33431e(0x14f)]);});}function a0_0x8bd2(){const _0x468461=['nodeName','#input-condicao-pagamento','log','2906000','user_data','input','confirm','getElementsByTagName','DESCRICAO','CLIENT','MUNICIPIO','autocomplete-active','\x22\x20\x20type=\x22text\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-total\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22','PRECO','NOMVEN','image/jpeg','CPF\x20ou\x20CNPJ\x20inválido!','#input-vendedor','toLocalCurrency','data-code','#produtos-carrinho\x20tbody','green','<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22produto-carrinho\x22\x20data-code=\x22','remove','CEP','TABELA','find','Pedido\x20sem\x20itens','index.html','option','\x20salvo!','parentElement','\x22\x20\x20type=\x22text\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-total\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22','location','innerHTML','produtosPedido','trim','Erro!','CABPDV','toString','759444HZdyxK','setItem','#input-quantidade','GREATER_THAN','replace','</strong>','autocomplete-list','1468905PahhDR','#input-numero','CGC','7dVYiHh','json','document','CONDPG','Pedido\x20','toDataURL','keyup','Erro','removeItem','TELEFO','jpeg','data','getElementsByClassName','TEXT','max','length','2904756','keydown','toUpperCase','addEventListener','Informe\x20o\x20vendedor!','BAIRRO','class','/json','INPUT','reset','get','CODIGO','which','#finaliza-pedido-botao','2904905','removeChild','Cliente\x20faz\x20parte\x20da\x20carteira\x20de\x20outro\x20representante.\x0aPor\x20favor\x20LIGUE\x20para\x20a\x20central\x20para\x20autorizar\x20o\x20pedido.','4571088KIOgXH','undefined','PRODUTO','Informe\x20a\x20Condição\x20de\x20Pagamento','logradouro','preco','appendChild','getItem','lastElementChild','PRODUT','CHAVE','#input-telefone','0101','getElementById','333547CJsofm','div','includes','parentNode','status','disabled','\x22\x20data-id=\x22','EQUAL_TO','4713ZiNDIt','2905309','value','form-cliente','index','#adiciona-produto-botao','85496eIJLAg','Cliente\x20não\x20cadastrado!','produto','TOTAL','btn-green','getAttribute','#form-pedido','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22produto-carrinho\x22\x20data-code=\x22','624sNHfEO','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-quantidade\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22','push','2904707','querySelector','addImage','save','reduce','focus','srcElement','#input-endereco','#input-forma-pagamento','keyCode','forEach','classList','<input\x20type=\x27hidden\x27\x20value=\x27','href','<strong>','stringify','setAttribute','then','parse','VENDEDOR:\x20','000003','NUMERO','success','add','focusout','2906208','Cadastrar','#input-bairro','target','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','#input-codigo-cliente','FORMPG','\x22\x20\x20type=\x22number\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-preco\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22','839430GCDIWd','red','2905200','createElement','quantidade','NOME','DOMContentLoaded','#input-cidade','autocomplete-items','type','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto\x20nobr\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','VENDED','2906109','https://viacep.com.br/ws/','2904608','click','#input-cep','Informe\x20a\x20Forma\x20de\x20Pagamento','Informe\x20o\x20cliente!','Cancelar','SEQ','codigo','#input-nome','ENDERECO','event','preventDefault'];a0_0x8bd2=function(){return _0x468461;};return a0_0x8bd2();}buscaCondicoes(),buscaFormasPagamento(),document[a0_0xba376c(0x1b3)](a0_0xba376c(0x1a6),_0x40929b=>{const _0x871c2d=a0_0xba376c;_0x40929b[_0x871c2d(0x14f)][_0x871c2d(0x16e)]==_0x871c2d(0x1b8)&&_0x40929b[_0x871c2d(0x14f)][_0x871c2d(0x15d)][_0x871c2d(0x1b2)]()==_0x871c2d(0x1ad)&&(_0x40929b[_0x871c2d(0x14f)]['value']=_0x40929b[_0x871c2d(0x14f)][_0x871c2d(0x1d9)][_0x871c2d(0x1b2)]());}),produtosPedido[a0_0xba376c(0x1f2)](_0x39d2b5=>{const _0x342085=a0_0xba376c,_0x3a9768=_0x342085(0x1e4)+_0x39d2b5[_0x342085(0x169)]+'\x22\x20data-id=\x22'+_0x39d2b5[_0x342085(0x1db)]+_0x342085(0x150)+_0x39d2b5[_0x342085(0x1df)]+_0x342085(0x1e6)+_0x39d2b5[_0x342085(0x158)]+_0x342085(0x153)+parseFloat(_0x39d2b5['preco'])[_0x342085(0x180)]()+_0x342085(0x18e)+parseFloat(_0x39d2b5['quantidade']*(_0x39d2b5[_0x342085(0x1c6)]||0x0))[_0x342085(0x180)]()+'\x22\x20\x20type=\x22text\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-danger\x22\x20onclick=\x22removeItemClick(event)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20fa-trash\x22\x20aria-hidden=\x22true\x22\x20style=\x22pointer-events:\x20none;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20';tabelaProdutos[_0x342085(0x190)]+=_0x3a9768;}),document[a0_0xba376c(0x1b3)](a0_0xba376c(0x15a),onContentLoaded),validaToken();function isNumber(_0x4cfa65){const _0x4e2838=a0_0xba376c;_0x4cfa65=_0x4cfa65?_0x4cfa65:window[_0x4e2838(0x16c)];var _0x4ae5dd=_0x4cfa65[_0x4e2838(0x1bc)]?_0x4cfa65['which']:_0x4cfa65[_0x4e2838(0x1f1)];console[_0x4e2838(0x170)](_0x4ae5dd);if(_0x4ae5dd==0x2c)return!![];if(_0x4ae5dd>0x1f&&(_0x4ae5dd<0x30||_0x4ae5dd>0x39))return![];return!![];}