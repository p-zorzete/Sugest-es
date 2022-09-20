function filmes() {
  var listaFilmes = [
    "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1371_.jpg",
    "https://sm.ign.com/ign_br/screenshot/default/14606264-10155013296321840-2088513744740865437-n-1_u4cu.jpg",
    "https://m.media-amazon.com/images/M/MV5BYjNkNmUxZTItYmZiYi00NzVjLWI3NjYtZmY4YjAyMjljOTQyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"
  ];
  for (var i = 0; i < listaFilmes.length; i++) {
    var listaPrimeiro = document.getElementById("lista" + i);
    listaPrimeiro.innerHTML = "<img src=" + listaFilmes[i] + " >";
  }
}

function series() {
  var listaSeries = [
    "https://www.themoviedb.org/t/p/w500/huMehRjXBkFkO9BWPly1635y0J0.jpg",
    "https://i.pinimg.com/originals/75/e5/4c/75e54cabfb389c4397f981ca99ed6db6.jpg",
    "https://img.elo7.com.br/product/zoom/26A86A2/big-poster-serie-demolidor-lo12-tamanho-90x60-cm-marvel.jpg"
  ];
  for (var i = 0; i < listaSeries.length; i++) {
    var listaPrimeiro = document.getElementById("lista" + i);
    listaPrimeiro.innerHTML = "<img src=" + listaSeries[i] + " >";
  }
}

function jogos() {
  var listaJogos = [
    "https://cdn.awsli.com.br/600x450/1206/1206083/produto/147543582/7a16e0aeea.jpg",
    "https://m.media-amazon.com/images/I/71G1RvDnMYL._AC_SL1499_.jpg",
    "https://br.web.img2.acsta.net/pictures/22/03/09/20/01/4564011.jpg"
  ];
  for (var i = 0; i < listaJogos.length; i++) {
    var listaPrimeiro = document.getElementById("lista" + i);
    listaPrimeiro.innerHTML = "<img src=" + listaJogos[i] + " >";
  }
}

function animes() {
  var listaAnimes = [
    "https://i.pinimg.com/564x/84/e8/61/84e861ecef7dcc7c81e43ceef58d6aed.jpg",
    "https://br.web.img3.acsta.net/r_1280_720/pictures/16/02/03/17/11/571106.jpg",
    "https://img.elo7.com.br/product/zoom/1EC54BB/big-poster-do-anime-fullmetal-alchemist-90x-0-cm-lo001-fullmetal-alchemist.jpg"
  ];
  for (var i = 0; i < listaAnimes.length; i++) {
    var listaPrimeiro = document.getElementById("lista" + i);
    listaPrimeiro.innerHTML = "<img src=" + listaAnimes[i] + " >";
  }
}