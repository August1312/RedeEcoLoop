function TrocaTitulo(titulo) {
    let tituloElemento = document.getElementById('titulo');

    let novoTitulo = "";
    switch (titulo) {
        case 'redeecoloop':
            novoTitulo = 'RedeEcoLoop';
            break;
        case 'objetivo':
            novoTitulo = 'Objetivo da empresa';
            break;
        case 'parceria':
            novoTitulo = 'A importancia de Parcerias';
            break;
        case 'grafico':
            novoTitulo = 'Grafico Econômico';
            break;
        default:
            break;
    }

    tituloElemento.innerHTML = novoTitulo;
}

// Script Splução formatação MEI

 const ipInput = document.getElementById('ipInput');

 ipInput.addEventListener('input', function (event) {
     // Nega qualque caracteres que não seja o digitos
     let inputValue = event.target.value.replace(/[^\d]/g, '');
     let formattedValue = '';
     // Limita a 11 caracteres para não exeder o numero do MEI
     inputValue = inputValue.slice(0, 14);

     // Loop para intera . a cada 3 caracteres
     for (let i = 0; i < inputValue.length; i++) {
         if (i === 2 || i === 5) { 
             formattedValue += '.';
         } else if (i === 8) {
             formattedValue += '/';
         } else if (i === 12) {
             formattedValue += '-';
         }
         formattedValue += inputValue[i];
     }

     event.target.value = formattedValue;
 });