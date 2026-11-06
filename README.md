# Medallia Digital Test Lab

Site estático de demonstração para testes do Medallia Digital.

## Estrutura
- `index.html`: página inicial.
- `tickets.html`: lista de tickets e painel de detalhes.
- `styles.css`: estilos e layout responsivo.
- `app.js`: dados fictícios e interações da lista.

## Como testar localmente
Abra `index.html` no navegador. Não há dependências ou etapa de build.

## Como publicar para o time com GitHub Pages
1. Crie um repositório no GitHub.
2. Envie os quatro arquivos para a raiz do repositório.
3. Acesse **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`, depois salve.
6. Aguarde a publicação e compartilhe a URL do GitHub Pages com o time.

## Inserir o Medallia Digital
Os arquivos `index.html` e `tickets.html` têm um comentário indicando onde inserir o snippet fornecido pela sua instância Medallia. Ajuste o código conforme a configuração e as instruções do seu ambiente.

## Observações
- Os tickets são dados fictícios definidos em `app.js`.
- Não há backend: alterações não são persistidas e não existe autenticação.
- Não use dados pessoais, informações reais de clientes ou conteúdo confidencial em um repositório público.
- Para uso interno, prefira um repositório privado e confirme se a política da empresa permite publicar o snippet e os testes no GitHub Pages.
