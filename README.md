## 🧠 Tutor de Inglês com LLM

Um app React Native que simula um terminal de perguntas para um professor de inglês,
usando uma LLM gratuita via OpenRouter. Criado como projeto da disciplina **Desenvolvimento Backend**
com o professor **Geraldo Gomes**.






## 📱 Sobre o Projeto

O objetivo é utilizar um modelo de linguagem natural (LLM) para responder dúvidas relacionadas ao inglês — gramática, vocabulário e pronúncia — com exemplos e explicações claras, tudo diretamente no celular.

## 🚀 Tecnologias Utilizadas

**Frontend (React Native + Expo):**
- `react-native`
- `expo`
- `fetch API`

**Backend (Node.js + Express):**
- `express`
- `axios`
- `body-parser`
- `cors`

**API Utilizada:**
- [OpenRouter](https://openrouter.ai/) — com o modelo `deepseek-r1-distill-qwen-7b`

## 🎨 Estilo Visual

- Terminal estilizado com cores neon 💾
- Ícone fofo de um pato com bandeiras 🇧🇷🇺🇸
- Animações suaves e feedback visual interativo

## 🛠️ Como Executar Localmente

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/tutor-english-llm.git
cd tutor-english-llm
````

### 2. Instale as Dependências

#### Backend:

```bash
cd backend
npm install
```

#### Frontend:

```bash
cd ../frontend
npm install
```

### 3. Configure a API Key

No arquivo `backend/llm.js`, adicione sua chave da OpenRouter:

```js
const OPENROUTER_API_KEY = 'sua_chave_aqui';
```

### 4. Rode o Servidor

```bash
cd backend
node llm.js
```

### 5. Rode o App Mobile

```bash
cd ../frontend
npx expo start
```

> Escaneie o QR Code com o app **Expo Go** no celular.

## 🧪 Testando a LLM

Exemplo de pergunta:

```
Qual a diferença entre "will" e "going to"?
```

Resposta esperada:

> Ambas expressam futuro, mas "will" é mais usado para decisões rápidas ou previsões, enquanto "going to" indica algo planejado. Exemplo: *I'm going to travel next week.* vs *I think it will rain tomorrow.*

## 📁 Estrutura do Projeto

```
tutor-english-llm/
│
├── backend/
│   └── llm.js
│
├── frontend/
│   ├── App.js
│   ├── Footer.js
│   ├── assets/
│   │   └── [imagens e ícones]
│   └── ...
└── README.md
```



### 📸 Capturas de Tela


```markdown


### 📱 Tela Inicial
<img src="frontend/img/exemplo1.png" alt="Tela inicial" width="300"/>

### 💬 Terminal de Perguntas
<img src="frontend/img/exemplo2.png" alt="Terminal de perguntas" width="300"/>

### 🐥 Ícone Fofo do App
<img src="./assets/icon.png" alt="Ícone do App" width="100"/>
```



## 👩‍🏫 Professor Responsável

**Geraldo Gomes** — Disciplina: *Desenvolvimento Backend*

## 📄 Direitos Autorais

Todo o conteúdo deste projeto — incluindo código-fonte, layout, design e imagens — é de autoria de **Morgana Souza**.

© 2025 Morgana Souza. Todos os direitos reservados.

Este repositório foi desenvolvido com fins educacionais, como parte da disciplina **Desenvolvimento Backend** ministrada pelo professor **Geraldo Gomes**.

A reprodução, reutilização ou modificação deste projeto é permitida para fins educacionais ou pessoais, 
desde que os devidos créditos sejam atribuídos à autora.


---

🦆 *Let's learn English, the fun way!*


