async function loadCoins() {
  try {
    const res = await fetch("https://api.dexscreener.com/latest/dex/search?q=solana");
    const data = await res.json();

    const coins = data.pairs.slice(0, 9);

    const container = document.getElementById("coins");
    container.innerHTML = "";

    coins.forEach(coin => {
      const div = document.createElement("div");
      div.className = "coin";

      div.innerHTML = `
        <h3>${coin.baseToken.name}</h3>
        <p>Price: $${coin.priceUsd}</p>
        <p>MC: $${coin.fdv || "N/A"}</p>
      `;

      container.appendChild(div);
    });

  } catch (error) {
    console.error("Error loading coins:", error);
  }
}

loadCoins();