import ValidaCPF from "./CPFClass.mjs";

  function  rand (min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }
function    geranovoCPF() {
        const cpfSemDigito = rand();
        const digito1 = ValidaCPF.calculo9digitos(Array.from(cpfSemDigito));
        const digito2 = ValidaCPF.calculo10digitos(Array.from(cpfSemDigito+digito1));
        const novoCPF = cpfSemDigito + digito1 + digito2;
        return novoCPF;
    };

function gera() {
    const gera2 =  geranovoCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera2;
};

gera();

