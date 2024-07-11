const body = document.querySelector("body");
body.style.backgroundColor = "#526352";

const div = document.createElement("div");
div.classList.add("container");

let button = document.createElement('button');
button.innerText = "Click me to cancel this process";

let min = 1000;
let max = 7000;

body.appendChild(div);
div.appendChild(button);

const randomDelay = () => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const hacking = async () => {
  const ul = document.createElement('ul');
  div.appendChild(ul);

  const steps = [
    "Initializing Hacking",
    "Reading Files",
    "Password Files Detected",
    "Sending all personal files and password to server",
    "Cleaning up"
  ];

  const addBlinkingDots = (element) => {
    const dots = document.createElement('span');
    dots.classList.add('blinking-dots');
    element.appendChild(dots);

    let count = 0;
    setInterval(() => {
      count = (count + 1) % 4;
      dots.textContent = '.'.repeat(count);
    }, 500);
  };

  for (const step of steps) {
    await new Promise(resolve => {
        setTimeout(resolve, randomDelay())
    });
    const li = document.createElement('li');
    li.textContent = step;
    ul.appendChild(li);
    addBlinkingDots(li);
  }
};


button.addEventListener("click", () => {
    alert("You are Trapped...(This button is not working because we don't want you to stop this process)")
});

hacking();
