# Gerador-de-frases

Especificação Funcional 

Visão Geral 

Desenvolver um sistema simples que permita ao usuário pesquisar nomes das músicas existentes através do nome do artista, exibindo os resultados disponíveis de forma organizada e acessível. 

Funcionalidades 

Pesquisa por Artista: O usuário digita o nome de um artista para visualizar todas as músicas disponíveis. 

Exibição dos Resultados: Após a busca, o sistema exibe uma lista com os resultados encontrados. 

Interface Simples: Interface com campo de busca, botão de pesquisa e área para exibição dos resultados. 

Tecnologias 

Frontend: HTML e CSS 
Backend: JavaScript 
Fonte de dados: API lyrics 

Requisitos 

Requisitos Funcionais 

RF01: O sistema deve permitir a busca por nome de artista. 

RF03: O sistema deve exibir a lista de resultados da busca. 

RF05: O sistema deve ter um botão para acionar a pesquisa. 

Requisitos Não Funcionais 

RNF01: A aplicação deve ter tempo de resposta inferior a 2 segundos para realizar a busca. 

RNF02: A interface deve ser responsiva e de fácil navegação. 

RNF03: O sistema deve ser desenvolvido utilizando boas práticas de codificação e controle de versão. 

 

Plano de Testes 

Busca por nome de artista 

Objetivo: Verificar se o sistema retorna corretamente uma lista de músicas quando o nome de um artista é pesquisado. 

Passos 

Acessar a interface do sistema. 

Inserir o nome de um artista no campo de pesquisa (exemplo: "Armandinho"). 

Clicar no botão de pesquisa. 

Resultado Esperado 

O sistema exibe uma lista de músicas disponíveis do artista pesquisado. 

Cada item da lista deve mostrar o nome da música. 

O tempo de resposta da busca deve ser inferior a 2 segundos. 

Exibição dos resultados da busca 

Objetivo: Verificar se a lista de resultados é exibida corretamente após a pesquisa de um artista. 

Passos 

Acessar a interface do sistema. 

Inserir o nome de um artista no campo de pesquisa. 

Clicar no botão de pesquisa. 

Verificar se a lista de músicas é exibida com os resultados corretos. 

Resultado Esperado 

O sistema exibe uma lista de músicas relacionadas ao nome do artista. 

A lista de músicas deve ser clara e organizada. 

O tempo de resposta da busca deve ser inferior a 2 segundos. 

Pesquisa sem resultados 

Objetivo: Verificar como o sistema lida com a situação em que não há músicas encontradas para o artista pesquisado. 

Passos 

Acessar a interface do sistema. 

Inserir o nome de um artista que não possui músicas na base de dados (exemplo: "ArtistaInexistente"). 

Clicar no botão de pesquisa. 

Resultado Esperado 

O sistema deve exibir uma mensagem de "Nenhuma música encontrada para o artista: (nome do artista)". 
