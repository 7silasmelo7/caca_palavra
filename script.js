// Sistema Autônomo de Palavras e Categorias
const sistemaAutonomo = {
    categorias: {
        animais: {
            nome: 'Animais',
            emoji: '🐾',
            palavras: [
                { palavra: 'elefante', dicas: ['É o maior animal terrestre', 'Tem uma tromba longa', 'Vive em manadas', 'Nunca esquece'] },
                { palavra: 'girafa', dicas: ['Tem o pescoço mais longo', 'Come folhas de árvores altas', 'Vive na savana africana', 'Tem manchas pelo corpo'] },
                { palavra: 'pinguim', dicas: ['Ave que não voa', 'Vive em regiões geladas', 'Excelente nadador', 'Anda bamboleando'] },
                { palavra: 'golfinho', dicas: ['Mamífero aquático inteligente', 'Se comunica por sons', 'Vive em grupos', 'Salta fora da água'] },
                { palavra: 'borboleta', dicas: ['Inseto colorido com asas', 'Passa por metamorfose', 'Poliniza flores', 'Começa como lagarta'] },
                { palavra: 'camaleao', dicas: ['Réptil que muda de cor', 'Língua longa e rápida', 'Olhos se movem independentes', 'Cauda enrolada'] }
            ]
        },
        paises: {
            nome: 'Países',
            emoji: '🌍',
            palavras: [
                { palavra: 'brasil', dicas: ['Maior país da América do Sul', 'Fala português', 'Sede da Amazônia', 'Conhecido pelo futebol'] },
                { palavra: 'japao', dicas: ['País insular na Ásia', 'Tecnologia avançada', 'Famoso por sushi', 'Terra do sol nascente'] },
                { palavra: 'egito', dicas: ['Lar das pirâmides', 'Rio Nilo atravessa', 'Civilização milenar', 'Faraós e múmias'] },
                { palavra: 'canada', dicas: ['Segundo maior país do mundo', 'Muito frio e neve', 'Famoso pelo xarope de bordo', 'Bilíngue: inglês e francês'] },
                { palavra: 'australia', dicas: ['Continente-país', 'Cangurus e coalas', 'Grande barreira de corais', 'Ópera de Sydney famosa'] }
            ]
        },
        profissoes: {
            nome: 'Profissões',
            emoji: '💼',
            palavras: [
                { palavra: 'medico', dicas: ['Cuida da saúde das pessoas', 'Trabalha em hospital', 'Usa estetoscópio', 'Diagnostica doenças'] },
                { palavra: 'bombeiro', dicas: ['Apaga incêndios', 'Usa caminhão vermelho', 'Resgata pessoas', 'Muito corajoso'] },
                { palavra: 'astronauta', dicas: ['Viaja para o espaço', 'Usa traje espacial', 'Vive em gravidade zero', 'Explora o universo'] },
                { palavra: 'chef', dicas: ['Prepara refeições gourmet', 'Trabalha em cozinha', 'Cria receitas', 'Usa avental e chapéu'] },
                { palavra: 'arquiteto', dicas: ['Projeta construções', 'Desenha plantas', 'Cria espaços funcionais', 'Combina arte e engenharia'] }
            ]
        },
        comida: {
            nome: 'Comidas',
            emoji: '🍕',
            palavras: [
                { palavra: 'pizza', dicas: ['Prato italiano redondo', 'Tem queijo derretido', 'Massa com molho de tomate', 'Cortada em fatias'] },
                { palavra: 'chocolate', dicas: ['Doce feito de cacau', 'Derrete na boca', 'Pode ser amargo ou ao leite', 'Presente romântico'] },
                { palavra: 'sorvete', dicas: ['Sobremesa gelada', 'Vários sabores e cores', 'Derrete no calor', 'Servido em casquinha'] },
                { palavra: 'abacaxi', dicas: ['Fruta tropical espinhosa', 'Coroa de folhas no topo', 'Polpa amarela e suculenta', 'Sabor doce e ácido'] },
                { palavra: 'sushi', dicas: ['Prato japonês com peixe cru', 'Enrolado em alga', 'Acompanha arroz', 'Come com hashi'] }
            ]
        },
        tecnologia: {
            nome: 'Tecnologia',
            emoji: '💻',
            palavras: [
                { palavra: 'computador', dicas: ['Máquina eletrônica digital', 'Processa informações', 'Tem teclado e mouse', 'Acessa internet'] },
                { palavra: 'smartphone', dicas: ['Telefone inteligente portátil', 'Tela touchscreen', 'Muitos aplicativos', 'Tira fotos e vídeos'] },
                { palavra: 'internet', dicas: ['Rede mundial de computadores', 'Conecta pessoas globalmente', 'Troca de informações rápida', 'Existe desde 1990'] },
                { palavra: 'javascript', dicas: ['Linguagem de programação web', 'Roda no navegador', 'Deixa sites interativos', 'Criada em 1995'] },
                { palavra: 'robo', dicas: ['Máquina automática programável', 'Imita movimentos humanos', 'Usado em indústrias', 'Inteligência artificial'] }
            ]
        },
        esportes: {
            nome: 'Esportes',
            emoji: '⚽',
            palavras: [
                { palavra: 'futebol', dicas: ['Esporte mais popular do mundo', 'Joga-se com os pés', 'Bola redonda e gol', 'Copa do Mundo a cada 4 anos'] },
                { palavra: 'basquete', dicas: ['Joga-se com as mãos', 'Cesta elevada como alvo', 'Cinco jogadores por time', 'Bola laranja grande'] },
                { palavra: 'natacao', dicas: ['Esporte aquático', 'Vários estilos diferentes', 'Competição em piscinas', 'Trabalha corpo todo'] },
                { palavra: 'karate', dicas: ['Arte marcial japonesa', 'Golpes de mão e perna', 'Usa quimono branco', 'Sistema de faixas coloridas'] },
                { palavra: 'tenis', dicas: ['Joga-se com raquete', 'Bola amarela pequena', 'Quadra com rede no meio', 'Wimbledon famoso'] }
            ]
        },
        natureza: {
            nome: 'Natureza',
            emoji: '🌿',
            palavras: [
                { palavra: 'oceano', dicas: ['Grande massa de água salgada', 'Cobre 70% da Terra', 'Habitat de baleias', 'Tem ondas e marés'] },
                { palavra: 'montanha', dicas: ['Elevação natural do terreno', 'Pico alto e íngreme', 'Pode ter neve no topo', 'Alpinistas sobem'] },
                { palavra: 'floresta', dicas: ['Área densa de árvores', 'Habitat de muitos animais', 'Produz oxigênio', 'Amazônia é a maior'] },
                { palavra: 'vulcao', dicas: ['Montanha que expele lava', 'Magma do interior da Terra', 'Erupções perigosas', 'Forma ilhas no oceano'] },
                { palavra: 'arcoiris', dicas: ['Fenômeno óptico colorido', 'Aparece após a chuva', 'Sete cores principais', 'Causado pela luz solar'] }
            ]
        },
        objetos: {
            nome: 'Objetos',
            emoji: '🎁',
            palavras: [
                { palavra: 'relogio', dicas: ['Mede a passagem do tempo', 'Tem ponteiros ou digital', 'Usado no pulso ou parede', 'Marca horas e minutos'] },
                { palavra: 'sombrinha', dicas: ['Protege da chuva e do sol', 'Abre e fecha', 'Tem cabo e tecido', 'Formato circular'] },
                { palavra: 'violao', dicas: ['Instrumento musical de cordas', 'Formato curvilíneo', 'Toca-se com os dedos', 'Som acústico suave'] },
                { palavra: 'bicicleta', dicas: ['Veículo de duas rodas', 'Movida por pedais', 'Transporte ecológico', 'Tem guidão e selim'] },
                { palavra: 'camera', dicas: ['Captura imagens estáticas', 'Tem lente e botão', 'Guarda memórias visuais', 'Profissionais ou amadoras'] }
            ]
        }
    },
    
    // Seleciona uma categoria aleatória
    selecionarCategoriaAleatoria() {
        const chaves = Object.keys(this.categorias);
        const chaveAleatoria = chaves[Math.floor(Math.random() * chaves.length)];
        return { chave: chaveAleatoria, ...this.categorias[chaveAleatoria] };
    },
    
    // Seleciona uma palavra aleatória da categoria
    selecionarPalavraAleatoria(categoria) {
        const palavras = categoria.palavras;
        return palavras[Math.floor(Math.random() * palavras.length)];
    }
};

