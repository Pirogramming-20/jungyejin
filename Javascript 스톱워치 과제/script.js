let start_time;
let stop_time = 0;
let running_mode = false;
let update_interval;

// time 변수를 직접 사용
const time = document.getElementById("time");

// start 버튼 작동
const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => {
  if (!running_mode) {
    running_mode = true;
    start_time = Date.now() - stop_time;
    update();
    update_interval = setInterval(update, 10);
  }
});

// stop 버튼 작동
const stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", () => {
  if (running_mode) {
    running_mode = false;
    clearInterval(update_interval);
    stop_time += Date.now() - start_time;
    update();
  }
  let time = document.getElementById("time").innerText;
  addRecord(time);
});

// reset 버튼 작동
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
  running_mode = false;
  clearInterval(update_interval);
  stop_time = 0;
  update();
});

// time 바꿔주는 함수
function update() {
  const totalMilliseconds = running_mode
    ? stop_time + (Date.now() - start_time)
    : stop_time;
  const elapsedSeconds = Math.floor(totalMilliseconds / 1000);
  const remainingMilliseconds = totalMilliseconds % 1000;
  const formattedTime = `${elapsedSeconds < 10 ? "0" : ""}${elapsedSeconds}:${
    remainingMilliseconds < 10 ? "0" : ""
  }${Math.floor(remainingMilliseconds / 10)}`;
  // 직접 사용한 time 변수를 업데이트
  time.innerText = formattedTime;
}

//기록 추가 함수
function addRecord(time) {
  const recordList = document.getElementById("record-list");

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "custom-checkbox";
  li.appendChild(checkbox);

  const p = document.createElement("p");
  p.textContent = time;
  li.appendChild(p);

  const div = document.createElement("div");
  li.appendChild(div);

  recordList.appendChild(li);
}
