const a0_0x3045f6=a0_0x4beb;(function(_0x4867fc,_0x12abf8){const _0x50ad84=a0_0x4beb,_0x486ae1=_0x4867fc();while(!![]){try{const _0x15f260=-parseInt(_0x50ad84(0x1af))/0x1*(parseInt(_0x50ad84(0x19c))/0x2)+-parseInt(_0x50ad84(0x1bb))/0x3+parseInt(_0x50ad84(0x180))/0x4+parseInt(_0x50ad84(0x1c7))/0x5+parseInt(_0x50ad84(0x148))/0x6+-parseInt(_0x50ad84(0x1e6))/0x7*(-parseInt(_0x50ad84(0x1a3))/0x8)+-parseInt(_0x50ad84(0x1ae))/0x9;if(_0x15f260===_0x12abf8)break;else _0x486ae1['push'](_0x486ae1['shift']());}catch(_0x4377c7){_0x486ae1['push'](_0x486ae1['shift']());}}}(a0_0x21ed,0x49733));var novoCliente=![],dadosEndereco=null,tabelaPreco=[],produtosArray=[],clienteAtual=null;const form=document[a0_0x3045f6(0x17f)](a0_0x3045f6(0x18d)),inputCgc=document[a0_0x3045f6(0x17f)](a0_0x3045f6(0x187)),quantidade=document[a0_0x3045f6(0x17f)](a0_0x3045f6(0x1b5)),condicaoPagamento=document[a0_0x3045f6(0x17f)](a0_0x3045f6(0x17b)),formaPagamento=document[a0_0x3045f6(0x17f)](a0_0x3045f6(0x14f)),produto=document['querySelector']('#input-produto'),valorProduto=document[a0_0x3045f6(0x17f)]('#input-valor'),totalPedido=document[a0_0x3045f6(0x17f)](a0_0x3045f6(0x166)),dadosUsuario=JSON[a0_0x3045f6(0x1d1)](sessionStorage[a0_0x3045f6(0x161)](a0_0x3045f6(0x1cc)));let produtosPedido=JSON[a0_0x3045f6(0x1d1)](sessionStorage[a0_0x3045f6(0x161)](a0_0x3045f6(0x18a)))||[],tabelaProdutos=document['querySelector'](a0_0x3045f6(0x1e1));document[a0_0x3045f6(0x17f)](a0_0x3045f6(0x1e5))[a0_0x3045f6(0x179)]('click',_0x485bd2=>{const _0x429ac7=a0_0x3045f6;_0x485bd2['preventDefault']();let _0x1d0854=produto['getAttribute']('data-code'),_0x188b0d=parseFloat(valorProduto[_0x429ac7(0x196)][_0x429ac7(0x1ac)](',','.')),_0x3495d5=Math[_0x429ac7(0x170)](...produtosPedido['map'](_0x4d5256=>_0x4d5256['index']));if(_0x3495d5==null||isNaN(_0x3495d5)||!isFinite(_0x3495d5))_0x3495d5=0x0;_0x3495d5++;const _0x365a33=_0x429ac7(0x174)+_0x1d0854+_0x429ac7(0x1a5)+_0x3495d5+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto\x20nobr\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+produto[_0x429ac7(0x196)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-quantidade\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22'+quantidade[_0x429ac7(0x196)]+'\x22\x20\x20type=\x22number\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-preco\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22'+_0x188b0d[_0x429ac7(0x144)]()+_0x429ac7(0x1df)+parseFloat(quantidade[_0x429ac7(0x196)]*_0x188b0d)[_0x429ac7(0x144)]()+'\x22\x20\x20type=\x22text\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-danger\x22\x20onclick=\x22removeItemClick(event)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20fa-trash\x22\x20aria-hidden=\x22true\x22\x20style=\x22pointer-events:\x20none;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tbody>';tabelaProdutos[_0x429ac7(0x17d)]+=_0x365a33,produtosPedido[_0x429ac7(0x18e)]({'index':_0x3495d5,'codigo':_0x1d0854,'produto':produto[_0x429ac7(0x196)],'quantidade':parseFloat(quantidade[_0x429ac7(0x196)]),'preco':_0x188b0d}),sessionStorage[_0x429ac7(0x158)](_0x429ac7(0x18a),JSON[_0x429ac7(0x194)](produtosPedido)),atualizaTotal(),form['reset'](),produto[_0x429ac7(0x1c6)]();});const removeItemClick=_0x20f653=>{const _0x12ddf4=a0_0x3045f6;_0x20f653[_0x12ddf4(0x14b)]();var _0x42cd23=_0x20f653['target']||_0x20f653[_0x12ddf4(0x199)];let _0x4d25fb=_0x42cd23[_0x12ddf4(0x1bd)][_0x12ddf4(0x1bd)][_0x12ddf4(0x16e)](_0x12ddf4(0x1bc));removeItem(parseInt(_0x4d25fb),_0x42cd23[_0x12ddf4(0x1bd)][_0x12ddf4(0x1bd)]);};function a0_0x21ed(){const _0x3966e7=['\x22\x20\x20type=\x22text\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-danger\x22\x20onclick=\x22removeItemClick(event)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20fa-trash\x22\x20aria-hidden=\x22true\x22\x20style=\x22pointer-events:\x20none;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20','5102.21','success','getItem','Cliente\x20não\x20cadastrado!','find','EQUAL_TO','appendChild','#total-pedido','STATUS','\x20salvo!','DOMContentLoaded','QUANT','logradouro','getElementById','keyup','getAttribute','#input-endereco','max','Cliente\x20faz\x20parte\x20da\x20carteira\x20de\x20outro\x20representante.','Cadastrar','#input-vendedor','<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22produto-carrinho\x22\x20data-code=\x22','BAIRRO','addImage','DIV','event','addEventListener','INPUT','#input-condicao-pagamento','then','innerHTML','status','querySelector','264104tLaRnH','Cancelar','PRECO','#input-cidade','filter','#input-numero','undefined','#input-cgc','nodeName','removeItem','produtosPedido','click','<input\x20type=\x27hidden\x27\x20value=\x27','#form-pedido','push','Erro','localidade','codigo','keyCode','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-quantidade\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22','stringify','Informe\x20a\x20Forma\x20de\x20Pagamento','value','#input-bairro','image/jpeg','srcElement','#input-codigo-cliente','text','2OoVrka','toString','input','disabled','reduce','document','json','56akkbDy','ITETAB','\x22\x20data-id=\x22','PRODUT','PRODUTO','data','Erro!','CGC','btn-green','replace','TEXT','3765114NAIqqO','31100oGNFqd','length','#input-telefone','/json','clear','which','#input-quantidade','remove','get','parentNode','index','CPF\x20ou\x20CNPJ\x20inválido!','647742mWlQmr','data-id','parentElement','VENDED','CABPDV','trim','div','quantidade','option','form-cliente','reload','focus','1630995AwAanN','produto','setAttribute','DESCRICAO','index.html','user_data','autocomplete-active','</strong>','0101','includes','parse','log','#input-nome','getElementsByTagName','Informe\x20a\x20Condição\x20de\x20Pagamento','Informe\x20o\x20vendedor!','ibge','CODIGO','getElementsByClassName','autocomplete-items','Pedido\x20sem\x20itens','confirm','type','GREATER_THAN','\x22\x20\x20type=\x22text\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-total\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22','CEP','#produtos-carrinho\x20tbody','#input-cep','createElement','1058','#adiciona-produto-botao','206759lDziBJ','#teste-pdf','preco','location','NOME','focusout','save','href','reset','toLocalCurrency','CONDPG','<strong>','\x22\x20\x20type=\x22number\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-preco\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22','2203362UMMEtu','lastElementChild','target','preventDefault','TELEFO','TABELA','MUNICIPIO','#input-forma-pagamento','CHAVE','removeChild','add','forEach','Sucesso!','toUpperCase','data-code','CLIENT','setItem','TOTAL','classList','NOMVEN','autocomplete-list','Pedido\x20'];a0_0x21ed=function(){return _0x3966e7;};return a0_0x21ed();}function removeItem(_0xfd1ebd,_0x5d850c){const _0x493f91=a0_0x3045f6;produtosPedido=produtosPedido[_0x493f91(0x184)](_0x5691e7=>_0x5691e7[_0x493f91(0x1b9)]!==_0xfd1ebd),sessionStorage[_0x493f91(0x158)](_0x493f91(0x18a),JSON['stringify'](produtosPedido)),_0x5d850c[_0x493f91(0x1b6)](),atualizaTotal();}const atualizaTotal=()=>{const _0x4d624b=a0_0x3045f6;let _0x27d9ef=produtosPedido[_0x4d624b(0x1a0)]((_0x5dede9,_0xdcbd8f)=>{return _0x5dede9+_0xdcbd8f['quantidade']*_0xdcbd8f['preco'];},0x0);totalPedido['innerHTML']=_0x27d9ef[_0x4d624b(0x144)]();},onContentLoaded=_0x5e7c7e=>{const _0x1736d4=a0_0x3045f6;document[_0x1736d4(0x17f)](_0x1736d4(0x173))[_0x1736d4(0x196)]=dadosUsuario[_0x1736d4(0x15b)];let _0x200fd1={'area':_0x1736d4(0x1a6),'fields':[_0x1736d4(0x1d8),'DESCRICAO'],'search':[{'field':_0x1736d4(0x167),'operation':_0x1736d4(0x164),'value':'A'}]};search(_0x200fd1)[_0x1736d4(0x17c)](async _0xf7ef58=>{const _0x1479f6=_0x1736d4;if(_0xf7ef58['ok']){json=await _0xf7ef58['json']();let _0x12764a=json['data'];autocomplete(produto,_0x12764a);}else _0xf7ef58[_0x1479f6(0x17e)]==0x191&&(sessionStorage[_0x1479f6(0x1b3)](),window[_0x1479f6(0x13e)][_0x1479f6(0x142)]=_0x1479f6(0x1cb));});},buscaTabela=_0xa16923=>{const _0x582dd2=a0_0x3045f6;let _0x3c10b2={'area':_0x582dd2(0x1a4),'fields':[_0x582dd2(0x1a7),_0x582dd2(0x182)],'search':[{'field':_0x582dd2(0x150),'operation':'EQUAL_TO','value':_0xa16923}]};ShowOverlay(),search(_0x3c10b2)[_0x582dd2(0x17c)](async _0xdbdb63=>{const _0x3d0907=_0x582dd2;if(_0xdbdb63['ok']){let _0x2234ae=await _0xdbdb63[_0x3d0907(0x1a2)]();tabelaPreco=_0x2234ae[_0x3d0907(0x1a8)];}else{if(_0xdbdb63['status']==0x191){}}HideOverlay();});},buscaCondicoes=()=>{const _0x32b9b4=a0_0x3045f6;let _0x38ba71={'area':_0x32b9b4(0x145),'fields':[_0x32b9b4(0x1d8),_0x32b9b4(0x1ca)],'search':[{'field':_0x32b9b4(0x1d8),'operation':_0x32b9b4(0x1de),'value':''}]};ShowOverlay(),search(_0x38ba71)[_0x32b9b4(0x17c)](async _0x53fc68=>{const _0x44b50c=_0x32b9b4;if(_0x53fc68['ok']){let _0x1698ac=await _0x53fc68[_0x44b50c(0x1a2)]();if(_0x1698ac[_0x44b50c(0x160)])for(const _0x52195c of _0x1698ac[_0x44b50c(0x1a8)]){let _0x3509e7=document[_0x44b50c(0x1e3)](_0x44b50c(0x1c3));_0x3509e7['value']=_0x52195c['CODIGO'],_0x3509e7[_0x44b50c(0x17d)]=_0x52195c[_0x44b50c(0x1ca)],condicaoPagamento[_0x44b50c(0x165)](_0x3509e7);}}else{if(_0x53fc68[_0x44b50c(0x17e)]==0x191){}}HideOverlay();});},buscaFormasPagamento=()=>{const _0x3570d0=a0_0x3045f6;let _0x5c5030={'area':'FORMPG','fields':[_0x3570d0(0x1d8),_0x3570d0(0x1ca)],'search':[{'field':'CODIGO','operation':_0x3570d0(0x1de),'value':''}]};ShowOverlay(),search(_0x5c5030)[_0x3570d0(0x17c)](async _0x254e20=>{const _0x31f7a9=_0x3570d0;if(_0x254e20['ok']){let _0x1169f9=await _0x254e20[_0x31f7a9(0x1a2)]();if(_0x1169f9[_0x31f7a9(0x160)])for(const _0xe358a8 of _0x1169f9[_0x31f7a9(0x1a8)]){let _0x30f3b4=document[_0x31f7a9(0x1e3)]('option');_0x30f3b4[_0x31f7a9(0x196)]=_0xe358a8[_0x31f7a9(0x1d8)],_0x30f3b4[_0x31f7a9(0x17d)]=_0xe358a8[_0x31f7a9(0x1ca)],formaPagamento['appendChild'](_0x30f3b4);}}else{if(_0x254e20[_0x31f7a9(0x17e)]==0x191){}}HideOverlay();});},atualizaPreco=()=>{const _0x2910d0=a0_0x3045f6;let _0x1cc530=0x0,_0x2eef39=produto[_0x2910d0(0x16e)]('data-code'),_0x3393a0=tabelaPreco[_0x2910d0(0x163)](_0x372cee=>_0x372cee[_0x2910d0(0x1a7)]===_0x2eef39);_0x3393a0!=null&&_0x3393a0!=_0x2910d0(0x186)&&(_0x1cc530=_0x3393a0[_0x2910d0(0x182)]),valorProduto[_0x2910d0(0x196)]=_0x1cc530;};produto[a0_0x3045f6(0x179)](a0_0x3045f6(0x140),_0x25ed88=>{atualizaPreco();}),inputCgc[a0_0x3045f6(0x179)](a0_0x3045f6(0x140),_0x30786e=>{const _0x4c2ccf=a0_0x3045f6;inputCgc[_0x4c2ccf(0x196)]=inputCgc[_0x4c2ccf(0x196)]['replace'](/\D/g,'');if(inputCgc[_0x4c2ccf(0x196)]['trim']()['length']<0xb)return;if(!validaCNPJ(inputCgc[_0x4c2ccf(0x196)]['trim']())&&!validaCPF(inputCgc['value'][_0x4c2ccf(0x1c0)]())){errorAlert(_0x4c2ccf(0x1a9),_0x4c2ccf(0x1ba)),document[_0x4c2ccf(0x16c)](_0x4c2ccf(0x1c4))[_0x4c2ccf(0x143)]();return;}let _0x3b320a={'area':_0x4c2ccf(0x157),'fields':['CODIGO',_0x4c2ccf(0x13f),'ENDERECO','NUMERO',_0x4c2ccf(0x175),'CEP',_0x4c2ccf(0x14e),_0x4c2ccf(0x14c),_0x4c2ccf(0x14d),_0x4c2ccf(0x1be)],'search':[{'field':_0x4c2ccf(0x1aa),'operation':_0x4c2ccf(0x164),'value':inputCgc[_0x4c2ccf(0x196)]}]};return ShowOverlay(),search(_0x3b320a)['then'](async _0x2520fb=>{const _0x128835=_0x4c2ccf;HideOverlay();if(_0x2520fb['ok']){let _0x21741d=await _0x2520fb['json']();if(_0x21741d['success']){let _0x18566a=_0x21741d[_0x128835(0x1a8)];if(_0x18566a[_0x128835(0x1b0)]>0x0){_0x18566a=_0x18566a[0x0];if(_0x18566a[_0x128835(0x1be)]!=dadosUsuario['CODIGO']){errorAlert(_0x128835(0x1a9),_0x128835(0x171)),document[_0x128835(0x16c)](_0x128835(0x1c4))['reset']();return;}clienteAtual=_0x18566a,document['querySelector'](_0x128835(0x19a))[_0x128835(0x196)]=_0x18566a[_0x128835(0x1d8)],document[_0x128835(0x17f)](_0x128835(0x1d3))['value']=_0x18566a[_0x128835(0x13f)],document[_0x128835(0x17f)](_0x128835(0x16f))[_0x128835(0x196)]=_0x18566a['ENDERECO'],document[_0x128835(0x17f)]('#input-numero')[_0x128835(0x196)]=_0x18566a['NUMERO'],document[_0x128835(0x17f)](_0x128835(0x197))['value']=_0x18566a[_0x128835(0x175)],document[_0x128835(0x17f)]('#input-cep')[_0x128835(0x196)]=_0x18566a[_0x128835(0x1e0)],document['querySelector']('#input-cidade')[_0x128835(0x196)]=_0x18566a[_0x128835(0x14e)],document[_0x128835(0x17f)](_0x128835(0x1b1))[_0x128835(0x196)]=_0x18566a[_0x128835(0x14c)],buscaTabela(_0x18566a[_0x128835(0x14d)]);return;}}$[_0x128835(0x1dc)]({'title':_0x128835(0x1a9),'content':_0x128835(0x162),'type':'red','typeAnimated':!![],'buttons':{'success':{'text':_0x128835(0x181),'btnClass':'btn-red','action':function(){const _0x284690=_0x128835;inputCgc[_0x284690(0x196)]='',document[_0x284690(0x17f)](_0x284690(0x173))[_0x284690(0x19f)]=![];}},'register':{'text':_0x128835(0x172),'btnClass':_0x128835(0x1ab),'action':()=>{const _0x8367fd=_0x128835;cadastro(),document[_0x8367fd(0x17f)](_0x8367fd(0x173))[_0x8367fd(0x19f)]=![];}}}});}else{if(_0x2520fb[_0x128835(0x17e)]==0x191){}}}),document[_0x4c2ccf(0x17f)](_0x4c2ccf(0x173))[_0x4c2ccf(0x19f)]=!![],![];});const cadastro=async()=>{const _0x49e278=a0_0x3045f6;document[_0x49e278(0x17f)]('#input-nome')[_0x49e278(0x19f)]=![],document[_0x49e278(0x17f)](_0x49e278(0x16f))[_0x49e278(0x19f)]=![],document['querySelector'](_0x49e278(0x185))[_0x49e278(0x19f)]=![],document[_0x49e278(0x17f)](_0x49e278(0x197))['disabled']=![],document['querySelector'](_0x49e278(0x1e2))[_0x49e278(0x19f)]=![],document[_0x49e278(0x17f)](_0x49e278(0x183))[_0x49e278(0x19f)]=![],document[_0x49e278(0x17f)]('#input-telefone')[_0x49e278(0x19f)]=![],novoCliente=!![],document[_0x49e278(0x17f)](_0x49e278(0x1d3))['focus']();},cadastrar=async()=>{const _0x59fbbb=a0_0x3045f6;if(!validaCNPJ(inputCgc['value'][_0x59fbbb(0x1c0)]())&&!validaCPF(inputCgc['value'][_0x59fbbb(0x1c0)]())){errorAlert('Erro!',_0x59fbbb(0x1ba));return;}let _0x3bbeb9='https://viacep.com.br/ws/'+document[_0x59fbbb(0x17f)](_0x59fbbb(0x1e2))[_0x59fbbb(0x196)]+_0x59fbbb(0x1b2),_0x4039ff={'method':_0x59fbbb(0x1b7)},_0xe71232=await fetch(_0x3bbeb9,_0x4039ff);dadosEndereco=null;_0xe71232['ok']&&(dadosEndereco=await _0xe71232[_0x59fbbb(0x1a2)]());let _0x3255d0=document['querySelector']('#input-nome')[_0x59fbbb(0x196)][_0x59fbbb(0x155)](),_0x1eed90=document[_0x59fbbb(0x17f)](_0x59fbbb(0x16f))[_0x59fbbb(0x196)][_0x59fbbb(0x155)](),_0x48ba11=document['querySelector']('#input-numero')[_0x59fbbb(0x196)][_0x59fbbb(0x155)](),_0x3c46ae=document['querySelector'](_0x59fbbb(0x197))[_0x59fbbb(0x196)][_0x59fbbb(0x155)](),_0x392210=document[_0x59fbbb(0x17f)](_0x59fbbb(0x1e2))['value'][_0x59fbbb(0x155)](),_0x3a729b=document[_0x59fbbb(0x17f)](_0x59fbbb(0x183))['value'][_0x59fbbb(0x155)](),_0x20ab54=document['querySelector'](_0x59fbbb(0x1b1))[_0x59fbbb(0x196)]['toUpperCase'](),_0x27c949=[{'area':'CLIENT','data':[{'CODIGO':'SEQ','CGC':inputCgc[_0x59fbbb(0x196)],'PESSOA':inputCgc[_0x59fbbb(0x196)][_0x59fbbb(0x1b0)]==0xe?'J':'F','CODPAIS':_0x59fbbb(0x1e4),'DATCAD':currentDate(),'NOME':_0x3255d0,'ENDERECO':_0x1eed90,'NUMERO':_0x48ba11,'BAIRRO':_0x3c46ae,'CEP':_0x392210,'MUNICIPIO':_0x3a729b,'TELEFO':_0x20ab54,'VENDED':dadosUsuario['CODIGO'],'CODMUN':dadosEndereco!=null?dadosEndereco[_0x59fbbb(0x1d7)]:'','ESTADO':dadosEndereco!=null?dadosEndereco['uf']:''}],'RETURN_ID':_0x59fbbb(0x1d8)}],_0x107fb6=await insert(_0x27c949);if(_0x107fb6['ok']){let _0x1d5026=await _0x107fb6['json']();return _0x1d5026[_0x59fbbb(0x1a8)][0x0];}else return'';};function a0_0x4beb(_0x790129,_0x672f6b){const _0x21ed05=a0_0x21ed();return a0_0x4beb=function(_0x4beb6a,_0x527483){_0x4beb6a=_0x4beb6a-0x13c;let _0x4bb11d=_0x21ed05[_0x4beb6a];return _0x4bb11d;},a0_0x4beb(_0x790129,_0x672f6b);}document['querySelector']('#input-cep')[a0_0x3045f6(0x179)]('focusout',async _0x2ac7f8=>{const _0x4b24d0=a0_0x3045f6;let _0x15a2a3=_0x2ac7f8['target'][_0x4b24d0(0x196)][_0x4b24d0(0x1ac)](/\D/g,'');if(_0x15a2a3['trim']()[_0x4b24d0(0x1b0)]!=0x8)return;ShowOverlay();let _0x487c40='https://viacep.com.br/ws/'+_0x15a2a3+'/json',_0x43f290={'method':'get'},_0x539ba8=await fetch(_0x487c40,_0x43f290);dadosEndereco=null,_0x539ba8['ok']?(dadosEndereco=await _0x539ba8[_0x4b24d0(0x1a2)](),document['querySelector'](_0x4b24d0(0x16f))[_0x4b24d0(0x196)]=dadosEndereco[_0x4b24d0(0x16b)]['toUpperCase'](),document[_0x4b24d0(0x17f)](_0x4b24d0(0x197))[_0x4b24d0(0x196)]=dadosEndereco['bairro'][_0x4b24d0(0x155)](),document[_0x4b24d0(0x17f)](_0x4b24d0(0x183))[_0x4b24d0(0x196)]=dadosEndereco[_0x4b24d0(0x190)][_0x4b24d0(0x155)](),HideOverlay(),document['querySelector']('#input-numero')[_0x4b24d0(0x1c6)]()):HideOverlay();}),document[a0_0x3045f6(0x17f)](a0_0x3045f6(0x13c))?.[a0_0x3045f6(0x179)](a0_0x3045f6(0x18b),()=>{const _0x5e74a5=a0_0x3045f6;var _0x5a8621=window[_0x5e74a5(0x1a1)][_0x5e74a5(0x1d4)]('body')[0x0];html2canvas(_0x5a8621)[_0x5e74a5(0x17c)](_0x158643=>{const _0x4e579f=_0x5e74a5;var _0x30c189=_0x158643['toDataURL'](_0x4e579f(0x198)),_0x5676d4=new jsPDF('p','mm','a4');_0x5676d4[_0x4e579f(0x176)](_0x30c189,'jpeg',0x5,-0xa,0xc8,0xc8),_0x5676d4[_0x4e579f(0x141)]('sample.pdf');});}),document[a0_0x3045f6(0x17f)]('#finaliza-pedido-botao')[a0_0x3045f6(0x179)](a0_0x3045f6(0x18b),async _0x34c74c=>{const _0x350caa=a0_0x3045f6;_0x34c74c[_0x350caa(0x14b)]();let _0x11a7d8=document['querySelector'](_0x350caa(0x19a)),_0x4b27cb=document[_0x350caa(0x17f)](_0x350caa(0x173))[_0x350caa(0x196)],_0x482d2b=document[_0x350caa(0x17f)]('input[name=tipo_pedido]:checked')['value'],_0x1fc088=document[_0x350caa(0x17f)]('#observacao');if(_0x11a7d8[_0x350caa(0x196)]===''){novoCliente&&(_0x11a7d8[_0x350caa(0x196)]=await cadastrar());if(_0x11a7d8[_0x350caa(0x196)]===''){errorAlert(_0x350caa(0x18f),'Informe\x20o\x20cliente!');return;}}if(_0x4b27cb===''){errorAlert('Erro',_0x350caa(0x1d6));return;}if(condicaoPagamento[_0x350caa(0x196)]===''){errorAlert(_0x350caa(0x18f),_0x350caa(0x1d5));return;}if(formaPagamento[_0x350caa(0x196)]===''){errorAlert('Erro',_0x350caa(0x195));return;}if(produtosPedido[_0x350caa(0x1b0)]==0x0){errorAlert('Erro',_0x350caa(0x1db));return;}ShowOverlay();let _0x3e034b=[],_0xa4c1d0=0x0;for(const _0x247ee2 of produtosPedido){_0x3e034b[_0x350caa(0x18e)]({'ORDEM':(++_0xa4c1d0)[_0x350caa(0x19d)](),'PRODUTO':_0x247ee2['codigo'],'QUANT':_0x247ee2[_0x350caa(0x1c2)][_0x350caa(0x19d)](),'VALUNIT':_0x247ee2[_0x350caa(0x13d)][_0x350caa(0x19d)](),'TOTAL':(_0x247ee2[_0x350caa(0x13d)]*_0x247ee2[_0x350caa(0x1c2)])[_0x350caa(0x19d)](),'INTEGR':_0x350caa(0x15f),'CFOP':'5102','ARMAZEM':'01'});}const _0x471a5b=_0x3e034b['reduce']((_0x3dd99c,_0x1acf61)=>{const _0xaabc7=_0x350caa;return _0x3dd99c+parseFloat(_0x1acf61[_0xaabc7(0x159)]);},0x0),_0x27e1c2=_0x3e034b[_0x350caa(0x1a0)]((_0x1b9db3,_0x4ed5a4)=>{const _0x1de97a=_0x350caa;return _0x1b9db3+parseFloat(_0x4ed5a4[_0x1de97a(0x16a)]);},0x0);let _0x5a18ec=[{'area':_0x350caa(0x1bf),'data':[{'CLIENTE':_0x11a7d8[_0x350caa(0x196)],'VENDEDOR':dadosUsuario['CODIGO'],'CONDICAO':condicaoPagamento['value'],'FORMPG':formaPagamento[_0x350caa(0x196)],'EMISSAO':currentDate(),'DATAINC':currentDate(),'TIPO':_0x482d2b,'STATUS':'B','FLAG':'A','FILIAL':_0x350caa(0x1cf),'TABELA':'1','QTDTOT':_0x27e1c2[_0x350caa(0x19d)](),'VALOR':_0x471a5b[_0x350caa(0x19d)](),'VALBRUT':_0x471a5b[_0x350caa(0x19d)](),'VALMERC':_0x471a5b[_0x350caa(0x19d)](),'OBS_INT':'VENDEDOR:\x20'+_0x4b27cb[_0x350caa(0x155)](),'OBSTXT':_0x1fc088[_0x350caa(0x196)],'ITEPDV':_0x3e034b}]}];insert(_0x5a18ec)[_0x350caa(0x17c)](async _0x1109dd=>{const _0x5b1df8=_0x350caa;if(_0x1109dd['ok']){let _0x3224ed=await _0x1109dd[_0x5b1df8(0x1a2)]();if(_0x3224ed['success']){let _0x4051af=_0x3224ed[_0x5b1df8(0x1a8)][0x0];$[_0x5b1df8(0x1dc)]({'title':_0x5b1df8(0x154),'content':_0x5b1df8(0x15d)+_0x4051af+_0x5b1df8(0x168),'type':'green','typeAnimated':!![],'buttons':{'success':{'text':'Ok','btnClass':'btn-green','action':function(){const _0x8804b=_0x5b1df8;document[_0x8804b(0x13e)][_0x8804b(0x1c5)]();}}}}),sessionStorage[_0x5b1df8(0x189)](_0x5b1df8(0x18a));}}else{let _0x41c441=await _0x1109dd[_0x5b1df8(0x19b)]();alert(_0x41c441);}HideOverlay();});;});function autocomplete(_0x44e2b3,_0x47f430){const _0x1a289e=a0_0x3045f6;var _0xf9bb6b;_0x44e2b3['addEventListener'](_0x1a289e(0x19e),function(_0x30a60a){const _0xe1d583=_0x1a289e;var _0x1bd756,_0x16d5e6,_0x97ca99,_0xc51ee7=this[_0xe1d583(0x196)];_0x64298d();if(!_0xc51ee7)return![];_0xf9bb6b=-0x1,_0x1bd756=document[_0xe1d583(0x1e3)](_0xe1d583(0x177)),_0x1bd756[_0xe1d583(0x1c9)]('id',this['id']+_0xe1d583(0x15c)),_0x1bd756[_0xe1d583(0x1c9)]('class',_0xe1d583(0x1da)),this[_0xe1d583(0x1b8)]['appendChild'](_0x1bd756);for(_0x97ca99=0x0;_0x97ca99<_0x47f430[_0xe1d583(0x1b0)];_0x97ca99++){_0x47f430[_0x97ca99][_0xe1d583(0x1ca)][_0xe1d583(0x155)]()[_0xe1d583(0x1d0)](_0xc51ee7[_0xe1d583(0x155)]())&&(_0x16d5e6=document[_0xe1d583(0x1e3)](_0xe1d583(0x177)),_0x16d5e6[_0xe1d583(0x1c9)](_0xe1d583(0x156),_0x47f430[_0x97ca99]['CODIGO']),_0x16d5e6['innerHTML']=_0x47f430[_0x97ca99][_0xe1d583(0x1ca)][_0xe1d583(0x155)]()[_0xe1d583(0x1ac)](_0xc51ee7[_0xe1d583(0x155)](),_0xe1d583(0x146)+_0xc51ee7[_0xe1d583(0x155)]()+_0xe1d583(0x1ce)),_0x16d5e6[_0xe1d583(0x17d)]+=_0xe1d583(0x18c)+_0x47f430[_0x97ca99][_0xe1d583(0x1ca)]+'\x27>',_0x16d5e6[_0xe1d583(0x179)](_0xe1d583(0x18b),function(_0x5ca52f){const _0x52dc3a=_0xe1d583;_0x44e2b3['value']=this[_0x52dc3a(0x1d4)](_0x52dc3a(0x19e))[0x0][_0x52dc3a(0x196)],_0x44e2b3[_0x52dc3a(0x1c9)]('data-code',this['getAttribute'](_0x52dc3a(0x156))),_0x64298d(),atualizaPreco();}),_0x1bd756[_0xe1d583(0x165)](_0x16d5e6));}}),_0x44e2b3['addEventListener'](_0x1a289e(0x140),function(_0xa3120c){const _0x23315c=_0x1a289e;var _0x3f67dd=document['getElementById'](this['id']+'autocomplete-list');if(_0x3f67dd)_0x3f67dd=_0x3f67dd[_0x23315c(0x1d4)](_0x23315c(0x1c1));_0xa3120c[_0x23315c(0x14b)]();if(_0xf9bb6b>-0x1){if(_0x3f67dd)_0x3f67dd[_0xf9bb6b][_0x23315c(0x18b)]();}}),_0x44e2b3[_0x1a289e(0x179)]('keydown',function(_0x3bb006){const _0x3a347b=_0x1a289e;var _0x162870=document[_0x3a347b(0x16c)](this['id']+_0x3a347b(0x15c));if(_0x162870)_0x162870=_0x162870[_0x3a347b(0x1d4)]('div');if(_0x3bb006[_0x3a347b(0x192)]==0x28)_0xf9bb6b++,_0xa39ad0(_0x162870);else{if(_0x3bb006[_0x3a347b(0x192)]==0x26)_0xf9bb6b--,_0xa39ad0(_0x162870);else{if(_0x3bb006[_0x3a347b(0x192)]==0xd){_0x3bb006['preventDefault']();if(_0xf9bb6b>-0x1){if(_0x162870)_0x162870[_0xf9bb6b][_0x3a347b(0x18b)]();}}else{if(_0x3bb006[_0x3a347b(0x192)]==0x9){if(_0xf9bb6b>-0x1){if(_0x162870)_0x162870[_0xf9bb6b][_0x3a347b(0x18b)]();}}}}}});function _0xa39ad0(_0x223247){const _0x1d2122=_0x1a289e;if(!_0x223247)return![];_0x181030(_0x223247);if(_0xf9bb6b>=_0x223247[_0x1d2122(0x1b0)])_0xf9bb6b=0x0;if(_0xf9bb6b<0x0)_0xf9bb6b=_0x223247['length']-0x1;_0x223247[_0xf9bb6b][_0x1d2122(0x15a)][_0x1d2122(0x152)](_0x1d2122(0x1cd)),_0x44e2b3[_0x1d2122(0x196)]=_0x223247[_0xf9bb6b][_0x1d2122(0x149)][_0x1d2122(0x196)];}function _0x181030(_0x3860df){const _0x23d8dd=_0x1a289e;for(var _0x501bca=0x0;_0x501bca<_0x3860df[_0x23d8dd(0x1b0)];_0x501bca++){_0x3860df[_0x501bca][_0x23d8dd(0x15a)]['remove'](_0x23d8dd(0x1cd));}}function _0x64298d(_0x637f00){const _0x549b0a=_0x1a289e;var _0x3d3575=document[_0x549b0a(0x1d9)](_0x549b0a(0x1da));for(var _0x5e89ef=0x0;_0x5e89ef<_0x3d3575['length'];_0x5e89ef++){_0x637f00!=_0x3d3575[_0x5e89ef]&&_0x637f00!=_0x44e2b3&&_0x3d3575[_0x5e89ef][_0x549b0a(0x1b8)][_0x549b0a(0x151)](_0x3d3575[_0x5e89ef]);}}document[_0x1a289e(0x179)](_0x1a289e(0x18b),function(_0x2e060a){const _0x54806f=_0x1a289e;_0x64298d(_0x2e060a[_0x54806f(0x14a)]);});}buscaCondicoes(),buscaFormasPagamento(),document[a0_0x3045f6(0x179)](a0_0x3045f6(0x16d),_0x53003f=>{const _0x10da54=a0_0x3045f6;_0x53003f[_0x10da54(0x14a)][_0x10da54(0x188)]==_0x10da54(0x17a)&&_0x53003f['target'][_0x10da54(0x1dd)][_0x10da54(0x155)]()==_0x10da54(0x1ad)&&(_0x53003f[_0x10da54(0x14a)][_0x10da54(0x196)]=_0x53003f['target'][_0x10da54(0x196)]['toUpperCase']());}),produtosPedido[a0_0x3045f6(0x153)](_0x2b8792=>{const _0x1c608f=a0_0x3045f6,_0x1dd7a0='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22produto-carrinho\x22\x20data-code=\x22'+_0x2b8792[_0x1c608f(0x191)]+_0x1c608f(0x1a5)+_0x2b8792['index']+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x2b8792[_0x1c608f(0x1c8)]+_0x1c608f(0x193)+_0x2b8792['quantidade']+_0x1c608f(0x147)+parseFloat(_0x2b8792[_0x1c608f(0x13d)])[_0x1c608f(0x144)]()+'\x22\x20\x20type=\x22text\x22\x20name=\x22\x22\x20placeholder=\x22Qtd\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22produto-total\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20min=\x220\x22\x20value=\x22'+parseFloat(_0x2b8792[_0x1c608f(0x1c2)]*(_0x2b8792[_0x1c608f(0x13d)]||0x0))[_0x1c608f(0x144)]()+_0x1c608f(0x15e);tabelaProdutos[_0x1c608f(0x17d)]+=_0x1dd7a0;}),document[a0_0x3045f6(0x179)](a0_0x3045f6(0x169),onContentLoaded),validaToken();function isNumber(_0x570aac){const _0x577efb=a0_0x3045f6;_0x570aac=_0x570aac?_0x570aac:window[_0x577efb(0x178)];var _0x4e12e7=_0x570aac[_0x577efb(0x1b4)]?_0x570aac[_0x577efb(0x1b4)]:_0x570aac['keyCode'];console[_0x577efb(0x1d2)](_0x4e12e7);if(_0x4e12e7==0x2c)return!![];if(_0x4e12e7>0x1f&&(_0x4e12e7<0x30||_0x4e12e7>0x39))return![];return!![];}