// Classe do Jogo de Adivinhação
class JogoAdivinhacao {
    constructor() {
        // Banco de palavras
        this.bancoPalavras = ["remo", "paysandu", "belem", "introdução", "pomine"];
        
        // Variáveis do jogo
        this.palavra = "";
        this.seletorPalavra = [];
        this.tentativas = 5;
        this.letrasUsadas = new Set();
        this.dicasRestantes = 3;
        
        // Configurações de IA
        this.apiKey = localStorage.getItem('geminiApiKey') || '';
        this.usarIApalavras = localStorage.getItem('usarIApalavras') !== 'false';
        this.dicasIA = localStorage.getItem('dicasIA') !== 'false';
        
        // Elementos DOM
        this.elementos = {
            palavraDisplay: document.getElementById('palavraDisplay'),
            tentativasText: document.getElementById('tentativasText'),
            letrasUsadasText: document.getElementById('letrasUsadasText'),
            mensagem: document.getElementById('mensagem'),
            letraInput: document.getElementById('letraInput'),
            btnVerificar: document.getElementById('btnVerificar'),
            btnNovoJogo: document.getElementById('btnNovoJogo'),
            btnDica: document.getElementById('btnDica'),
            dicasRestantes: document.getElementById('dicasRestantes'),
            btnConfig: document.getElementById('btnConfig'),
            configPanel: document.getElementById('configPanel'),
            apiKey: document.getElementById('apiKey'),
            btnSalvarKey: document.getElementById('btnSalvarKey'),
            usarIApalavras: document.getElementById('usarIApalavras'),
            dicasIA: document.getElementById('dicasIA'),
            modal: document.getElementById('modal'),
            modalTitulo: document.getElementById('modalTitulo'),
            modalMensagem: document.getElementById('modalMensagem'),
            btnFecharModal: document.getElementById('btnFecharModal')
        };
        
        this.carregarConfiguracoes();
        this.inicializarEventos();
        this.novoJogo();
    }
    
    carregarConfiguracoes() {
        this.elementos.apiKey.value = this.apiKey;
        this.elementos.usarIApalavras.checked = this.usarIApalavras;
        this.elementos.dicasIA.checked = this.dicasIA;
    }
    
