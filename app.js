const container = document.getElementById("container");

perguntas.forEach(({ materia, pergunta, resposta }) => {
  const card = document.createElement("article");
  card.classList.add("cartao");

  card.innerHTML = `
    <div class="cartao__conteudo">
      <h3>${materia}</h3>
      <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
      </div>
      <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    card.classList.toggle("mostrando");
  });

  container.appendChild(card);
});
