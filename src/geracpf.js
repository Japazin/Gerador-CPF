import ValidaCPF from "./CPFClass.js";

function rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min))
}
function geranovoCPF() {
    const cpfSemDigito = rand();
    const digito1 = ValidaCPF.calculo9digitos(Array.from(cpfSemDigito));
    const digito2 = ValidaCPF.calculo10digitos(Array.from(cpfSemDigito + digito1));
    const novoCPF = cpfSemDigito + digito1 + digito2;
    return novoCPF;
};
function formatCPF(cpf) {
    // Remove non-numeric characters from the CPF
    cpf = cpf.replace(/\D/g, '');

    // Apply the CPF mask
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    return cpf;
}
function gera() {
    const gera2 = geranovoCPF();
    const CPFformatado = formatCPF(gera2);
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = CPFformatado;
};

gera();

