
const botao= document.getElementById('botao');

botao.onclick=calcularimc;

function calcularimc(){
    let peso = parseFloat(document.getElementById( peso).value);
    let altura= parseFloat(document.getElementById(altura).value);
    let imc=0;
    imc=peso/(altura^2);
    
    resultando.textcontent=imc.toFixed(0);

}