// Gerenciador de Pontuação
class ScoreManager {
    static STORAGE_KEY = 'jogoAdivinhaScores';
    
    static calculateScore(palavra, tentativasRestantes, dicasUsadas) {
        const baseScore = palavra.length * 10;
        const bonusTentativas = tentativasRestantes * 20;
        const penaltyDicas = dicasUsadas * 5;
        return Math.max(0, baseScore + bonusTentativas - penaltyDicas);
    }
    
    static saveScore(score, palavra) {
        const scores = this.getScores();
        scores.push({
            score,
            palavra,
            data: new Date().toISOString(),
            timestamp: Date.now()
        });
        scores.sort((a, b) => b.score - a.score);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(scores.slice(0, 10)));
    }
    
    static getScores() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    }
    
    static getHighScore() {
        const scores = this.getScores();
        return scores.length > 0 ? scores[0].score : 0;
    }
}

// Gerenciador de Cache de API
class APICache {
    static cache = new Map();
    static TTL = 3600000; // 1 hora
    
    static set(key, value) {
        this.cache.set(key, {
            value,
            timestamp: Date.now()
        });
    }
    
    static get(key) {
        const item = this.cache.get(key);
        if (!item) return null;
        
        if (Date.now() - item.timestamp > this.TTL) {
            this.cache.delete(key);
            return null;
        }
        
        return item.value;
    }
}

