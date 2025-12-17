# 📋 Changelog - Jogo de Adivinhação

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

---

## [2.0.0] - 2025-12-17

### ✨ Novidades

#### 🏆 Sistema de Pontuação
- Implementado cálculo de pontuação baseado em múltiplos fatores
- Fórmula: `(tamanho × 10) + (tentativas × 20) - (dicas × 5)`
- Sistema de ranking com top 10 recordes salvos localmente
- Exibição em tempo real da pontuação atual e recorde pessoal
- Painel visual destacado com design em gradiente dourado

#### 📊 Barra de Progresso
- Indicador visual do progresso do jogo (0-100%)
- Atualização em tempo real conforme letras são descobertas
- Design moderno com animação suave
- Porcentagem exibida abaixo da barra

#### ⌨️ Teclado Virtual
- Teclado completo A-Z em tela para dispositivos móveis
- Estados visuais das teclas:
  - Verde: Letra correta na palavra
  - Vermelho: Letra incorreta
  - Branco: Letra não utilizada
  - Desabilitada: Letra já usada
- Layout responsivo em 3 linhas
- Oculta campo de input em telas pequenas (<600px)
- Feedback tátil e visual ao clicar

#### 🔊 Sistema de Sons
- Implementado `SoundManager` com Web Audio API
- Sons gerados sinteticamente (sem arquivos externos):
  - **Acerto**: Acordes harmônicos (C-E-G)
  - **Erro**: Tom descendente (D-B)
  - **Vitória**: Melodia ascendente (C-E-G-C)
  - **Derrota**: Tom descendente triste (B-A-G)
- Volume ajustado (30%) para não incomodar
- Fallback silencioso em navegadores sem suporte

### 🚀 Melhorias de Performance

#### Cache de API
- Implementada classe `APICache` para armazenar respostas
- TTL de 1 hora para palavras geradas
- Reduz requisições repetidas à API do Gemini
- Economia de cota da API gratuita

#### Rate Limiting
- Proteção contra spam de requisições
- Intervalo mínimo de 2 segundos entre chamadas
- Mensagem de feedback "⏳ Aguarde um momento..."
- Timestamp salvo em localStorage

#### Validações Aprimoradas
- Verificação de tamanho de palavra (4-10 letras)
- Filtro robusto de caracteres especiais
- Regex melhorado para aceitar acentos portugueses
- Tratamento de erros mais específico
- Mensagens de erro mais descritivas

### ♿ Acessibilidade

#### ARIA e Semântica
- Adicionados atributos `aria-label` nos inputs
- Atributo `aria-live="polite"` na palavra display
- Atributo `aria-describedby` para contexto
- Melhor descrição de elementos interativos

#### Navegação por Teclado
- Focus visible aprimorado (outline 3px)
- Suporte completo a navegação por Tab
- Enter funciona em todos os botões
- Escape fecha modais

#### Modos de Acessibilidade
- **Alto Contraste**: Layout adaptado automaticamente
- **Animações Reduzidas**: Respeita `prefers-reduced-motion`
- **Leitores de Tela**: Elementos corretamente identificados

### 🎨 Melhorias Visuais

#### Painel de Pontuação
- Design em gradiente amarelo/dourado
- Ícones emoji para pontuação (🏆) e recorde (⭐)
- Layout flexível responsivo
- Sombra suave e border-radius arredondado

#### Teclado Virtual
- Design clean e moderno
- Background cinza claro
- Teclas com sombra em hover
- Animação de pressionar (translateY)
- Border colorido em estados ativos

#### Barra de Progresso
- Gradiente verde (Tailwind green-500/600)
- Animação suave de transição (0.5s ease)
- Altura de 8px para visibilidade
- Texto centralizado abaixo

### 🔧 Refatoração de Código

