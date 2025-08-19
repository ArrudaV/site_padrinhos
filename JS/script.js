const btn = document.getElementById('btnTopo');

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

const cardsDesconto = document.querySelectorAll(".card-desconto")

cardsDesconto.forEach(function (card) {
    card.addEventListener("click", function () {
        window.location.href = "HTML/produto.html";
    });
})