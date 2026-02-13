

const calcular =document.getElementById('calcular');

function imc(){
    const vida = document.getElementById('vida').value; 
    const dano = document.getElementById('dano').value;
    const critico = document.getElementById('critico').value; 
    const resultado = document.getElementById('resultado');


    if(vida !==''&& dano !==''&& critico !==''){
     
        const vida = (dano* 30 + critico *30).toFixed(1);

        const valorIMC=((dano-vida)*critico).toFixed(1);

        let classificacao = '';
        if(valorIMC<30){
            classificacao = 'vida boa';

        }else if(valorIMC < 25){
            classificacao = 'vida media';

        }else if(valorIMC <20){
            classificacao = 'vida baixa';

        }else if(valorIMC<15){
            classificacao = 'quase morto';

        }else if(valorIMC<10){
            classificacao = 'com o pe na cova';

        }else {
            classificacao = 'morto';
        }
        resultado.textContent = `${vida} voce esta ${valorIMC} 
        e voce está ${classificacao}`;

    }
    else {
        resultado.textContent = 'Preencha todos  os campos';
    }


}
calcular.addEventListener('click', imc);
