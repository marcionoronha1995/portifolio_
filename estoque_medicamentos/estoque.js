var estoque =  [5,2,10,0,8];
var nomes = ["Aspirina","Paracetamol","Ibuprofeno","Dipirona","Amoxicilina"];
var estoque_minimo = 3;

document.getElementById("nomeRemedio1").innerHTML=nomes[0];
document.getElementById("estoque1").innerHTML=estoque[0];
document.getElementById("nomeRemedio2").innerHTML=nomes[1];
document.getElementById("estoque2").innerHTML=estoque[1];
document.getElementById("nomeRemedio3").innerHTML=nomes[2];
document.getElementById("estoque3").innerHTML=estoque[2];
document.getElementById("nomeRemedio4").innerHTML=nomes[3];
document.getElementById("estoque4").innerHTML=estoque[3];
document.getElementById("nomeRemedio5").innerHTML=nomes[4];
document.getElementById("estoque5").innerHTML=estoque[4];
document.getElementById("nomeRemedio6").innerHTML=nomes[5];
document.getElementById("estoque6").innerHTML=estoque[5];
if(estoque[0] < estoque_minimo){
    documento.getElementById("estoqueAtual1").innerHTML="estoque baixo";
};
if(estoque[1] < estoque_minimo){
    console.log(estoque[1]);
    console.log(estoque_minimo);
    documento.getElementById("estoqueAtual2").innerHTML="estoque baixo";
};
