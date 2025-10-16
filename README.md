# Chinês Lanches — Como rodar localmente

Este repositório contém um site estático (frontend) e um backend Node/Express que grava vendas em `sales.json` e expõe relatórios diários.

Abaixo estão três fluxos práticos para rodar o projeto localmente (PowerShell):

## 1) Backend apenas (rápido)
- Quando usar: testar APIs, endpoints administrativos e gerar relatórios.
- Comando:
```powershell
node .\server.js
```
- Quantos scripts/terminais: 1 (Node). O backend escuta por padrão em `http://localhost:3000`.
- Observação: o backend não serve o `index.html` como servidor estático; para visualizar o frontend abra `index.html` no navegador (file://) ou use o servidor estático abaixo.

## 2) Frontend + Backend (recomendado para testes integrados)
- Quando usar: testar UI + chamadas ao backend (envio de vendas, relatórios, download CSV).
- Em um terminal rode o backend:
```powershell
node .\server.js
```
- Em outro terminal rode o servidor estático (serve.ps1) para servir os arquivos do frontend em http://127.0.0.1:8000:
```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```
- Quantos scripts/terminais: 2 (Node backend + serve.ps1). Acesse o frontend em `http://127.0.0.1:8000/`.

## 3) Fluxo de desenvolvimento seguro (serve-dev)
- Quando usar: desenvolver com `SALE_TOKEN` automaticamente configurado e `config.dev.js` gerado.
- Este helper escreve `config.dev.js`, inicia `node server.js` com `SALE_TOKEN` no ambiente e remove o arquivo quando o processo terminar.
- Comando:
```powershell
powershell -ExecutionPolicy Bypass -File .\serve-dev.ps1 -Token 'mysecret' -ServerUrl 'http://127.0.0.1:3000'
```
- Quantos scripts/terminais: 1 command — o script cria `config.dev.js` e inicia `node server.js` internamente.
- Observação: use este fluxo se o frontend depende de `window.SALE_TOKEN` e `window.SERVER_URL` para enviar vendas ao backend.

---

Notas importantes
- Variáveis úteis:
  - `ADMIN_USER` e `ADMIN_PASS` — credenciais Basic Auth para rotas administrativas (padrão: `admin` / `changeme`).
  - `SALE_TOKEN` — se definido no servidor, o endpoint POST `/sale` exige o header `x-sale-token`.
- Segurança: não comite `config.dev.js` nem tokens em repositórios públicos.

Quer que eu:
- Gere um script `start-all.ps1` que abre dois terminais e inicia backend + serve.ps1 automaticamente? (posso criar agora)
- Ou quer que eu adicione instruções rápidas no `index.html`/`script.js` para detectar e usar `window.SERVER_URL` quando presente? 

```
Breve: se quiser tudo funcionando com 1 comando use `serve-dev.ps1`. Para testes integrados use backend + serve.ps1 (2 terminais).
```
# Chinês Lanches — Backend para relatórios

Este repositório contém o site estático e um backend Node/Express opcional que grava vendas em `sales.json` e expõe um endpoint para retornar relatórios diários protegido por Basic Auth.

Como usar

1. Instale dependências (Node.js precisa estar instalado):

   npm install

2. Configure as credenciais do administrador (opcional):

   - Por padrão o servidor usa ADMIN_USER=admin e ADMIN_PASS=changeme. Defina variáveis de ambiente para alterar:

   No PowerShell:

   $env:ADMIN_USER = "seu_usuario"; $env:ADMIN_PASS = "sua_senha"

3. Inicie o servidor:

   npm start

### Local development config and safe dev workflow

The frontend will include the custom header `x-sale-token` when `window.SALE_TOKEN` is defined.
For safe local development we provide a helper that creates a temporary `config.dev.js`, starts the
server with the token in the environment, and removes the file when the server exits.

Recommended usage (PowerShell):

```powershell
.\serve-dev.ps1 -Token 'mysecret' -ServerUrl 'http://127.0.0.1:3000'
```

What this does:
- Writes `config.dev.js` in the project root containing `window.SALE_TOKEN` and `window.SERVER_URL`.
- Starts `node server.js` with `SALE_TOKEN` set in the environment.
- Attempts to remove `config.dev.js` when the server stops.

If you prefer a one-off test, you can also set the values in the browser console:

```javascript
window.SALE_TOKEN = 'mysecret';
window.SERVER_URL = 'http://127.0.0.1:3000';
```

Security note: Never commit secrets or production tokens in client-side files. Use this workflow only
for local development. For production use server-side auth or other secure configuration management.

4. O servidor expõe:

   - POST /sale — grava um objeto de venda JSON (já compatível com o formato salvo pelo front-end).
   - GET /reports/daily?date=YYYY-MM-DD — retorna JSON com vendas e resumo do dia. Requer Basic Auth.

Proteção e notas de segurança

- O endpoint que grava vendas (`/sale`) não é autenticado porque é chamado pelo navegador do cliente. Se o site ficar disponível publicamente e você quiser evitar envios falsos, proteja esse endpoint com um token secreto e atualize o front-end.
   - Para ativar a proteção por token (opcional):
      1. Defina a variável de ambiente `SALE_TOKEN` no servidor antes de iniciar o Node:
          ```powershell
          $env:SALE_TOKEN = 'seu-token-secreto'
          npm start
          ```
      2. No navegador do cliente, defina no Console `window.SALE_TOKEN = 'seu-token-secreto'` para que o front-end envie automaticamente o header `x-sale-token` nas requisições POST /sale.
      3. Sem o header correto, o servidor responderá 403 e o cliente mostrará um aviso.
- O arquivo `sales.json` contém dados sensíveis. Não o exponha via servidor estático sem autenticação.
- Para produção, use HTTPS, defina senhas fortes e restrinja acesso (firewall, VPN) ou mova os relatórios para um serviço autenticado.

Agendar relatório diário no Windows

Você pode agendar uma tarefa no Agendador de Tarefas do Windows para consultar o endpoint `/reports/daily` e salvar o resultado. Exemplo de comando PowerShell (substitua credenciais):

  Invoke-RestMethod -Uri 'http://localhost:3000/reports/daily?date=(Get-Date -Format yyyy-MM-dd)' -Headers @{ Authorization = 'Basic ' + [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes('admin:changeme')) } | ConvertTo-Json | Out-File C:\temp\relatorio-$(Get-Date -Format yyyyMMdd).json
Chinês Lanches — Relatórios de Vendas

Resumo rápido
- Acesse a seção "Relatórios" no menu para ver vendas por mês ou por dia.
- As vendas são salvas localmente no navegador (`localStorage`) sob a chave `chinez_sales_history`.

Funcionalidades adicionadas
- Tabela profissional com Produto / Quantidade / Preço unit. / Subtotal.
- Gráfico de barras (Chart.js) com os itens mais vendidos.
- Histórico paginado com exclusão de vendas e limpeza total (protegidos por senha administrativa local).
- Exportação CSV resumida e detalhada (uma linha por item vendido).
- Auto-sync: envie automaticamente novas vendas para um webhook configurável.
- Webhook manual: botão "Enviar para planilha" envia o JSON das vendas selecionadas.

Como configurar a senha administrativa (client-side)
1. Abra Relatórios -> clique em "Configurar senha".
2. Se não houver senha, defina uma. Se já houver, você pode removê-la.
3. A senha é salva localmente em `localStorage`. IMPORTANTE: essa senha é apenas para evitar exclusões acidentais; não é segura para ambientes públicos.

Como usar o Auto-sync
1. Insira a URL do seu webhook (por exemplo, um endpoint que aceite POST em JSON).
2. Marque a caixa "Auto-sync" e escolha o intervalo em minutos.
3. Novas vendas (desde o último sync) serão enviadas automaticamente.

Opções para Google Sheets / Backends
- Webhook -> Um pequeno backend (Google Apps Script, Integromat/Make, Zapier) pode receber o POST e inserir linhas em uma planilha.
- Se você quiser, posso ajudar a criar:
  - Um Google Apps Script simples que recebe POST JSON e escreve em uma Sheet.
  - Um endpoint Node/Express que salva num banco e serve relatórios.

Sumário diário / agendamento
- A geração automática de relatórios diários precisa de um backend (cron Job). Podemos:
  - Criar um endpoint que gere e envie o CSV diariamente (usando Google Apps Script ou um servidor).
  - Ou usar o Auto-sync para enviar vendas para uma Sheet e depois usar a própria Sheet para gerar sumários automáticos.

Segurança e notas
- Tudo é salvo localmente; se quiser acessibilidade multi-dispositivo, mude para backend + autenticação.
- A senha administrativa é armazenada localmente e não é criptografada; para produção, implemente autenticação real.

Quer que eu:
- (A) Implementar o Google Apps Script para escrever vendas numa Google Sheet (vou criar o script e te fornecer o endpoint), ou
- (B) Melhorar a UI/CSS adicionalmente (por exemplo, animações, ícones), ou
- (C) Ajustar o comportamento do auto-sync (retry/backoff, logs), ou
- (D) Outra coisa — descreva em uma frase.

