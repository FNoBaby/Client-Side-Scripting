const symbolMap = {
  1: "🍎",
  2: "🫐",
  3: "🍒",
  4: "🍇",
  5: "5",
};

function getRandomSlotValue() {
  const values = ["1", "2", "3", "4", "5"];
  // const values = ["1"];
  // const values = ["5"];
  return values[Math.floor(Math.random() * values.length)];
}

function checkWin(values) {
  return values.every((value) => value === values[0]);
}

function spinMachine() {
  const slots = [
    document.getElementById("slot1"),
    document.getElementById("slot2"),
    document.getElementById("slot3"),
  ];

  let spinDuration = 2000;
  let spinInterval = 100;

  const interval = setInterval(() => {
    slots.forEach((slot) => {
      const randomValue = getRandomSlotValue();
      slot.textContent = symbolMap[randomValue];
    });
  }, spinInterval);

  setTimeout(() => {
    clearInterval(interval);
    const results = slots.map(() => getRandomSlotValue());

    slots.forEach((slot, index) => {
      slot.textContent = symbolMap[results[index]];
    });

    if (checkWin(results)) {
      if (results[0] === "5") {
        window.open("jackpot.html", "_blank", "width=600,height=400");
      } else {
        window.open("small-jackpot.html", "_blank", "width=500,height=500");
      }
    }
  }, spinDuration);
}
