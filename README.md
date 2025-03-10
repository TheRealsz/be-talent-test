# Teste Técnico Front-end BeTalent

Este repositório contém a solução do desafio técnico para a vaga de Front-end na BeTalent. O objetivo do projeto é construir uma visualização de uma tabela responsiva que exibe dados de funcionários consumidos de uma API simulada usando json-server.

## 🛠 Tecnologias Utilizadas

- React.js + TypeScript
- TailwindCSS
- Json-server (para simular a API)

## 📌 Funcionalidades

- Exibição de uma tabela responsiva com as colunas:
  - Imagem do funcionário
  - Nome
  - Cargo
  - Data de admissão
  - Telefone
- Campo de pesquisa para filtrar os dados por nome, cargo ou telefone
- Formatação de datas e números de telefone no front-end

## 📂 Estrutura do Projeto

```
📁 src
│-- 📂 assets         # Arquivos de imagens ou icones
│-- 📂 components     # Componentes reutilizáveis
│-- 📂 services       # Configuração da API
│-- 📂 types          # Interfaces de dados
│-- 📂 utils          # Funções auxiliares e de formatação
│-- App.tsx           # Pagina principal
│-- main.tsx          # Ponto de entrada da aplicação
```

## 🚀 Como Rodar o Projeto

### 1. Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
- **Node.js** (v16+ ou LTS recomendado)
- **Git**
- **Yarn** ou **npm**

### 2. Clonar o Repositório
```bash
git https://github.com/TheRealsz/be-talent-test
cd be-talent-test
```

### 3. Instalar Dependências
```bash
npm install  # ou yarn install
```
### 4. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto e adicione a seguinte variável:

```env

VITE_API_URL="http://localhost:3000"

```

Certifique-se de que a URL corresponde ao endereço onde o json-server está rodando.

### 5. Iniciar o Servidor Fake (json-server)
Seguir instruções do link a seguir: https://github.com/BeMobile/teste-pratico-frontend

### 6. Iniciar o Projeto
```bash
npm run dev  # ou yarn dev
```

A aplicação estará disponível em `http://localhost:5173/`.

## 🎯 Critérios Atendidos
- ✅ **Lógica de programação organizada**
- ✅ **Código bem estruturado**
- ✅ **Estilização com TailwindCSS seguindo o mockup**
- ✅ **Filtro de pesquisa funcional**
- ✅ **README documentado com instruções claras**
- ✅ **Uso de TypeScript para melhor tipagem e segurança**

---

Qualquer dúvida ou sugestão, fique à vontade para entrar em contato!

🖥️ Desenvolvido por **Robson Diego** 🚀

