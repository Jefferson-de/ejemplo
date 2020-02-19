var numeros = document.getElementById("numeros");
var letras = document.getElementById("letras");





function boton1() {
    var aux = numeros.innerText;
    if (aux == '1,2,3,4,5,6,7,8,9,0') {
        letras.innerHTML = "A";
    }

    if (aux == '') {
        numeros.innerHTML="1";
    } 
}
function boton2() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 == "A") {
        letras.innerHTML = "A,B"
    } else {
        if (aux2 == '' & aux == "1,2,3,4,5,6,7,8,9,0,") {
            alert("falta una letra")

        }
    }

    if (aux == "1") {
        numeros.innerHTML = "1,2"
    } else {
        if (aux == '')
            alert("falta un numero");
    }
}

        function boton3() {
            var aux = numeros.innerText;
            if (aux == "1,2") {
                numeros.innerHTML = "1,2,3";

            } else {
                if (aux == '')
                    alert("falta un numero");
            }

        }

        function boton4() {
            var aux = numeros.innerText;
            if (aux == "1,2,3") {
                numeros.innerHTML = "1,2,3,4";

            } else {
                if (aux == '')
                    alert("falta un numero");
            }

        }

        function boton5() {
            var aux = numeros.innerText;
            if (aux == "1,2,3,4") {
                numeros.innerHTML = "1,2,3,4,5";

            } else {
                if (aux == '') {
                    alert("falta un numero");
                }

            }
            }
            function boton6() {
                var aux = numeros.innerText;
                if (aux == "1,2,3,4,5,") {
                    numeros.innerHTML = "1,2,3,4,5,6";

                } else {
                    if (aux == '') {
                        alert("falta un numero");
                    }

                }
                 }
                function boton7() {
                    var aux = numeros.innerText;
                    if (aux == "1,2,3,4,5,6") {
                        numeros.innerHTML = "1,2,3,4,5,6,7";

                    } else {
                        if (aux == '') {
                            alert("falta un numero");
                        }

                    }
                     }
                    function boton8() {
                        var aux = numeros.innerText;
                        if (aux == "1,2,3,4,5,6,7") {
                            numeros.innerHTML = "1,2,3,4,5,6,7,8";

                        } else {
                            if (aux == '') {
                                alert("falta un numero");
                            }

                        }
                        }
                        function boton9() {
                            var aux = numeros.innerText;
                            if (aux == "1,2,3,4,5,6,7,8") {
                                numeros.innerHTML = "1,2,3,4,5,6,7,8,9";

                            } else {
                                if (aux == '') {
                                    alert("falta un numero");
                                }

                            }
                            }
                            function boton0() {
                                var aux = numeros.innerText;
                                if (aux == "1,2,3,4,5,6,7,8,9") {
                                    numeros.innerHTML = "1,2,3,4,5,6,7,8,9,0";

                                } else {
                                    if (aux == '') {
                                        alert("falta un numero");
                                    }

                                }

                            }
