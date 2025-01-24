let amigos = [];
let sorteados = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const tabelaAmigos = document.getElementById("tabelaAmigos");
    const friendsSection = document.getElementById("friends-section");
    const drawButton = document.getElementById("draw-button");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    if (amigos.some(amigo => amigo.nome === nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    // Adiciona o nome com status inicial
    const novoAmigo = {
        nome: nome, 
        status: "Não sorteado"
    };
    amigos.push(novoAmigo);

    const tr = document.createElement("tr");
    tr.classList.add("friend-item");

    const tdNome = document.createElement("td");
    tdNome.textContent = nome;
    tdNome.classList.add("friend-name");

    const tdStatus = document.createElement("td");
    tdStatus.textContent = "Não sorteado";
    tdStatus.classList.add("friend-status");

    const tdAcoes = document.createElement("td");
    tdAcoes.classList.add("friend-actions");
    const btnRemover = document.createElement("button");
    btnRemover.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    `;
    btnRemover.classList.add("btn-remove");
    btnRemover.onclick = () => removerAmigo(nome, tr);

    tdAcoes.appendChild(btnRemover);
    
    tr.appendChild(tdNome);
    tr.appendChild(tdStatus);
    tr.appendChild(tdAcoes);
    tabelaAmigos.appendChild(tr);

    friendsSection.classList.remove("hidden");
    drawButton.classList.remove("hidden");

    input.value = "";
    input.focus();
}

function removerAmigo(nome, elementoTr) {
    amigos = amigos.filter(amigo => amigo.nome !== nome);
    elementoTr.remove();

    const friendsSection = document.getElementById("friends-section");
    const drawButton = document.getElementById("draw-button");
    const tabelaAmigos = document.getElementById("tabelaAmigos");

    

    if (amigos.length === 0) {
        friendsSection.classList.add("hidden");
        drawButton.classList.add("hidden");
        const resultado = document.getElementById("resultado");
        resultado.classList.add("hidden");
        resultado.textContent = '';
    }
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    const tabelaAmigos = document.getElementById("tabelaAmigos");

    // Filtra amigos não sorteados
    const amigosPossiveis = amigos.filter(amigo => amigo.status === "Não sorteado");

    // Verificação ajustada para caso haja apenas um amigo
    if (amigosPossiveis.length === 0) {
        alert("Todos os amigos já foram sorteados!");
        return;
    }

    // Se houver apenas um amigo, sorteia ele
    if (amigosPossiveis.length === 1) {
        const ultimoAmigo = amigosPossiveis[0];
        
        // Atualiza status na lista original e na visualização
        const amigoBuscado = amigos.find(a => a.nome === ultimoAmigo.nome);
        amigoBuscado.status = "Sorteado";

        // Atualiza visualização na tabela
        const linhasTabela = document.querySelectorAll("#tabelaAmigos tr");
        linhasTabela.forEach(linha => {
            const nomeCelula = linha.querySelector(".friend-name");
            const statusCelula = linha.querySelector(".friend-status");
            
            if (nomeCelula && nomeCelula.textContent === ultimoAmigo.nome) {
                statusCelula.textContent = "Sorteado";
                statusCelula.classList.add("sorteado");
            }
        });

        // Exibe resultado
        resultado.textContent = `O amigo sorteado é: ${ultimoAmigo.nome}`;
        resultado.classList.remove("hidden");
        resultado.classList.add("animate-result");

        setTimeout(() => {
            resultado.classList.remove("animate-result");
        }, 3000);

        // Após sortear o último, mostra mensagem de conclusão
        alert("Último amigo sorteado! Reinicie o jogo.");
        return;
    }

    // Lógica original de sorteio para múltiplos amigos
    const indiceSorteado = Math.floor(Math.random() * amigosPossiveis.length);
    const amigoSorteado = amigosPossiveis[indiceSorteado];

    // Atualiza status na lista original e na visualização
    const amigoBuscado = amigos.find(a => a.nome === amigoSorteado.nome);
    amigoBuscado.status = "Sorteado";

    // Atualiza visualização na tabela
    const linhasTabela = document.querySelectorAll("#tabelaAmigos tr");
    linhasTabela.forEach(linha => {
        const nomeCelula = linha.querySelector(".friend-name");
        const statusCelula = linha.querySelector(".friend-status");
        
        if (nomeCelula && nomeCelula.textContent === amigoSorteado.nome) {
            statusCelula.textContent = "Sorteado";
            statusCelula.classList.add("sorteado");
        }
    });

    // Exibe resultado
    resultado.textContent = `O amigo sorteado é: ${amigoSorteado.nome}`;
    resultado.classList.remove("hidden");
    resultado.classList.add("animate-result");

    setTimeout(() => {
        resultado.classList.remove("animate-result");
    }, 3000);

    // Verifica se todos foram sorteados
    if (amigos.every(amigo => amigo.status === "Sorteado")) {
        alert("Todos os amigos foram sorteados! Reinicie o jogo.");
    }
}

function reiniciarAplicativo() {
    amigos = [];
    sorteados = [];

    const tabelaAmigos = document.getElementById("tabelaAmigos");
    tabelaAmigos.innerHTML = '';

    const friendsSection = document.getElementById("friends-section");
    const drawButton = document.getElementById("draw-button");
    const resultado = document.getElementById("resultado");
    
    friendsSection.classList.add("hidden");
    drawButton.classList.add("hidden");
    resultado.classList.add("hidden");
    resultado.textContent = '';

    document.getElementById("amigo").focus();
}