#### Novas Classes Auxiliares
```javascript
// Gerenciamento de pontuação
class ScoreManager {
    static calculateScore()
    static saveScore()
    static getScores()
    static getHighScore()
}

// Cache de requisições API
class APICache {
    static set()
    static get()
    // TTL de 1 hora
}

// Efeitos sonoros
class SoundManager {
    static play(type)
    // Web Audio API
}
```

#### Métodos Adicionados
- `atualizarRecorde()`: Atualiza display do recorde
- `inicializarTecladoVirtual()`: Setup de eventos das teclas
- `atualizarTecladoVirtual()`: Atualiza estados visuais
- `resetarTecladoVirtual()`: Reset no novo jogo

#### Melhorias na `gerarPalavraComIA()`
- Integração com cache
- Rate limiting
- Validação de tamanho da palavra
- Mensagens de erro mais claras
- Fallback robusto

#### Melhorias na `obterDicaIA()`
- Rate limiting implementado
- Tratamento de erro aprimorado
- Timeout automático entre requisições

### 📱 Responsividade

#### Mobile-First Aprimorado
```css
@media (max-width: 600px) {
    .teclado-virtual { display: flex; }
    .input-section { display: none; }
}
```

#### Ajustes de Layout
- Tamanhos de fonte otimizados
- Padding e margin responsivos
- Teclado virtual apenas em telas pequenas
- Input tradicional em desktop

### 🐛 Correções

- ✅ Removida linha duplicada `this.elementos.btnDica.disabled = true;`
- ✅ Corrigido cálculo de pontuação antes de salvar
- ✅ Adicionado reset do teclado ao iniciar novo jogo
- ✅ Corrigido estado das teclas após usar letra
- ✅ Melhorado tratamento de respostas vazias da API

### 📚 Documentação

#### README.md Atualizado
- Seção "Novidades - Versão 2.0"
- Explicação detalhada do sistema de pontuação
- Instruções de uso do teclado virtual
- Dicas para alta pontuação
- Documentação de funcionalidades técnicas
- Melhorias de acessibilidade documentadas

#### Novo Arquivo CHANGELOG.md
- Documentação completa de todas as mudanças
- Organizado por categoria
- Exemplos de código
- Links para commits relevantes

### 🔄 Compatibilidade

#### Navegadores Testados
- ✅ Chrome 120+ (Windows/Mac/Android)
- ✅ Firefox 121+ (Windows/Mac)
- ✅ Safari 17+ (Mac/iOS)
- ✅ Edge 120+ (Windows)

#### Requisitos
- JavaScript ES6+ (arrow functions, classes, async/await)
- LocalStorage API
- Fetch API
- Web Audio API (opcional, com fallback)

---

## [1.0.0] - 2024

### Lançamento Inicial

#### Funcionalidades Base
- Jogo de adivinhação de palavras
- Banco de palavras pré-definido
- 5 tentativas por jogo
- Input de uma letra por vez
- Validação básica de entrada
- Modal de fim de jogo


#### Design
- Layout responsivo básico
- Gradiente roxo de fundo
- Card centralizado
- Animações CSS simples
- Footer informativo

#### Tecnologias
- HTML5 semântico
- CSS3 com flexbox
- JavaScript vanilla (ES6)
- LocalStorage para persistência

---

## 📌 Legendas

- `✨ Novidades`: Novas funcionalidades
- `🚀 Melhorias`: Aprimoramentos em funcionalidades existentes
- `🐛 Correções`: Bugs corrigidos
- `♿ Acessibilidade`: Melhorias de acessibilidade
- `📚 Documentação`: Atualizações na documentação
- `🔧 Refatoração`: Melhorias no código sem mudar funcionalidade
- `⚡ Performance`: Otimizações de performance
- `🎨 Estilo`: Mudanças visuais e CSS

---

## 🔗 Links Úteis

- **Repositório**: [GitHub](https://github.com/7silasmelo7)
- **Web Audio API**: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- **WCAG 2.1**: [Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Desenvolvido com ❤️ por Silas Melo**
