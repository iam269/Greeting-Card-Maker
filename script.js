document.getElementById("generateCard").addEventListener("click", function () {
  let name = document.getElementById("name").value.trim();
  let theme = document.getElementById("theme").value;
  if (name === "") {
    alert("Please Enter A Name");
    return;
  }
  let cardTitle = document.getElementById("cardTitle");
  let cardMessage = document.getElementById("CardMessage");
  let card = document.getElementById("card");

  let themeMessages = {
    birthday: `🎂Happy Birthday, ${name}!🎉Wishing you a fantastic day`,
    congratulations: `🎉 Congratulations, {name}! 🏆 keep shining and achieving great things!`,
    love: `❤️ Dear ${name}, you are truly special! sending love your way 💖`,
    friendship: `😎Hey ${name}! You are an amazing friend! Stay awesome🌟`,
  };
  cardTitle.innerText = `💌 ${
    theme.charAt(0).toUpperCase() + theme.slice(1)
  } Greeting`;
  cardMessage.innerText = themeMessages[theme];
  card.style.display = "block";
});

//download Card as an Image
document.getElementById("downloadCard").addEventListener("click", function () {
  html2canvas(document.getElementById("card")).then((canvas) => {
    let link = (document = document.createElement("a"));
    link.href = canvas.toDataURL("image/png");
    link.download = "greeting_card.png";
    link.click();
  });
});
