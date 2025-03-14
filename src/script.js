document.getElementById('submit').addEventListener('click', function (event) {
    // Pegando os valores selecionados
    const day = document.getElementById('day').value.toString();
    const month = document.getElementById('month').value.toString();
    let year = document.getElementById('year').value.toString();

    const reply = document.getElementById('reply');

    if (!day || !month || !year) {
        alert("Por favor, selecione uma data completa.");
        return;
    }

    // Removendo os dois primeiros dígitos do ano
    year = year.slice(-2);

    const numberSearch = day + month + year;

    console.log(`Data Selecionada: ${day}/${month}/${year}`);
    alert(`Data Selecionada: ${day}/${month}/${year} e concatenado fica ${numberSearch}`);
    reply.innerText = `Data Selecionada: ${day}/${month}/${year}`;

    // Buscando no pi.json
    fetch('pi-test.json')
        .then(response => response.json())
        .then(data => {
            const piString = data.pi; // Pegando o número de Pi do JSON

            const position = piString.indexOf(numberSearch); // Verifica a posição da sequência
            
            if (position !== -1) {
                alert(`A sequência ${numberSearch} foi encontrada no número de Pi na posição ${position + 1}! 🎉`);
            } else {
                alert(`A sequência ${numberSearch} NÃO foi encontrada no número de Pi. 😢`);
            }
        })
        .catch(error => {
            alert("Erro ao carregar o arquivo pi.json:", error);
        });
});
