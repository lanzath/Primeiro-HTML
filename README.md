# Primeiro HTML
Desafio do módulo de frontend do Bootcamp da Rocketseat

## Criação de uma página frontend básica

Criar um arquivo html que contenha um favicon e um header com 3 links: Comunidade, Email e Telefone.

## Links: 
* `Comunidade`: Link que deve apontar para o convite da comunidade aberta da rocketseat `(https://discordapp.com/invite/gCRAFhc)`
* `Email`: Link que deve chamar o comando de enviar email para o destinatário `oi@rocketseat.com.br`;
* `Telefone`: Link que deve chamar o comando de realizar uma ligação para o número `+5547992078767`. 

__Adicionar um novo link no header chamado Sobre. Essa página deverá mostrar informações referentes a Rocketseat__.

## Informações da Página:
* Uma imagem da logo da empresa;
* O nome da empresa;
* Uma breve descrição da empresa;
* Uma lista com as principais tecnologias utilizadas. Dica: utilize a tag ul para lista e li para o item da lista;
* Links para as redes sociais da empresa (Github, Instagram e Facebook).

__adicionar no header um link chamado Conteúdos. Essa página deve conter um grid onde devem ser mostrados os 3 principais cursos da Rocketseat: Starter, Launchbase e GoStack. Ao clicar em um dos cursos, deve ser aberta uma modal onde um iframe irá carregar as informações do curso selecionado.__

## Informações da Página:
* Título da página;
* Grid com 3 colunas e 1 linha onde serão apresentados os cards dos cursos.

## Informações dos cards:
* Logo do curso ([Starter](https://skylab.rocketseat.com.br/static/64c237ccff807c054339a62d53b4b402.svg), [Launchbase](https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg) e [GoStack](https://skylab.rocketseat.com.br/static/83a178a0653dab1d55e2ed7946465975.svg));
* Título do curso;
* Quantidade de módulos dos cursos;
* Informação se o curso é gratuito ou pago.

## Modal:
O modal deve conter um iframe que busca a página do curso (dica: basta adicionar `starter`, `launchbase` ou `gostack` ao final de `https://rocketseat.com.br/`). Além do botão de fechar o modal, é preciso implementar a funcionalidade de maximizar o modal (dica: utilize a mesma lógica implementada para fechar o `modalOverlay`, mas trabalhe com a classe `modal`).
