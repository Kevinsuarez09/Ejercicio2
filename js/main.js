function realizarOperacion() {
    var operacion = document.getElementById("operacion").value;
    var primero = document.getElementById("primerValor").value;
    var segundo = document.getElementById("segundoValor").value;

    var resultado 

    switch (operacion) {
        case "1":
            resultado = parseInt(primero) + parseInt(segundo);
            document.getElementsByName("resultado")[0].value = resultado
            break;
        case "2":
            resultado = primero - segundo;
            document.getElementsByName("resultado")[0].value = resultado
            break;
        case "3":
            resultado = primero * segundo;
            document.getElementsByName("resultado")[0].value = resultado
            break;
        case "4":
            resultado = primero / segundo;
            document.getElementsByName("resultado")[0].value = resultado
            break;
    }

}