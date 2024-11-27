const botao = document.getElementById('botao');
const resultado = document.querySelector('.resultado');
const textoResultado = document.querySelector('.texto-resultado');
const aviso = document.querySelector('.aviso');
const alertaSaude = document.querySelector('.alertaSaude');


botao.onclick = calcularIMC;





function calcularIMC () {
    let imc = 0;
    let peso = parseInt(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    imc = peso/(altura^2);

    alertaSaude.classList.remove('yellow', 'red', 'orange', 'green');

    if (imc <= 18) {
        textoResultado.textContent = 'Seu IMC é: ';
        resultado.textContent = imc.toFixed(0);
        aviso.textContent = ' Cuidado! Você está abaixo do peso!';
        alertaSaude.textContent = 'Riscos á saúde = Transtornos digestivos, debilidade, fadiga crônica, stress, ansiedade e disfusões hormonais.';
        alertaSaude.classList.add('orange');

    } if ( imc > 18 && imc < 25) { 
        textoResultado.textContent = 'Seu IMC é: ';
        resultado.textContent = imc.toFixed(0);
        aviso.textContent = ' Você está no peso Ideal!';
        alertaSaude.textContent = 'Riscos á saúde - Estado normal, bom nível de energia, vitalidade e boa condição física. Mantenha o seu peso e IMC.';
        alertaSaude.classList.add('green');

    }   if (imc >= 25 && imc < 30) {
        textoResultado.textContent = 'Seu IMC é: ';
        resultado.textContent = imc.toFixed(0);
        aviso.textContent = ' Cuidado! Você está com sobrepeso!';
        alertaSaude.textContent = 'Risco moderado - Fadiga, problemas digestivos, problemas circulatórios, má circulação nas pernas, varizes.';
        alertaSaude.classList.add('yellow');

    }   if (imc >= 30 && imc < 35) {
        textoResultado.textContent = 'Seu IMC é: ';
        resultado.textContent = imc.toFixed(0);
        aviso.textContent = 'Cuidado! Você está com obesidade moderada!';
        alertaSaude.textContent = 'Risco alto - Diabetes, angina de peito, enfartes, tromboFlebites, arteroscleroses, alterações mestruais, disfunções sexuais.';
    }   if (imc >= 35) {
        textoResultado.textContent = 'Seu IMC é: ';
        resultado.textContent = imc.toFixed(0);
        aviso.textContent = 'Cuidado! Você está com obesidade morbida!';
        alertaSaude.textContent = 'Risco Muito alto - Falta de Ar, apneia, sonolência, trombose pulmonar, úlceras varicosas, cancro do colon uterino e mamário, refluxo esofágico,disfunções sexuais, discriminação social, laboral e sexual.';
        alertaSaude.classList.add('red');

    }
}