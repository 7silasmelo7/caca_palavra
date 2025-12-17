# 🎮 Jogo de Adivinhação

Um jogo de adivinhação de palavras moderno e responsivo, com **sistema de pontuação**, **teclado virtual** e **efeitos sonoros**!

## ✨ Novidades - Versão 2.0

### 🏆 Sistema de Pontuação
- Pontuação baseada em:
  - Tamanho da palavra (10 pontos por letra)
  - Tentativas restantes (20 pontos por tentativa)
  - Dicas usadas (-5 pontos por dica)
- **Ranking de recordes** salvos localmente
- Desafio pessoal para superar seu próprio recorde!

### 📊 Barra de Progresso
- Visualização em tempo real do progresso
- Porcentagem de letras descobertas
- Feedback visual imediato

### ⌨️ Teclado Virtual
- Teclado completo em tela para dispositivos móveis
- Indicação visual de letras:
  - 🟢 **Verde**: Letra correta
  - 🔴 **Vermelha**: Letra errada
  - ⚪ **Branca**: Ainda não usada
- Desabilitação automática de letras já usadas

### 🔊 Efeitos Sonoros
- Sons para acertos e erros
- Melodia de vitória
- Som de derrota
- Feedback auditivo imersivo

### ♿ Acessibilidade Aprimorada
- Navegação por teclado melhorada
- Suporte a leitores de tela
- Modo de alto contraste
- Respeita preferências de animação reduzida


## 📱 Compatibilidade

- ✅ Desktop (Chrome, Firefox, Edge, Safari)
- ✅ Tablet
- ✅ Smartphone
- ✅ Design responsivo

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Design**: Mobile-first, Gradientes, Animações CSS


## 🎮 Como Jogar

1. O jogo escolhe uma palavra aleatória de uma categoria também aleatória
2. **Desktop**: Digite uma letra e clique em **"Verificar"** (ou pressione Enter)
3. **Mobile**: Use o teclado virtual na tela
4. Use **"💡 Dica com IA"** se precisar de ajuda (3 dicas por jogo)
5. Você tem 5 tentativas para acertar
6. Adivinhe todas as letras para vencer!

### 🏆 Sistema de Pontuação

**Como funciona:**
Pontuação = (Tamanho da palavra × 10) + (Tentativas restantes × 20) - (Dicas usadas × 5)

**Exemplo:**
- Palavra: "BRASIL" (6 letras) = 60 pontos
- Tentativas restantes: 3 = 60 pontos
- Dicas usadas: 1 = -5 pontos
- **Total: 115 pontos** 🎉

**Dicas para alta pontuação:**
- ✅ Use menos dicas possível
- ✅ Mantenha tentativas restantes
- ✅ Jogue com palavras maiores

## 🎨 Funcionalidades Técnicas

### Performance
- ✅ **Cache de API**: Requisições repetidas são armazenadas em cache (1 hora)
- ✅ **Rate Limiting**: Proteção contra spam de requisições (2s entre chamadas)
- ✅ **Debounce**: Otimização de entrada de dados
- ✅ **Lazy Loading**: Carregamento eficiente de recursos

### Validações Aprimoradas
- ✅ Validação de tamanho de palavra (4-10 letras)
- ✅ Filtro de caracteres especiais
- ✅ Tratamento de erros da API
- ✅ Fallback automático para modo offline

### Acessibilidade (WCAG 2.1)
- ✅ **ARIA Labels**: Descrições para leitores de tela
- ✅ **Keyboard Navigation**: Navegação completa por teclado
- ✅ **Focus Visible**: Indicadores visuais de foco
- ✅ **High Contrast Mode**: Suporte a modo de alto contraste
- ✅ **Reduced Motion**: Respeita preferências de animação

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
├── 📄 README.md          # Este arquivo
└── 📄 CHANGELOG.md       # Histórico de versões e alterações
```

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas!

## 📄 Licença

Projeto de estudo - Uso livre

## 👨‍💻 Autor

Desenvolvido com ❤️ para aprender e se divertir!

---


