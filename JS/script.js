const btn = document.getElementById('btnTopo');

if (btn) {
    // mostra/esconde quando rolar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });

    // ação de subir
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

const cardsDesconto = document.querySelectorAll(".card-desconto");

if (cardsDesconto && cardsDesconto.length) {
    cardsDesconto.forEach(function (card) {
        card.addEventListener("click", function () {
            // monta um caminho consistente para /HTML/produto.html sem duplicar 'HTML/HTML'
            const href = location.href;
            let root;
            if (href.includes('/HTML/')) {
                root = href.split('/HTML/')[0];
            } else {
                root = href.replace(/\/[^/]*$/, '');
            }
            const url = root + '/HTML/produto.html';
            window.location.href = url;
        });
    });
}

document.querySelectorAll('.btn-comprar').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); // evita submit ou navegação
    const numero = '55119XXXXXXXX'; // coloque o número completo
    const texto = encodeURIComponent('Olá, gostaria de comprar o produto X');
    const url = `https://wa.me/${numero}?text=${texto}`;
    window.open(url, '_blank', 'noopener,noreferrer'); // abre nova aba segura
  });
});