    inicializarEventos() {
        // Configuração de IA
        this.elementos.btnConfig.addEventListener('click', () => {
            this.elementos.configPanel.classList.toggle('show');
        });
        
        this.elementos.btnSalvarKey.addEventListener('click', () => this.salvarConfiguracoes());
        
        // Evento de verificar letra
        this.elementos.btnVerificar.addEventListener('click', () => this.verificarLetra());
        
        // Evento de dica
        this.elementos.btnDica.addEventListener('click', () => this.obterDica());
        
        // Evento de pressionar Enter
        this.elementos.letraInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.verificarLetra();
            }
        });
        
        // Converter input para maiúscula automaticamente
        this.elementos.letraInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.toUpperCase();
        });
        
        // Evento de novo jogo
        this.elementos.btnNovoJogo.addEventListener('click', () => this.novoJogo());
        
        // Evento de fechar modal
        this.elementos.btnFecharModal.addEventListener('click', () => this.fecharModal());
        
        // Fechar modal ao clicar fora dele
        this.elementos.modal.addEventListener('click', (e) => {
            if (e.target === this.elementos.modal) {
                this.fecharModal();
            }
        });
    }
    
    async novoJogo() {
        // Gerar palavra com IA se configurado
        if (this.usarIApalavras && this.apiKey) {
            const palavraIA = await this.gerarPalavraComIA();
            if (palavraIA) {
                this.palavra = palavraIA.toLowerCase();
            } else {
                this.palavra = this.bancoPalavras[Math.floor(Math.random() * this.bancoPalavras.length)].toLowerCase();
            }
        } else {
            this.palavra = this.bancoPalavras[Math.floor(Math.random() * this.bancoPalavras.length)].toLowerCase();
        }
        
        // Inicializar seletor de palavra
        this.seletorPalavra = Array(this.palavra.length).fill('_');
        
        // Resetar variáveis
        this.tentativas = 5;
        this.letrasUsadas.clear();
        this.dicasRestantes = 3;
        
        // Atualizar interface
        this.atualizarInterface();
        
        // Mostrar mensagem inicial
        this.mostrarMensagem("Boa sorte! Comece adivinhando as letras.", "info");
        
        // Habilitar input e dar foco
        this.elementos.letraInput.disabled = false;
        this.elementos.letraInput.value = '';
        this.elementos.letraInput.focus();
        
        // Atualizar botão de dica
        this.elementos.btnDica.disabled = false;
        this.elementos.dicasRestantes.textContent = `Dicas: ${this.dicasRestantes}`;
        
        // Fechar modal se estiver aberto
        this.fecharModal();
    }
    
    salvarConfiguracoes() {
        this.apiKey = this.elementos.apiKey.value.trim();
        this.usarIApalavras = this.elementos.usarIApalavras.checked;
        this.dicasIA = this.elementos.dicasIA.checked;
        
        localStorage.setItem('geminiApiKey', this.apiKey);
        localStorage.setItem('usarIApalavras', this.usarIApalavras);
        localStorage.setItem('dicasIA', this.dicasIA);
        
        this.mostrarMensagem('✅ Configurações salvas com sucesso!', 'sucesso');
        this.elementos.configPanel.classList.remove('show');
    }
    
    async gerarPalavraComIA() {
        if (!this.apiKey) return null;
        
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: 'Gere uma única palavra em português para um jogo de adivinhação. A palavra deve ter entre 4 e 10 letras. Responda apenas com a palavra, sem explicações.'
                        }]
                    }]
                })
            });
            
            const data = await response.json();
            if (data.candidates && data.candidates[0]) {
                const palavra = data.candidates[0].content.parts[0].text.trim().toLowerCase();
                return palavra.replace(/[^a-záàâãéèêíïóôõöúçñ]/gi, '');
            }
        } catch (error) {
            console.error('Erro ao gerar palavra com IA:', error);
        }
        
        return null;
    }
    
    async obterDica() {
        if (this.dicasRestantes === 0) {
            this.mostrarMensagem('⚠️ Você não tem mais dicas!', 'erro');
            return;
        }
        
        this.elementos.btnDica.disabled = true;
        
        if (this.dicasIA && this.apiKey) {
            await this.obterDicaIA();
        } else {
            this.obterDicaSimples();
        }
        
        this.dicasRestantes--;
        this.elementos.dicasRestantes.textContent = `Dicas: ${this.dicasRestantes}`;
        
        if (this.dicasRestantes === 0) {
            this.elementos.btnDica.disabled = true;
        } else {
            this.elementos.btnDica.disabled = false;
        }
    }
    
    async obterDicaIA() {
        try {
            const letrasReveladas = this.seletorPalavra.filter(l => l !== '_').join('');
            const prompt = `Estou jogando um jogo de adivinhação. A palavra tem ${this.palavra.length} letras. Letras já reveladas: ${letrasReveladas || 'nenhuma'}. Letras já tentadas: ${Array.from(this.letrasUsadas).join(', ') || 'nenhuma'}. Dê uma dica criativa e útil sobre qual letra tentar a seguir, mas sem revelar a palavra. Seja breve (máximo 30 palavras).`;
            
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }]
                })
            });elementos.btnDica.disabled = true;
            this.
            
            const data = await response.json();
            if (data.candidates && data.candidates[0]) {
                const dica = data.candidates[0].content.parts[0].text.trim();
                this.mostrarMensagem(`🤖 ${dica}`, 'info');
            } else {
                this.obterDicaSimples();
            }
        } catch (error) {
            console.error('Erro ao obter dica da IA:', error);
            this.obterDicaSimples();
        }
    }
    
    obterDicaSimples() {
        // Dica simples: sugerir uma letra que está na palavra e ainda não foi usada
        const letrasNaoUsadas = [];
        for (let letra of this.palavra) {
            if (!this.letrasUsadas.has(letra) && !this.seletorPalavra.includes(letra)) {
                letrasNaoUsadas.push(letra);
            }
        }
        
        if (letrasNaoUsadas.length > 0) {
            const letraDica = letrasNaoUsadas[Math.floor(Math.random() * letrasNaoUsadas.length)];
            this.mostrarMensagem(`💡 Dica: Tente a letra "${letraDica.toUpperCase()}"`, 'info');
        } else {
            this.mostrarMensagem('💡 Dica: Continue tentando! Você está perto!', 'info');
        }
    }
    
    verificarLetra() {
        const letra = this.elementos.letraInput.value.toLowerCase().trim();
        this.elementos.letraInput.value = '';
        
        // Validações
        if (!letra) {
            this.mostrarMensagem("⚠️ Digite uma letra!", "erro");
            return;
        }
        
        if (letra.length !== 1 || !/[a-zà-ú]/.test(letra)) {
            this.mostrarMensagem("⚠️ Digite apenas uma letra!", "erro");
            return;
        }
        
        if (this.letrasUsadas.has(letra)) {
            this.mostrarMensagem("⚠️ Você já usou essa letra!", "erro");
            return;
        }
        
        // Adicionar letra às usadas
        this.letrasUsadas.add(letra);
        
        // Verificar se a letra está na palavra
        if (this.palavra.includes(letra)) {
            // Revelar todas as ocorrências da letra
            for (let i = 0; i < this.palavra.length; i++) {
                if (this.palavra[i] === letra) {
                    this.seletorPalavra[i] = letra;
                }
            }
            this.mostrarMensagem("✅ Parabéns! Você acertou!", "sucesso");
        } else {
            // Diminuir tentativas
            this.tentativas--;
            this.mostrarMensagem(
                `❌ Letra não encontrada! Tentativas restantes: ${this.tentativas}`,
                "erro"
            );
        }
        
        // Atualizar interface
        this.atualizarInterface();
        
        // Verificar fim do jogo
        this.verificarFimJogo();
    }
    
    atualizarInterface() {
        // Atualizar palavra
        this.elementos.palavraDisplay.textContent = this.seletorPalavra.join(' ');
        
        // Atualizar tentativas
        this.elementos.tentativasText.textContent = `Tentativas: ${this.tentativas}`;
        
        // Adicionar classe crítica se tentativas <= 2
        if (this.tentativas <= 2) {
            this.elementos.tentativasText.parentElement.classList.add('critico');
        } else {
            this.elementos.tentativasText.parentElement.classList.remove('critico');
        }
        
        // Atualizar letras usadas
        const letrasOrdenadas = Array.from(this.letrasUsadas).sort();
        this.elementos.letrasUsadasText.textContent = 
            `Letras usadas: ${letrasOrdenadas.join(', ').toUpperCase()}`;
    }
    
    verificarFimJogo() {
        // Verificar vitória
        if (!this.seletorPalavra.includes('_')) {
            this.elementos.letraInput.disabled = true;
            this.mostrarModal(
                "🎉 Vitória!",
                `Parabéns! Você adivinhou a palavra: ${this.palavra.toUpperCase()}`
            );
            return;
        }
        
        // Verificar derrota
        if (this.tentativas === 0) {
            this.elementos.letraInput.disabled = true;
            this.mostrarModal(
                "😢 Game Over",
                `Suas tentativas acabaram!\nA palavra era: ${this.palavra.toUpperCase()}`
            );
        }
    }
    
    mostrarMensagem(texto, tipo) {
        this.elementos.mensagem.textContent = texto;
        this.elementos.mensagem.className = `mensagem ${tipo}`;
    }
    
    mostrarModal(titulo, mensagem) {
        this.elementos.modalTitulo.textContent = titulo;
        this.elementos.modalMensagem.textContent = mensagem;
        this.elementos.modal.classList.add('show');
    }
    
    fecharModal() {
        this.elementos.modal.classList.remove('show');
    }
}

// Inicializar o jogo quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new JogoAdivinhacao();
});
