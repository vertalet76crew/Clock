window.onload = function() {
  function setNumberPosition() {
    let count = 0;
    const numberCollection = document.querySelectorAll(".clock-number");
    for (let i = 0; i < numberCollection.length; i++) {
      count += 30;

      numberCollection[
        i
      ].style.transform = `translate(-50%, 0) rotate(${count}deg)`;

      console.log(numberCollection[i]);
    }
  }
  setNumberPosition();
  const $secArrow = this.document.querySelector(".arrow-sec");
  const $minArrow = this.document.querySelector(".arrow-min");
  const $hourArrow = this.document.querySelector(".arrow-hours");
  console.log($secArrow.style);
  function tick() {
    const dateSec = new Date().getSeconds();
    const dateMin = new Date().getMinutes();
    const dateHour = new Date().getHours();
    const secCount = (360 / 60) * dateSec;
    const minCount = (360 / 60) * dateMin;
    const hourCount = (360 / 12) * dateHour;
    console.log(dateHour, dateMin, dateSec);
    $secArrow.style.transform = `translate(-50%, -100%) rotate(${secCount}deg)`;
    $minArrow.style.transform = `translate(-50%, -100%) rotate(${minCount}deg)`;
    $hourArrow.style.transform = `translate(-50%, -100%) rotate(${hourCount}deg)`;
  }
  setInterval(tick, 1000);
};
