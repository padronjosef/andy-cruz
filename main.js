
var galeria1 = 1;
var galeria2 = 6;
var galeria3 = 11;
var galeria4 = 16;
var galeria5 = 21;

function adelante1() {
    galeria1++;
    if(galeria1>5)
    galeria1 =1;
    var foto1 = document.getElementById("foto1");
    foto1.src="images/IMG"+galeria1+".jpg";
}
function atras1() {
    galeria1--;
    if(galeria1<1)
    galeria1=5;
    var foto1 = document.getElementById("foto1");
    foto1.src="images/IMG"+galeria1+".jpg";
}

function adelante2() {
    galeria2++;
    if(galeria2>10)
    galeria2 =6;
    var foto2 = document.getElementById("foto2");
    foto2.src="images/IMG"+galeria2+".jpg";
}
function atras2() {
    galeria2--;
    if(galeria2<6)
    galeria2=10;
    var foto2 = document.getElementById("foto2");
    foto2.src="images/IMG"+galeria2+".jpg";
}

function adelante3() {
    galeria3++;
    if(galeria3>15)
    galeria3 =11;
    var foto3 = document.getElementById("foto3");
    foto3.src="images/IMG"+galeria3+".jpg";
}
function atras3() {
    galeria3--;
    if(galeria3<11)
    galeria3=15;
    var foto3 = document.getElementById("foto3");
    foto3.src="images/IMG"+galeria3+".jpg";
}

function adelante4() {
    galeria4++;
    if(galeria4>20)
    galeria4 =16;
    var foto4 = document.getElementById("foto4");
    foto4.src="images/IMG"+galeria4+".jpg";
}
function atras4() {
    galeria4--;
    if(galeria4<16)
    galeria4=20;
    var foto4 = document.getElementById("foto4");
    foto4.src="images/IMG"+galeria4+".jpg";
}

function adelante5() {
    galeria5++;
    if(galeria5>25)
    galeria5 =21;
    var foto5 = document.getElementById("foto5");
    foto5.src="images/IMG"+galeria5+".jpg";
}
function atras5() {
    galeria5--;
    if(galeria5<21)
    galeria5=25;
    var foto5 = document.getElementById("foto5");
    foto5.src="images/IMG"+galeria5+".jpg";
}