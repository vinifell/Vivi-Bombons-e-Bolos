let esquerdaBombons = document.querySelector("#setaEsquerdaBombons");
let direitaBombons = document.querySelector("#setaDireitaBombons");
let listaBombons = document.querySelectorAll(".Bombons");
let tamanhoBombons = listaBombons.length;
let contarBombons = 0;

esquerdaBombons.onclick = () => {
    contarBombons = voltar(contarBombons, tamanhoBombons, listaBombons, "active");
}

direitaBombons.onclick = () => {
    contarBombons = passar(contarBombons, tamanhoBombons, listaBombons, "active");
};


function passar(contar, tamanho, lista, active){
    document.querySelector("." + active).classList.remove(active);

    contar = contar >= tamanho - 1 ? 0 : contar + 1;
    lista[contar].classList.add(active);
    return contar;
}

function voltar(contar, tamanho, lista, active){
    document.querySelector("." + active).classList.remove(active);

    contar = contar <= 0 ? tamanho - 1 : contar - 1;
    lista[contar].classList.add(active);
    return contar;
}

let esquerdaPao = document.querySelector("#setaEsquerdaPaoDeMel");
let direitaPao = document.querySelector("#setaDireitaPaoDeMel");
let listaPaesMel = document.querySelectorAll(".PaesMel");
let tamanhoPaesMel = listaPaesMel.length;
let atualPaoDeMel = 0;


direitaPao.onclick = ()=>{
    atualPaoDeMel = passar(atualPaoDeMel, tamanhoPaesMel, listaPaesMel, "activeP");
}

esquerdaPao.onclick = ()=>{
    atualPaoDeMel = voltar(atualPaoDeMel, tamanhoPaesMel, listaPaesMel, "activeP");
}

let esquerdaBolo = document.querySelector("#setaEsquerdaBolos");
let direitaBolo = document.querySelector("#setaDireitaBolos");
let listaBolos = document.querySelectorAll(".Bolos");
let tamanhoBolos = listaBolos.length;
let AtualBolos = 0;

direitaBolo.addEventListener('click', ()=>{
    AtualBolos = passar(AtualBolos, tamanhoBolos, listaBolos, "activeB");
})

esquerdaBolo.addEventListener('click', ()=>{
    AtualBolos = voltar(AtualBolos, tamanhoBolos, listaBolos, "activeB");
})


function tipoDispositivo() {
  const largura = window.innerWidth;

  if (largura <= 767) {
    return "Celular";
  } else if (largura <= 1024) {
    return "Tablet";
  } else {
    return "Computador";
  }
}

console.log(tipoDispositivo());