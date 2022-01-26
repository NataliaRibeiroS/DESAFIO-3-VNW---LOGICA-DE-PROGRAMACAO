//FOR / WHILE

//1 - Criar um loop que conte de 1 até 10 usando FOR
for(cont = 1; cont<= 10; cont++){
    console.log(cont)
}

//2 - Criar um loop que conte de 10 até 1 usando WHILE
let diminuindo = 11
while(diminuindo >= 2) {
    diminuindo--
    console.log(diminuindo)
}

//3 - Criar um loop que conte todos os números ímpares de 1 até 100

for(cont = 1; cont <= 100; cont++) {
    if(cont % 2 != 0){
        console.log("Esse número é impar " + cont)
    }
}

//4- Criar um loop que conte todos os números pares de 0 a 100
for(cont = 0; cont <= 100; cont++) {
    if(cont % 2 == 0){
        console.log("Esse número é par " + cont)
    }
}
