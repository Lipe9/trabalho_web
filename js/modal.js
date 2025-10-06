// Funções para o modal do produto
const modalProduto = document.getElementById('modalProduto');
const fecharModalProduto = document.getElementById('fecharModalProduto');
const modalImagem = document.getElementById('modalImagem');
const modalNome = document.getElementById('modalNome');
const modalPreco = document.getElementById('modalPreco');
const modalDetails = document.getElementById('modalDetails');
const btnAdicionarCarrinho = document.getElementById('btnAdicionarCarrinho');
const btnComprarAgora = document.getElementById('btnComprarAgora');

// Função para abrir o modal do produto
function abrirModalProduto(produto) {
  modalImagem.src = produto.imagem;
  modalNome.textContent = produto.nome;
  modalPreco.textContent = `R$ ${produto.preco}`;
  modalDetails.textContent = produto.details;
  modalProduto.style.display = 'block';
}

// Função para fechar o modal do produto
function fecharModalProdutoFunc() {
  modalProduto.style.display = 'none';
}

// Event listeners para abrir modal ao clicar no card do produto
document.querySelectorAll('.card-produto').forEach(card => {
  card.addEventListener('click', () => {
    const nome = card.querySelector('h3').textContent;
    const preco = parseFloat(card.querySelector('.preco').textContent.replace('R$', '').trim());
    const imagem = card.querySelector('img').getAttribute('data-imagem') || card.querySelector('img').src;
    const details = card.getAttribute('data-details');
    abrirModalProduto({ nome, preco, imagem, details });
  });
});

// Event listener para fechar modal
fecharModalProduto.addEventListener('click', fecharModalProdutoFunc);

// Fechar modal ao clicar fora
modalProduto.addEventListener('click', (e) => {
  if (e.target === modalProduto) {
    fecharModalProdutoFunc();
  }
});

// Event listener para botão "Adicionar ao Carrinho"
btnAdicionarCarrinho.addEventListener('click', () => {
  const nome = modalNome.textContent;
  const preco = parseFloat(modalPreco.textContent.replace('R$', '').trim());
  const imagem = modalImagem.src;
  adicionarAoCarrinho(nome, preco, imagem);
  fecharModalProdutoFunc();
});

// Event listener para botão "Comprar Agora"
btnComprarAgora.addEventListener('click', () => {
  const nome = modalNome.textContent;
  const preco = parseFloat(modalPreco.textContent.replace('R$', '').trim());
  const imagem = modalImagem.src;
  adicionarAoCarrinho(nome, preco, imagem);
  fecharModalProdutoFunc();
  abrirCarrinho();
});
