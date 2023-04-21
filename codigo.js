
var s = 0;
var m = 0;
var h = 0;

var temp = 1000
var crono;


function iniciar(){
   crono = setInterval(() => {tempo();}, temp);
}

function parar(){
    clearInterval(crono);

}

function zerar(){
    s = 0;
    m = 0;
    h = 0;  
    document.getElementById('seg').innerText = '0';
    document.getElementById('min').innerText = '0';
    document.getElementById('ho').innerText = '0';
}

function tempo(){
    s++
    if(s == 60){
        s = 0;
        m++
        if(m == 60){
            m = 0
            h++
            if(h == 24){
                s=0
                m=0
                h=0
            }
        }
    }

    document.getElementById('seg').innerText = s;
    document.getElementById('min').innerText = m;
    document.getElementById('ho').innerText = h;
}


