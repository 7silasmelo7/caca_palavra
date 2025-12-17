# 🎮 Jogo de Adivinhação com IA

Um jogo de adivinhação de palavras moderno e responsivo, com integração de Inteligência Artificial usando Google Gemini.

## 🚀 Como Configurar a IA (5 minutos)

### Passo 1: Obter sua API Key GRATUITA

1. Abra o jogo no navegador ([index.html](index.html))
2. Clique no botão **⚙️** (engrenagem) no canto superior direito
3. Clique no link **"Obter API key gratuita"**
4. Faça login com sua conta Google
5. Clique em **"Create API Key"**
6. Copie a chave gerada

### Passo 2: Configurar no Jogo

1. Volte ao jogo
2. Cole a chave no campo **"Google Gemini API Key"**
3. Marque as opções desejadas:
   - ✅ **Gerar palavras com IA** - Palavras dinâmicas e variadas
   - ✅ **Ativar dicas inteligentes** - Dicas contextuais da IA
4. Clique em **"Salvar"**

### Passo 3: Jogar!

- Suas configurações ficam salvas no navegador
- Use o botão **"💡 Dica com IA"** durante o jogo (3 dicas disponíveis)

## 🔒 Segurança

### Por que é seguro?

- ✅ **Cada usuário usa sua própria chave** (não compartilhada)
- ✅ **Armazenamento local** - A chave fica apenas no SEU navegador
- ✅ **Sem servidor** - Nenhuma chave é enviada para terceiros
- ✅ **API gratuita do Google** - Até 60 requisições/minuto

### Onde a chave é armazenada?

A chave fica armazenada no **localStorage do seu navegador**, similar a:
- Cookies de preferências
- Temas salvos
- Configurações de sites

### Como remover?

1. Clique no botão **⚙️**
2. Apague o conteúdo do campo
3. Clique em **"Salvar"**

Ou limpe o cache/localStorage do navegador.

## 🎯 Funcionalidades

### Sem IA (Modo Padrão)
- ✅ Banco de palavras pré-definido
- ✅ Dicas simples (sugestão direta de letras)
- ✅ Funciona offline

### Com IA (Modo Avançado)
- 🤖 Geração dinâmica de palavras
- 💡 Dicas contextuais inteligentes
- 🎯 Análise do progresso do jogo
- 🧠 Sugestões estratégicas

## 📱 Compatibilidade

- ✅ Desktop (Chrome, Firefox, Edge, Safari)
- ✅ Tablet
- ✅ Smartphone
- ✅ Design responsivo

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **IA**: Google Gemini API
- **Armazenamento**: LocalStorage
- **Design**: Mobile-first, Gradientes, Animações CSS

## ⚠️ Importante

### NUNCA faça isso:
- ❌ Não compartilhe sua API key publicamente
- ❌ Não commite a chave no Git/GitHub
- ❌ Não exponha a chave em prints ou vídeos

### Se sua chave vazar:
1. Acesse: https://aistudio.google.com/app/apikey
2. Revogue a chave comprometida
3. Gere uma nova chave
4. Configure novamente no jogo

## 📊 Limites da API Gratuita

**Google Gemini Free Tier:**
- 60 requisições por minuto
- 1.500 requisições por dia
- Suficiente para uso pessoal

## 🎮 Como Jogar

1. O jogo escolhe uma palavra (aleatória ou gerada por IA)
2. Digite uma letra e clique em **"Verificar"** (ou pressione Enter)
3. Use **"💡 Dica com IA"** se precisar de ajuda (3 dicas por jogo)
4. Você tem 5 tentativas para acertar
5. Adivinhe todas as letras para vencer!

## 💻 Desenvolvimento Local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/jogo-adivinhacao.git

# Abra o arquivo
cd jogo-adivinhacao
# Abra index.html no navegador
```

## 📝 Estrutura de Arquivos

```
📁 Jogo de Adivinhação com Python/
├── 📄 index.html         # Estrutura da página
├── 📄 style.css          # Estilos e responsividade
├── 📄 script.js          # Lógica do jogo + integração IA
├── 📄 jogo_gui.py        # Versão Python (Tkinter)
├── 📄 jogo.py            # Versão Python (console)
└── 📄 README.md          # Este arquivo
```

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas!

## 📄 Licença

Projeto de estudo - Uso livre

## 👨‍💻 Autor

Desenvolvido com ❤️ para aprender e se divertir!

---

**Dica:** Mantenha sua API key segura e aproveite o jogo! 🎉
