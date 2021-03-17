function menuToggle(){
    
    let menuArea = document.getElementById("menu-area");

    if(menuArea.style.width == '80vw'){
        menuArea.style.width = '0vw';
    } else {
        menuArea.style.width ='80vw';
    }
}

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }

function calculo(){
    let peso =parseInt(document.getElementById("pes").value);
    let altura=parseInt(document.getElementById("alt").value);
    
    let resultado =  peso / ((altura * altura) / 10000);

    document.querySelector('.result').innerHTML = resultado.toFixed(2);

    if(resultado<18.5){
        document.getElementById('magreza').style.display='flex';
        document.getElementById('magreza-texto').style.display='flex';

        document.getElementById('normal').style.display='none';
        document.getElementById('sobrepeso').style.display='none';
        document.getElementById('obesidade').style.display='none';
        document.getElementById('obesidade-grave').style.display='none';

        document.getElementById('normal-texto').style.display='none';
        document.getElementById('sobrepeso-texto').style.display='none';
        document.getElementById('obesidade-texto').style.display='none';
        document.getElementById('obsg-texto').style.display='none';

        }
        else if(resultado>=18.5 && resultado<=24.99){
            document.getElementById('normal').style.display='flex';
            document.getElementById('normal-texto').style.display='flex';

            document.getElementById('magreza').style.display='none';
            document.getElementById('sobrepeso').style.display='none';
            document.getElementById('obesidade').style.display='none';
            document.getElementById('obesidade-grave').style.display='none';

            document.getElementById('magreza-texto').style.display='none';
            document.getElementById('sobrepeso-texto').style.display='none';
            document.getElementById('obesidade-texto').style.display='none';
            document.getElementById('obsg-texto').style.display='none';
        }
        
        else if(resultado>=25 && resultado<=29.99) {
            document.getElementById('sobrepeso').style.display='flex';
            document.getElementById('sobrepeso-texto').style.display='flex';

            document.getElementById('normal').style.display='none';
            document.getElementById('magreza').style.display='none';
            document.getElementById('obesidade').style.display='none';
            document.getElementById('obesidade-grave').style.display='none';

            document.getElementById('normal-texto').style.display='none';
            document.getElementById('magreza-texto').style.display='none';
            document.getElementById('obesidade-texto').style.display='none';
            document.getElementById('obsg-texto').style.display='none';
        }
        else if(resultado>=30 && resultado<=39.99) {
            document.getElementById('obesidade').style.display='flex';
            document.getElementById('obesidade-texto').style.display='flex';

            document.getElementById('normal').style.display='none';
            document.getElementById('sobrepeso').style.display='none';
            document.getElementById('magreza').style.display='none';
            document.getElementById('obesidade-grave').style.display='none';

            document.getElementById('normal-texto').style.display='none';
            document.getElementById('sobrepeso-texto').style.display='none';
            document.getElementById('magreza-texto').style.display='none';
            document.getElementById('obsg-texto').style.display='none';
        }
        else if (resultado>=40){
            document.getElementById('obesidade-grave').style.display='flex';
            document.getElementById('obsg-texto').style.display='flex';

            document.getElementById('normal').style.display='none';
            document.getElementById('sobrepeso').style.display='none';
            document.getElementById('obesidade').style.display='none';
            document.getElementById('magreza').style.display='none';

            document.getElementById('normal-texto').style.display='none';
            document.getElementById('sobrepeso-texto').style.display='none';
            document.getElementById('obesidade-texto').style.display='none';
            document.getElementById('magreza-texto').style.display='none';
        }

        else{
            alert("Você esqueceu de digitar!");

            document.getElementById('normal').style.display='none';
            document.getElementById('sobrepeso').style.display='none';
            document.getElementById('obesidade').style.display='none';
            document.getElementById('magreza').style.display='none';

            document.getElementById('normal-texto').style.display='none';
            document.getElementById('sobrepeso-texto').style.display='none';
            document.getElementById('obesidade-texto').style.display='none';
            document.getElementById('magreza-texto').style.display='none';
        }

}








