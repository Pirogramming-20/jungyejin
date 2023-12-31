//정답 생성(중복x)
function create_answer() {
  let answer = new Array();
  for (let i = 0; i < 3; i++) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 10);
    } while (answer.includes(randomNumber));
    answer[i] = randomNumber;
  }
  console.log("정답", answer);
  return answer;
}
const answer = create_answer();

//기회 초기화
let lives = 9;

//제출시 숫자가 맞는지 체크
function check_numbers() {
  let strike = 0;
  let ball = 0;
  const input = new Array();
  input[0] = document.getElementById("number1").value;
  input[1] = document.getElementById("number2").value;
  input[2] = document.getElementById("number3").value;
  // console.log("인풋", input);
  // console.log("기회", lives);
  //숫자가 아니면 초기화
  for (let i = 0; i < 3; i++) {
    if (isNaN(input[i]) || input[i] == "") {
      document.getElementById("number1").value = "";
      document.getElementById("number2").value = "";
      document.getElementById("number3").value = "";
      return;
    }
  }
  input[0] = Number(input[0]);
  input[1] = Number(input[1]);
  input[2] = Number(input[2]);
  //sbo 알고리즘
  lives -= 1;
  input.forEach((num, index) => {
    if (num == answer[index]) {
      strike += 1;
    } else if (answer.includes(num)) {
      ball += 1;
    }
  });
  display_input_result(strike, ball, input);
}

//입력 결과 박스 보여주기
function display_input_result(strike, ball, input) {
  const check_result_div = document.createElement("div");
  check_result_div.className = "check-result";

  const left_div = document.createElement("div");
  left_div.className = "left";
  left_div.textContent = input.join(" ");

  const colon_text = document.createTextNode(":");

  const right_div = document.createElement("div");
  right_div.className = "right";

  if (strike == 0 && ball == 0) {
    const out_result = document.createElement("div");
    out_result.className = "out num-result";
    out_result.textContent = "O";
    right_div.appendChild(out_result);
  } else {
    const strike_count = document.createTextNode(` ${strike} `);

    const strike_result = document.createElement("div");
    strike_result.className = "strike num-result";
    strike_result.textContent = "S";

    const ball_count = document.createTextNode(` ${ball} `);

    const ball_result = document.createElement("div");
    ball_result.className = "ball num-result";
    ball_result.textContent = "B";

    right_div.appendChild(strike_count);
    right_div.appendChild(strike_result);
    right_div.appendChild(ball_count);
    right_div.appendChild(ball_result);
  }
  check_result_div.appendChild(left_div);
  check_result_div.appendChild(colon_text);
  check_result_div.appendChild(right_div);

  const parent_div = document.getElementsByClassName("result-display")[0];
  parent_div.appendChild(check_result_div);
  parent_div.scrollTop = parent_div.scrollHeight;

  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  document.getElementById("number3").value = "";
  if (strike == 3 || lives == 0) {
    display_game_result(strike);
  }
}

//게임 결과 띄우기
function display_game_result(strike) {
  let img = document.getElementById("game-result-img");
  if (strike == 3) {
    img.src = "success.png";
  } else if (lives == 0) {
    img.src = "fail.png";
  }
  //버튼 비활성화
  const button = document.querySelector(".submit-button");
  button.disabled = true;
}
