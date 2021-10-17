document.onkeydown = keyHit;
function keyHit(evt) {
    var crtl = 17;
    var tcle = 69;

    var thisKey = (evt) ? evt.which : window.event.keyCode;
    if (thisKey == crtl) {
        myFunction;
    }
    else if (thisKey == tcle) {
        myFunction;
    }
}

function external(){
    var ensalada=1.50;
    var papasfritas=1.25;
    var piezapollogrande=1.75;
    var piezapollomediana=1.50;
    var piezapollopequeña=1.25;
    var bebidagrande=1.50;
    var bebidamediana=1.25;
    var bebidapequeña=1.00;
    var cafe=0.50;
    var postre=1.25;
}

function radiobuton(){
    var bariable="7.25";
    var bariable2="5.25";
    var bariable3="3.50";
    var bariableint=parseInt(bariable);
    var barable2int=parseInt(bariable2);
    var bariable3int=parseInt(bariable3);

    var radioButton1 = document.getElementById("sb");
    var radioButton2 = document.getElementById("personal");
    var radioButton3 = document.getElementById("infantil");
    
    radioButton1.onclick=function(){
        if(radioButton1.value="1"){
            var result = document.getElementById('resultado');
            result.innerHTML ='<label>'+bariable+'</label>';
        }
    }

    radioButton2.onclick=function(){
        if(radioButton2.value=="2"){
            var result = document.getElementById('resultado');
            result.innerHTML ='<label>'+bariable2+'</label>';
        }
    }

    radioButton3.onclick=function(){
        if(radioButton3.value=="3"){
            var result = document.getElementById('resultado');
            result.innerHTML ='<label>'+bariable3+'</label>';
        }
    }
}
function myFunction() {
    var x = document.getElementById("sugerencias");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}