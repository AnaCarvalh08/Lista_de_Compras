let compras = [];

function envio() {
    const nomeItem = document.getElementById("inputCompras").value;
    compras.push(nomeItem);
    console.log(compras);
}

function exibir() {
    const listaCompra = compras.join('<br>');
    document.getElementById("pExibir").innerHTML = listaCompra;
    console.log(listaCompra);
}

function organizacao() {
    compras.sort();
    const listaCompra = compras.join('<br>');
    document.getElementById("pExibir").innerHTML = listaCompra;
    console.log(compras)
}