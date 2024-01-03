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
  lives -= 1;
  let strike = 0;
  let ball = 0;
  const input = new Array();
  input[0] = Number(document.getElementById("number1").value);
  input[1] = Number(document.getElementById("number2").value);
  input[2] = Number(document.getElementById("number3").value);
  console.log("인풋", input);
  console.log("기회", lives);
  //숫자가 아니면 초기화
  for (let i = 0; i < 3; i++) {
    if (isNaN(input[i])) {
      document.getElementById("number1").value = "";
      document.getElementById("number2").value = "";
      document.getElementById("number3").value = "";
      return;
    }
  }
  //sbo 알고리즘
  input.forEach((num, index) => {
    if (num == answer[index]) {
      strike += 1;
    } else if (answer.includes(num)) {
      ball += 1;
    }
  });
  display_input_result(strike, ball, input);
}

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
}

function display_game_result() {}
