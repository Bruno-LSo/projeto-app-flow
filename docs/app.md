# Projeto Gerenciador de Podcasts

## Nome do aplicativo

Podcast Manager

## Descrição

Um app ao estilo netflix, o qual possa centralizar diferentes episódios de podcasts separados por categorias

## Domínio

podcasts feitos em vídeo

## Features

1 - listar os episódios dos podcasts em sessões de categorias;
    1.1 -[saúde, fitness, mentalidade, humor]
2 - Filtrar episódios por nome do podcast

## Como

1 -  Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, o link, as categorias.

- GET: retorna a lista de episódios

-response:

```js
[
{
    podcastName: "Flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    category: ["saúde", "esporte", "bodybuilding"]

},
{
    podcastName: "Flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    category: ["esporte", "corrida"]

}
]
```

GET: retorna lista de episódios baseado em um parâmetro enviado pelo client do podcast
