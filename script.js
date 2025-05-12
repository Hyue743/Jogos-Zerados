const jogos = [
    {
        nome: "Marvel War of the gems",
        lancamento: 1996,
        concluido: "2024-05-1",
        genero: "Luta",
        subgenero: "Beat 'em up",
        tempo: 60,
        nota: 10,
        plataforma: "SNES: Steam Deck",
        conquistas: "22/84"
      },
      {
        nome: "Ultimate Marvel vs Capcom 3",
        lancamento: 2011,
        concluido: "2024-05-9",
        genero: "Luta",
        subgenero: "Luta 2D",
        tempo: 540,
        nota: 8.2,
        plataforma: "Steam: Steam Deck",
        conquistas: "3/47"
      },
      {
        nome: "Hades",
        lancamento: 2020,
        concluido: "2024-05-15",
        genero: "Ação/RPG",
        subgenero: "Roguelite",
        tempo: 1320,
        nota: 9.7,
        plataforma: "Switch: Steam Deck",
        conquistas: "NA"
      },
      {
        nome: "Senua’s Saga: Hellblade II",
        lancamento: 2024,
        concluido: "2024-06-1",
        genero: "Aventura",
        subgenero: "Aventura psicológica",
        tempo: 560,
        nota: 7,
        plataforma: "XBOX Game Pass: PC",
        conquistas: "7/11"
      },
      {
        nome: "100 Space Cats",
        lancamento: 2024,
        concluido: "2024-06-2",
        genero: "Puzzle",
        subgenero: "Puzzle",
        tempo: 11,
        nota: 6,
        plataforma: "Steam: PC",
        conquistas: "100/100"
      },
      {
        nome: "Lies of P",
        lancamento: 2023,
        concluido: "2024-08-2",
        genero: "Ação/RPG",
        subgenero: "Soulslike",
        tempo: 565,
        nota: 9,
        plataforma: "XBOX Game Pass: PC",
        conquistas: "27/42"
      },
      {
        nome: "X-Men – Mutant Apocalypse",
        lancamento: 1994,
        concluido: "2024-08-6",
        genero: "Luta",
        subgenero: "Beat 'em up",
        tempo: 300,
        nota: 6,
        plataforma: "SNES: Steam Deck",
        conquistas: "5/12"
      },
      {
        nome: "Show do Milhão",
        lancamento: 1999,
        concluido: "2024-08-12",
        genero: "Quiz",
        subgenero: "Talkshow",
        tempo: 30,
        nota: 7,
        plataforma: "Genesis: Steam Deck",
        conquistas: "21/21"
      },
      {
      nome: "Show do Milhão 2",
      lancamento: 2002,
      concluido: "2024-08-13",
      genero: "Quiz",
      subgenero: "Talkshow",
      tempo: 35,
      nota: 7,
      plataforma: "Genesis: Steam Deck",
      conquistas: "8/14"
      },
      {
        nome: "The Elder Scrolls V: Skyrim SE",
        lancamento: 2016,
        concluido: "2024-09-21",
        genero: "RPG",
        subgenero: "RPG de mundo aberto",
        tempo: 9180,
        nota: 9.5,
        plataforma: "Steam: Steam Deck/PC",
        conquistas: "75/75"
        },
    {
        nome: "Super Bomberman 4",
        lancamento: 1996,
        concluido: "2024-10-24",
        genero: "Ação",
        subgenero: "Puzzle arena",
        tempo: 150,
        nota: 10,
        plataforma: "SNES: Steam Deck",
        conquistas: "19/37"
    },
        {
        nome: "Vampire Survivors",
        lancamento: 2021,
        concluido: "?",
        genero: "Ação",
        subgenero: "Roguelite/Bullet Hell",
        tempo: 2685,
        nota: 8,
        plataforma: "EPIC: Steam Deck/PC",
        conquistas: "170/220"
        },
    {
        nome: "Detroit: Become Human",
        lancamento: 2019,
        concluido: "2025-02-26",
        genero: "Aventura",
        subgenero: "Drama interativo",
        tempo: 720,
        nota: 10,
        plataforma: "Steam: PC",
        conquistas: "26/48"
      },
      {
        nome: "Moonlighter",
        lancamento: 2018,
        concluido: "2025-03-25",
        genero: "Ação/RPG",
        subgenero: "Roguelite/Gestão de loja",
        tempo: 1056,
        nota: 7.5,
        plataforma: "GOG: Steam Deck",
        conquistas: "NA"
      },      
    {
      nome: "Tales of Kenzera: Zau",
      lancamento: 2024,
      concluido: "2025-04-05",
      genero: "Ação/Aventura",
      subgenero: "Metroidvania",
      tempo: 669,
      nota: 10,
      plataforma: "EA: PC",
      conquistas: "19/19"
    },
    {
      nome: "Final Fight 3",
      lancamento: 1995,
      concluido: "2025-04-21",
      genero: "Ação",
      subgenero: "Beat 'em up",
      tempo: 57,
      nota: 6.5,
      plataforma: "SNES: Steam Deck",
      conquistas: "18/57"
    },
    ,
   {
      nome: "BioShock Remastered",
      lancamento: 2016,
      concluido: "2025-04-27",
      genero: "FPS",
      subgenero: "FPS com elementos de RPG",
      tempo: 996,
      nota: 8,
      plataforma: "GOG: PC",
      conquistas: "26/65"
    },
    {
      nome: "Balatro",
      lancamento: 2024,
      concluido: "2025-05-11",
      genero: "Estratégia",
      subgenero: "Roguelite/Deckbuilder",
      tempo: 234,
      nota: 8,
      plataforma: "XBOX: PC",
      conquistas: "6/31"
    },

  ];
  
  function renderizarJogos(lista) {
    const container = document.getElementById("jogosContainer");
    container.innerHTML = "";
  
    lista.forEach(jogo => {
      const div = document.createElement("div");
      div.classList.add("jogo");
  
      const card = document.createElement("div");
      card.className = "card";
  
      if (jogo.conquistas.includes("/")) {
        const [feitas, total] = jogo.conquistas.split("/").map(Number);
        if (feitas === total) {
          card.classList.add("platinado");
  
          const selo = document.createElement("span");
          selo.classList.add("selo-platina");
          selo.textContent = "100%";
          card.appendChild(selo);
  
          const trofeu = document.createElement("img");
          trofeu.src = "imagens/trofeu-platina.png";
          trofeu.alt = "Troféu de Platina";
          trofeu.classList.add("trofeu-platina");
          card.appendChild(trofeu);
        }
      }
  
      const titulo = document.createElement("h3");
      titulo.textContent = jogo.nome;
      card.appendChild(titulo);
  
      const detalhes = [
        ["Data de Lançamento", jogo.lancamento],
        ["Concluído em", jogo.concluido],
        ["Gênero", `${jogo.genero} - ${jogo.subgenero}`],
        ["Tempo", `${jogo.tempo} min`],        
        ["Nota", jogo.nota],
        ["Plataforma", jogo.plataforma],
        ["Conquistas", jogo.conquistas]
      ];
  
      detalhes.forEach(([label, valor]) => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${label}:</strong> ${valor}`;
        card.appendChild(p);
      });
  
      div.appendChild(card);
      container.appendChild(div);
    });
  }
  
  function filtrarJogos() {
    const ano = document.getElementById("filtroLancamento").value;
    const nota = document.getElementById("filtroNota").value;
    const tempo = document.getElementById("filtroTempo").value;
  
    let filtrados = jogos.slice();
  
    if (ano !== "todos") {
      filtrados = filtrados.filter(j => j.lancamento == ano);
    }
  
    if (nota !== "todas") {
      const notaMin = parseFloat(nota);
      filtrados = filtrados.filter(j => j.nota >= notaMin);
    }
  
    if (tempo === "curto") {
      filtrados.sort((a, b) => a.tempo - b.tempo);
    } else if (tempo === "longo") {
      filtrados.sort((a, b) => b.tempo - a.tempo);
    }
  
    renderizarJogos(filtrados);
  }
  
  document.getElementById("filtroLancamento").addEventListener("change", filtrarJogos);
  document.getElementById("filtroNota").addEventListener("change", filtrarJogos);
  document.getElementById("filtroTempo").addEventListener("change", filtrarJogos);
  
  document.getElementById("adicionarJogo").addEventListener("submit", e => {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const lancamento = parseInt(document.getElementById("lancamento").value);
    const concluido = document.getElementById("concluido").value;
    const genero = document.getElementById("genero").value;
    const subgenero = document.getElementById("subgenero").value;
    const tempo = parseInt(document.getElementById("tempo").value);
    const nota = parseFloat(document.getElementById("nota").value);
    const plataforma = document.getElementById("plataforma").value;
    const conquistas = document.getElementById("conquistas").value;
  
    jogos.push({
      nome,
      lancamento,
      concluido,
      genero,
      subgenero,
      tempo,
      nota,
      plataforma,
      conquistas
    });
  
    document.getElementById("adicionarJogo").reset();
    filtrarJogos();
  });
  function popularFiltroNota() {
    const filtro = document.getElementById("filtroNota");
    const notasUnicas = [...new Set(jogos.map(j => j.nota))].sort((a, b) => b - a);
  
    filtro.innerHTML = '<option value="todas">Todas</option>';
    notasUnicas.forEach(nota => {
      const option = document.createElement("option");
      option.value = nota;
      option.textContent = nota;
      filtro.appendChild(option);
    });
  }
  function popularFiltroLancamento() {
    const filtro = document.getElementById("filtroLancamento");
    const anosUnicos = [...new Set(jogos.map(j => j.lancamento))].sort((a, b) => b - a);
  
    filtro.innerHTML = '<option value="todos">Todos</option>';
    anosUnicos.forEach(ano => {
      const option = document.createElement("option");
      option.value = ano;
      option.textContent = ano;
      filtro.appendChild(option);
    });
  }
  
  popularFiltroLancamento();
  popularFiltroNota();
  renderizarJogos(jogos);