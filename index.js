const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        const imc = (peso/ (altura * altura)).toFixed(2);
        resultado.textContent = imc;
        let classificacao = '';
        if(imc < 18.5){
            classificacao = 'abaixo do peso!';
        }else if(imc < 25){
            classificacao = 'com o peso ideal, Parabéns!';
        }else if(imc < 30){
             classificacao = 'levemente acima do peso';
        }else if(imc < 35){
            classificacao = 'com obesidade grau I';
        }else if(imc < 40){
            classificacao = 'com obesidade grau II';
        }else if(imc > 40){
            classificacao = 'com obesidade grau III. Cuidado';
        }

        resultado.textContent = `${nome} seu IMC é ${imc} e você está ${classificacao}`;
    }else{
        resultado.textContent = 'Preencha todos os campos!';
    }
     
}

calcular.addEventListener('click', imc);