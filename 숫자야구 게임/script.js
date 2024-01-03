//정답 생성
function create_answer() {
  let answer = new Array();
  for (let i = 0; i < 3; i++) {
    answer[i] = Math.floor(Math.random() * 10);
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
  input.forEach((num, index) => {
    if (num == answer[index]) {
      strike += 1;
    } else if (answer.includes(num)) {
      ball += 1;
    }
  });
  console.log("s", strike, "b", ball);
}

function display_input_result() {}

function display_game_result() {}
