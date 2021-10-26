const button = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const gnb = document.querySelector(".gnb");

// let openStatus = false;

button.addEventListener("click", function () {
  // if (openStatus === false) {
  //   header.classList.add("on");
  //   gnb.classList.add("on");
  //   openStatus = true;
  // } else {
  //   header.classList.remove("on");
  //   gnb.classList.remove("on");
  //   openStatus = false;
  // }

  header.classList.toggle("on");
  gnb.classList.toggle("on");
});

const slide = document.querySelectorAll(".slide");

let current = 0;
let next = current + 1;
let interval;

const slideAnimation = () => {
  interval = setInterval(() => {
    if (next > 2) {
      next = 0;
    }
    // 대기하는 값들은 jump로 통일
    for (let i = 0; i < slide.length; i++) {
      slide[i].classList.remove("in", "out");
      slide[i].classList.add("jump");
    }
    slide[current].classList.remove("in", "jump");
    slide[current].classList.add("out");

    slide[next].classList.remove("out", "jump");
    slide[next].classList.add("in");

    current = next;
    next++;
  }, 2000);
};

slideAnimation();

const playBtn = document.querySelector(".btn-play");
const stopBtn = document.querySelector(".btn-stop");

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

playBtn.addEventListener("click", slideAnimation);
// playBtn.addEventListener("click", function(){
//   slideAnimation();
// });

const tabItem = document.querySelectorAll(".tab-item");
const group = document.querySelectorAll(".group");
for (let i = 0; i < tabItem.length; i++) {
  tabItem[i].addEventListener("click", () => {
    // 클릭한 요소와의 나머지 요소는 비활성화 => active class 삭제
    for (let j = 0; j < tabItem.length; j++) {
      tabItem[j].classList.remove("active");
      group[j].classList.remove("active");
    }
    // 클릭한 요소의 인덱스 번호 => tab, group의 해당 인덱스번호 순서의 요소에 active class를 추가
    tabItem[i].classList.add("active");
    group[i].classList.add("active");
  });
}
