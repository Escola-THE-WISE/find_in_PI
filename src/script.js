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

    if(false){
        console.log(`Data Selecionada: ${day}/${month}/${year}`);
        alert(`Data Selecionada: ${day}/${month}/${year} e concatenado fica ${numberSearch}`);
    }

    reply.innerHTML = `<p class="c-article__reply">
    Data Selecionada: <strong> ${day}/${month}/${year} </strong>
    </p>`;

    fetch('src/data.json')
        .then(response => response.json())
        .then(data => {
            const piString = data.pi; // Pegando o número de Pi do JSON

            // Encontrar a posição exata da sequência dentro do número de Pi
            const position = piString.indexOf(numberSearch); 
            
            if (position !== -1) {
                reply.innerHTML += `<p class="c-article__reply">
                    Achamos 🎉 🎉!!! A primeira vez que o número <strong> ${numberSearch} </strong> aparece é com início na posição decimal <strong> ${position + 1} </strong> do número de PI.
                </p>`;
            } else {
                reply.innerHTML += `<p class="c-article__reply">
                    Infelizmente a sequência <strong> ${numberSearch} </strong> não foi encontrada no número de PI (até 100.000.000).
                </p>`;
            }
        })
        .catch(error => {
            console.error("Erro ao carregar o arquivo pi.json:", error);
            alert("Erro ao carregar os dados do número de Pi. Certifique-se de que o arquivo pi.json está acessível.");
        });
});
