$(document).ready(function () {
  new WOW().init();
  const send = document.querySelector('#telegram_send')
  const Token = `5407879672:AAGADmXxFGa4O5up09HrLnvWN4H3HN6tYVM`
  const id = `1754647300`

  send.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userName = document.querySelector('#contact-name').value
    const userNumber = document.querySelector('#contact-email').value
    const userOption = document.querySelector('#option').value
    const mytext = `🏚 Manzil=${userOption}%0A👤ISMI=${userName}%0A📶 NOMERI:>${userNumber}%0A📶ALOQAGA:${userName+"::KILENT"}`

    try {
      fetch(`https://api.telegram.org/bot${Token}/sendMessage?chat_id=${id}&text=${mytext}`, {
        method: 'post'
      })
        .then(response => {
          
          alert("Tezzda alloqaga chiqamiz")
          
        })

    } catch (error) {
      console.log('error :>> ', error);

    }

  })
});

VanillaTilt.init(document.querySelectorAll(".about-card"), {
  max: 25,
  speed: 500,
  glare: true,
  "max-glare": 1,
});
VanillaTilt.init(document.querySelectorAll(".flipInX"), {
  max: 25,
  speed: 500,
  glare: true,
  "max-glare": 1,
});

var textWrapper = document.querySelector('.font .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.font .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeInOutExpo",
    duration: 1500
  }).add({
    targets: '.font .letters',
    opacity: [0, 1],
    translateX: [40, 0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 2000,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.font',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
