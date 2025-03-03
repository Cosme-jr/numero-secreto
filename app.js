    
    //Podemos usar desse jeito.

    /*let titulo = document.querySelector("h1");
        titulo.innerHTML='Jogo da advinhação';
        
        let paragrafo= document.querySelector("p");
        paragrafo.innerHTML="Escolha um numero de 1 a 10";
    */


    //Ou desse jeito (Melhor prática!)
            let listaDeNumerosSortiados=[];
            let numeroLimite=100;
            let numeroSecreto= gerarNumeroAleatorio();
            let tentativas = 1;
            
            

            function exibirTextoNaTela(tag,texto){
                let campo=document.querySelector(tag);
                campo.innerHTML=texto;

                responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.4});

            }
            exibirMensagemInicial();

            function exibirMensagemInicial() {
            exibirTextoNaTela('h1','Jogo do número secreto');
            exibirTextoNaTela('p','Escolha um número de 1 a 100');

           
            }
            
                function verificarChute(){
                    let chute = document.querySelector('input').value;
                    if(chute==numeroSecreto){
                        exibirTextoNaTela('h1', 'Acertou!');
                        
                        let palavraTentativa= tentativas > 1 ? 'tentativas' : 'tentativa'
                        
                        let mensagensTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
                        
                        exibirTextoNaTela('p', mensagensTentativas);

                        document.getElementById('reiniciar').removeAttribute('disabled');
                    }else{
                        if(chute>numeroSecreto){
                            exibirTextoNaTela('p', 'O número secreto é menor');
                        }else{
                            exibirTextoNaTela('p', 'O número secreto é maior');
                        }
                        tentativas ++;
                        limparCampo();
                    }
                }

                function gerarNumeroAleatorio() {
                    let numerosEscolhidos = parseInt(Math.random()* numeroLimite +1);

                    let quantidadeDeElementosNaLista= listaDeNumerosSortiados.length;

                    if(quantidadeDeElementosNaLista==numeroLimite ){
                        listaDeNumerosSortiados=[];
                    }
                    
                    if(listaDeNumerosSortiados.includes(numerosEscolhidos)){
                        return novoNumeroAleatorio();
                    }else{
                        listaDeNumerosSortiados.push(numerosEscolhidos);

                        console.log(listaDeNumerosSortiados)
                        return numerosEscolhidos;
                    }
                
                }
                

                function limparCampo() {
                    
                    chute=document.querySelector('input');
                    chute.value = '';
                }

                function reiniciarJogo() {
                    numeroSecreto= gerarNumeroAleatorio();
                    tentativas = 1;
                    limparCampo();
                    exibirMensagemInicial();
                    document.getElementById('reiniciar').setAttribute('disabled', true);
                }

            