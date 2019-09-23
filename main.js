
let btn = document.querySelector("#btn");
btn.addEventListener("click", operacion);

/*function mostrar(){
    let n = document.querySelector("#numero").value;

    document.querySelector("#resultado").innerHTML = n;
}*/

function operacion(){
    let n = document.querySelector("#numero").value;
    let c = 0;
    for (var i = 1; i<= n/2; i++){
        if(n%i==0){
            c += i;
            console.log(i);
        }

    }
    let a = c;
    let b = 0;
    document.querySelector("#resultado").innerHTML = a;
    for (var j = 1; j<= a/2; j++){
        if(a%j==0){
            b += j;
            //console.log(b);
            document.querySelector("#resultado2").innerHTML = b;
        }

    }
    if(a = j || b = i){

    }

}

//220 y 284



