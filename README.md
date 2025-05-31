# 📘 18-exercicios-typescript

Projeto desenvolvido em TypeScript com o objetivo de treinar lógica de programação através de um menu interativo no terminal.  
Cada opção do menu leva a um exercício diferente, permitindo que o usuário escolha e execute conforme desejar.

---

## 🚀 Funcionalidades

- ✅ Menu interativo no terminal
- ✅ 18 exercícios de lógica programados em TypeScript
- ✅ Navegação simples e objetiva
- ✅ Código organizado, modularizado e de fácil entendimento

---

## 🛠️ Tecnologias

- Node.js
- TypeScript
- readline (nativo do Node.js)

---

## 💻 Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão LTS recomendada)
- [Git](https://git-scm.com/) (opcional, caso queira clonar via terminal)

---

## 🔧 Instalação e execução

### 1️⃣ Clone o repositório

```
git clone https://github.com/seu-usuario/18-exercicios-typescript.git
```

Ou faça o download como ZIP e extraia.

### 2️⃣ Acesse a pasta do projeto

```
cd 18-exercicios-typescript
```

### 3️⃣ Instale as dependências

```
npm install
```

### 4️⃣ Compile o projeto TypeScript

```
npx tsc
```

### 5️⃣ Execute o programa

```
node dist/index.js
```

---

## 📁 Estrutura do projeto

```
📦18-exercicios-typescript
 ┣ 📂src
 ┃ ┣ 📜index.ts          → Arquivo principal com o menu
 ┃ ┣ 📜exercises.ts      → Funções dos exercícios
 ┃ ┗ 📜utils.ts          → Funções auxiliares (se houver)
 ┣ 📂dist                → Arquivos compilados em JavaScript
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┣ 📜README.md
```

---

## ⚙️ Scripts (recomendado)

No arquivo `package.json`, adicione:

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "ts-node src/index.ts"
}
```

Agora você pode rodar:

- 🔨 `npm run build` → Compila o TypeScript
- 🚀 `npm start` → Executa o projeto compilado
- ⚙️ `npm run dev` → Executa diretamente em TypeScript (se tiver `ts-node` instalado)

---

## 📦 Instalar dependências de desenvolvimento (se ainda não tiver)

```
npm install typescript ts-node --save-dev
```

---

## 🧠 Observações

- Se ocorrer erro de caminho, verifique se o arquivo de entrada está correto (`dist/index.js` após a compilação).
- O arquivo `tsconfig.json` já deve estar configurado para compilar o código TypeScript para a pasta `dist`.

---

## 🤝 Contribuição

Projeto desenvolvido para fins de estudo. Sugestões e melhorias são bem-vindas!

---

## 📝 Licença

Este projeto é livre para fins acadêmicos e de aprendizado.  
Desenvolvido por **Erick Lima - 2025**.
