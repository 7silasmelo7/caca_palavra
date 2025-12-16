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
        
        // Elementos DOM
        this.elementos = {
            palavraDisplay: document.getElementById('palavraDisplay'),
            tentativasText: document.getElementById('tentativasText'),
            letrasUsadasText: document.getElementById('letrasUsadasText'),
            mensagem: document.getElementById('mensagem'),
            letraInput: document.getElementById('letraInput'),
            btnVerificar: document.getElementById('btnVerificar'),
            btnNovoJogo: document.getElementById('btnNovoJogo'),
            modal: document.getElementById('modal'),
            modalTitulo: document.getElementById('modalTitulo'),
            modalMensagem: document.getElementById('modalMensagem'),
            btnFecharModal: document.getElementById('btnFecharModal')
        };
        
        this.inicializarEventos();
        this.novoJogo();
    }
    
    inicializarEventos() {
        // Evento de verificar letra
        this.elementos.btnVerificar.addEventListener('click', () => this.verificarLetra());
        
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
    
    novoJogo() {
        // Selecionar palavra aleatória
        this.palavra = this.bancoPalavras[Math.floor(Math.random() * this.bancoPalavras.length)].toLowerCase();
        
        // Inicializar seletor de palavra
        this.seletorPalavra = Array(this.palavra.length).fill('_');
        
        // Resetar variáveis
        this.tentativas = 5;
        this.letrasUsadas.clear();
        
        // Atualizar interface
        this.atualizarInterface();
        
        // Mostrar mensagem inicial
        this.mostrarMensagem("Boa sorte! Comece adivinhando as letras.", "info");
        
        // Habilitar input e dar foco
        this.elementos.letraInput.disabled = false;
        this.elementos.letraInput.value = '';
        this.elementos.letraInput.focus();
        
        // Fechar modal se estiver aberto
        this.fecharModal();
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
