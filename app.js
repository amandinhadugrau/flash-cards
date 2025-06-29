const container = document.getElementById("container");

perguntas.forEach(({ materia, pergunta, resposta }) => {
  const card = document.createElement("div");
  card.classList.add("cartao");

  const conteudo = document.createElement("div");
  conteudo.classList.add("cartao__conteudo");

  const frente = document.createElement("div");
  frente.classList.add("face", "frente");
  frente.innerHTML = `<h3>${materia}</h3><p>${pergunta}</p>`;

  const verso = document.createElement("div");
  verso.classList.add("face", "verso");
  verso.innerHTML = `<p>${resposta}</p>`;

  conteudo.appendChild(frente);
  conteudo.appendChild(verso);
  card.appendChild(conteudo);

  card.addEventListener("click", () => {
    card.classList.toggle("virado");
  });

  container.appendChild(card);
});
