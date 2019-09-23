
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
            //console.log(i);
        }

    }
    let a = c;
    let b = 0;
    document.querySelector("#resultado").innerHTML = a;
    for (var i = 1; i<= a/2; i++){
        if(a%i==0){
            b += i;
            console.log(b);
        }

    }

    


}

//220 y 284



