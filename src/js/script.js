const adviceUpdateButton = document.querySelector(".advice-update");
const adviceNumber = document.querySelector(".advice-id");
const adviceDescription = document.querySelector(".advice-description");


async function searchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
      throw new Error("Erro ao buscar conselho");
    }

    const adviceContent = await response.json();
    const adviceId = `advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerText = adviceId;
    adviceDescription.innerText = adviceText;
  } catch (error) {
    console.error("Erro ao buscar conselho:", error);
  }
}

adviceUpdateButton.addEventListener("click", searchAdvice);

searchAdvice();