// Gerenciador de Sons
class SoundManager {
    static play(type) {
        const frequencies = {
            acerto: [523.25, 659.25, 783.99], // C, E, G
            erro: [293.66, 246.94], // D, B
            vitoria: [523.25, 659.25, 783.99, 1046.50], // C, E, G, C
            derrota: [246.94, 220.00, 196.00] // B, A, G
        };
        
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const freq = frequencies[type] || [440];
            
            freq.forEach((f, i) => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = f;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + i * 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.1 + 0.3);
                
                oscillator.start(audioContext.currentTime + i * 0.1);
                oscillator.stop(audioContext.currentTime + i * 0.1 + 0.3);
            });
        } catch (e) {
            // Navegador não suporta Web Audio API
        }
    }
}

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
        this.pontuacaoAtual = 0;
        this.categoriaAtual = null;
        this.palavraAtual = null;
        
        // Configurações de IA (desabilitadas)
        this.apiKey = '';
        this.usarIApalavras = false;
        this.dicasIA = false;
        
        // Elementos DOM
        this.elementos = {
            palavraDisplay: document.getElementById('palavraDisplay'),
            tentativasText: document.getElementById('tentativasText'),
            letrasUsadasText: document.getElementById('letrasUsadasText'),
            mensagem: document.getElementById('mensagem'),
            btnNovoJogo: document.getElementById('btnNovoJogo'),
            btnDica: document.getElementById('btnDica'),
            dicasRestantes: document.getElementById('dicasRestantes'),
            modal: document.getElementById('modal'),
            modalTitulo: document.getElementById('modalTitulo'),
            modalMensagem: document.getElementById('modalMensagem'),
            btnFecharModal: document.getElementById('btnFecharModal'),
            progressFill: document.getElementById('progressFill'),
            progressText: document.getElementById('progressText'),
            scoreText: document.getElementById('scoreText'),
            recordeText: document.getElementById('recordeText'),
            tecladoVirtual: document.getElementById('tecladoVirtual'),
            categoria: document.getElementById('categoria')
        };
        
        this.atualizarRecorde();
        this.inicializarEventos();
        this.inicializarTecladoVirtual();
        this.novoJogo();
    }
    
    atualizarRecorde() {
        const recorde = ScoreManager.getHighScore();
        this.elementos.recordeText.textContent = recorde;
    }
    
    inicializarEventos() {
        // Evento de dica
        this.elementos.btnDica.addEventListener('click', () => this.obterDica());
        
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
    
    inicializarTecladoVirtual() {
        if (!this.elementos.tecladoVirtual) {
            console.warn('⚠️ Teclado virtual não encontrado');
            return;
        }
        
        const teclas = this.elementos.tecladoVirtual.querySelectorAll('.tecla');
        console.log(`🎹 Inicializando ${teclas.length} teclas`);
        
        teclas.forEach(tecla => {
            tecla.addEventListener('click', (e) => {
                e.preventDefault();
                const letra = tecla.dataset.letra;
                console.log(`🔤 Tecla clicada: ${letra}`);
                this.verificarLetra(letra.toLowerCase());
            });
        });
    }
    
    async novoJogo() {
        // Selecionar categoria e palavra do sistema autônomo
        this.categoriaAtual = sistemaAutonomo.selecionarCategoriaAleatoria();
        this.palavraAtual = sistemaAutonomo.selecionarPalavraAleatoria(this.categoriaAtual);
        this.palavra = this.palavraAtual.palavra.toLowerCase();
        
        // Inicializar seletor de palavra
        this.seletorPalavra = Array(this.palavra.length).fill('_');
        
        // Resetar variáveis
        this.tentativas = 5;
        this.letrasUsadas.clear();
        this.dicasRestantes = 3;
        this.pontuacaoAtual = 0;
        
        // Resetar teclado virtual
        this.resetarTecladoVirtual();
        
        // Atualizar interface
        this.atualizarInterface();
        
        // Mostrar categoria atual
        if (this.elementos.categoria) {
            this.elementos.categoria.textContent = `${this.categoriaAtual.emoji} ${this.categoriaAtual.nome}`;
        }
        
        // Mostrar mensagem inicial
        this.mostrarMensagem("Boa sorte! Comece adivinhando as letras.", "info");
        
        // Atualizar botão de dica
        this.elementos.btnDica.disabled = false;
        this.elementos.dicasRestantes.textContent = `Dicas: ${this.dicasRestantes}`;
        
        // Fechar modal se estiver aberto
        this.fecharModal();
    }
    
    async gerarPalavraComIA() {
        if (!this.apiKey) {
            this.mostrarMensagem('⚠️ Configure a API Key para usar IA', 'info');
            return null;
        }
        
        const prompt = 'Gere uma única palavra em português para um jogo de adivinhação. A palavra deve ter entre 4 e 10 letras. Responda apenas com a palavra, sem explicações.';
        
        // Verificar cache
        const cached = APICache.get(prompt);
        if (cached) {
            console.log('✅ Usando palavra do cache');
            return cached;
        }
        
        // Verificar rate limiting
        const lastRequest = localStorage.getItem('lastAPIRequest');
        const now = Date.now();
        if (lastRequest && (now - parseInt(lastRequest)) < 2000) {
            this.mostrarMensagem('⏳ Aguarde um momento...', 'info');
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
        
        try {
            localStorage.setItem('lastAPIRequest', now.toString());
            
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }]
                })
            });
            
            if (!response.ok) {
                throw new Error(`Erro na API: ${response.status}`);
            }
            
            const data = await response.json();
            if (data.candidates && data.candidates[0]) {
                let palavra = data.candidates[0].content.parts[0].text.trim().toLowerCase();
                palavra = palavra.replace(/[^a-záàâãéèêíïóôõöúçñ]/gi, '');
                
                // Validação
                if (palavra.length < 4 || palavra.length > 10) {
                    throw new Error('Palavra fora do tamanho esperado');
                }
                
                APICache.set(prompt, palavra);
                console.log('✅ Palavra gerada:', palavra);
                return palavra;
            }
        } catch (error) {
            console.error('❌ Erro ao gerar palavra com IA:', error);
            this.mostrarMensagem('⚠️ Usando palavra padrão', 'info');
        }
        
        return null;
    }
    
    async obterDica() {
        if (this.dicasRestantes === 0) {
            this.mostrarMensagem('⚠️ Você não tem mais dicas!', 'erro');
            return;
        }
        
        this.elementos.btnDica.disabled = true;
        
        // Usar apenas dicas simples
        this.obterDicaSimples();
        
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
            });
            
            if (!response.ok) {
                throw new Error(`Erro na API: ${response.status}`);
            }
            
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
        // Sistema autônomo: usa as dicas pré-geradas para a palavra atual
        if (this.palavraAtual && this.palavraAtual.dicas && this.palavraAtual.dicas.length > 0) {
            // Seleciona uma dica aleatória da palavra atual
            const dicasDisponiveis = this.palavraAtual.dicas;
            const dicaAleatoria = dicasDisponiveis[Math.floor(Math.random() * dicasDisponiveis.length)];
            this.mostrarMensagem(`💡 Dica: ${dicaAleatoria}`, 'info');
        } else {
            // Fallback: dica de letra (caso não haja dicas pré-geradas)
            const letrasNaoUsadas = [];
            for (let letra of this.palavra) {
                if (!this.letrasUsadas.has(letra) && !this.seletorPalavra.includes(letra)) {
                    letrasNaoUsadas.push(letra);
                }
            }
            
            if (letrasNaoUsadas.length > 0) {
                const letraDica = letrasNaoUsadas[Math.floor(Math.random() * letrasNaoUsadas.length)];
                this.mostrarMensagem(`💡 Tente a letra "${letraDica}"`, 'info');
            } else {
                this.mostrarMensagem('💡 Você já descobriu todas as letras importantes!', 'info');
            }
        }
    }
    
    verificarLetra(letraParam = null) {
        // Se o jogo já terminou, não processar
        if (this.tentativas <= 0 || !this.seletorPalavra.includes('_')) {
            this.mostrarMensagem("⚠️ Jogo finalizado! Clique em 'Novo Jogo'", "erro");
            return;
        }
        
        const letra = letraParam ? letraParam.trim() : null;
        
        // Validações
        if (!letra) {
            this.mostrarMensagem("⚠️ Selecione uma letra!", "erro");
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
            SoundManager.play('acerto');
        } else {
            // Diminuir tentativas
            this.tentativas--;
            this.mostrarMensagem(
                `❌ Letra não encontrada! Tentativas restantes: ${this.tentativas}`,
                "erro"
            );
            SoundManager.play('erro');
        }
        
        // Atualizar interface
        this.atualizarInterface();
        
        // Verificar fim do jogo
        this.verificarFimJogo();
    }
    
    atualizarInterface() {
        // Atualizar palavra
        this.elementos.palavraDisplay.textContent = this.seletorPalavra.join(' ');
        
        // Atualizar progresso
        const letrasReveladas = this.seletorPalavra.filter(l => l !== '_').length;
        const progresso = (letrasReveladas / this.palavra.length) * 100;
        this.elementos.progressFill.style.width = `${progresso}%`;
        this.elementos.progressText.textContent = `${Math.round(progresso)}% completo`;
        
        // Atualizar pontuação
        const dicasUsadas = 3 - this.dicasRestantes;
        this.pontuacaoAtual = ScoreManager.calculateScore(this.palavra, this.tentativas, dicasUsadas);
        this.elementos.scoreText.textContent = this.pontuacaoAtual;
        
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
        
        // Atualizar teclado virtual
        this.atualizarTecladoVirtual();
    }
    
    verificarFimJogo() {
        // Verificar vitória
        if (!this.seletorPalavra.includes('_')) {
            SoundManager.play('vitoria');
            
            // Salvar pontuação
            ScoreManager.saveScore(this.pontuacaoAtual, this.palavra);
            this.atualizarRecorde();
            
            this.mostrarModal(
                "🎉 Vitória!",
                `Parabéns! Você adivinhou a palavra: ${this.palavra.toUpperCase()}\n\n🏆 Pontuação: ${this.pontuacaoAtual}\n⭐ Recorde: ${ScoreManager.getHighScore()}`
            );
            return;
        }
        
        // Verificar derrota
        if (this.tentativas === 0) {
            SoundManager.play('derrota');
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
    
    atualizarTecladoVirtual() {
        const teclas = this.elementos.tecladoVirtual.querySelectorAll('.tecla');
        teclas.forEach(tecla => {
            const letra = tecla.dataset.letra;
            tecla.classList.remove('usada', 'correta', 'errada');
            
            if (this.letrasUsadas.has(letra)) {
                if (this.palavra.includes(letra)) {
                    tecla.classList.add('correta');
                } else {
                    tecla.classList.add('errada');
                }
                tecla.classList.add('usada');
                tecla.disabled = true;
            } else {
                tecla.disabled = false;
            }
        });
    }
    
    resetarTecladoVirtual() {
        const teclas = this.elementos.tecladoVirtual.querySelectorAll('.tecla');
        teclas.forEach(tecla => {
            tecla.classList.remove('usada', 'correta', 'errada');
            tecla.disabled = false;
        });
    }
}

// Inicializar o jogo quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new JogoAdivinhacao();
});
