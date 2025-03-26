document.addEventListener("DOMContentLoaded", function () {
  const botoesPedir = document.querySelectorAll(".aba-produtos button");
  const carrinho = [];

  botoesPedir.forEach((botao) => {
    botao.addEventListener("click", function () {
      const produto = this.parentElement;
      const nomeProduto = produto.querySelector("h2").textContent;
      const precoTexto = produto.querySelector("p:nth-of-type(2)").textContent;
      const preco = parseFloat(
        precoTexto.match(/[0-9]+,[0-9]+/)[0].replace(",", ".")
      );

      // Verifica se o produto já está no carrinho
      const produtoExistente = carrinho.find(
        (item) => item.nome === nomeProduto
      );
      if (produtoExistente) {
        produtoExistente.quantidade += 1;
      } else {
        carrinho.push({ nome: nomeProduto, preco: preco, quantidade: 1 });
      }

      atualizarCarrinho();
    });
  });

  function atualizarCarrinho() {
    let carrinhoTexto = "\nCarrinho:\n";
    let total = 0;
    carrinho.forEach((item) => {
      carrinhoTexto += `${item.quantidade}x ${item.nome} - R$ ${(
        item.preco * item.quantidade
      ).toFixed(2)}\n`;
      total += item.preco * item.quantidade;
    });
    carrinhoTexto += `\nTotal: R$ ${total.toFixed(2)}`;
    alert(carrinhoTexto);
  }
});
