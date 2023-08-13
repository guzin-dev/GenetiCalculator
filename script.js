function calcChance() {
  const mother = document.getElementById("mother").value;
  const father = document.getElementById("father").value;

  const AAchance = document.getElementById("AAchance");
  const Aachance = document.getElementById("Aachance");
  const aachance = document.getElementById("aachance");

  if (mother === "AA" && father === "AA") {
    AAchance.innerHTML = "100%";
    Aachance.innerHTML = "0%";
    aachance.innerHTML = "0%";
  } else if ((mother === "AA" && father === "Aa") || (mother === "Aa" && father === "AA")) {
    AAchance.innerHTML = "50%";
    Aachance.innerHTML = "50%";
    aachance.innerHTML = "0%";
  } else if ((mother === "AA" && father === "aa") || (mother === "aa" && father === "AA")) {
    AAchance.innerHTML = "0%";
    Aachance.innerHTML = "100%";
    aachance.innerHTML = "0%";
  } else if (mother === "Aa" && father === "Aa") {
    AAchance.innerHTML = "25%";
    Aachance.innerHTML = "50%";
    aachance.innerHTML = "25%";
  } else if ((mother === "Aa" && father === "aa") || (mother === "aa" && father === "Aa")) {
    AAchance.innerHTML = "0%";
    Aachance.innerHTML = "50%";
    aachance.innerHTML = "50%";
  } else if (mother === "aa" && father === "aa") {
    AAchance.innerHTML = "0%";
    Aachance.innerHTML = "0%";
    aachance.innerHTML = "100%";
  }
}
