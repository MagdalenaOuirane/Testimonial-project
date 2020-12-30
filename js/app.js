const list = [
  {
    id: 0,
    name: "John",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?",
  },
  {
    id: 1,
    name: "Sandy",
    text:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
  },
  {
    id: 2,
    name: "Amy",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 3,
    name: "Tyrell",
    text:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 4,
    name: "Wanda",
    text:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const image = document.querySelector("#customer-img");
const customerName = document.querySelector("#customer-name");
const customerText = document.querySelector("#customer-text");

const buttons = document.querySelectorAll(".btn");

let activeIndex = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("nextBtn")) {
      activeIndex++;
    }
    if (activeIndex === list.length) {
      activeIndex = 0;
    }
    image.src = `./img/customer-${[activeIndex]}.jpg`;
    customerName.textContent = list[activeIndex].name;
    customerText.textContent = list[activeIndex].text;

    console.log("Index :", activeIndex);

    if (btn.classList.contains("prevBtn")) {
      activeIndex--;
    }

    if (activeIndex < 0) {
      activeIndex = list.length - 1;
    }
    image.src = `./img/customer-${[activeIndex]}.jpg`;
    customerName.textContent = list[activeIndex].name;
    customerText.textContent = list[activeIndex].text;
    console.log([activeIndex]);
  });
});
