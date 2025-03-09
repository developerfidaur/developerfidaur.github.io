let input = document.querySelector('.input').querySelector('input');

let buttons = document.querySelectorAll('.append');
let operators = document.querySelectorAll('.operator');
for (let i of buttons) {
  i.addEventListener("click", () => {
    playSound('select-sound-121244 (mp3cut.net).mp3');
    // checking that there will not consecutive operators
    let current_elem = i;
    let last_elem = input.value[input.value.length - 1];
    for (let i = 0; i < operators.length; i++) {
      if (operators[i].innerHTML == last_elem) {
        var last_operator = operators[i];

      }
    }
    if (current_elem.classList.contains('operator') && last_operator) {

      return;

    }
    else {
      input.value += i.innerHTML;

    }
  })
}
document.querySelector('.ac').addEventListener("click", () => {
  playSound('deleteall-94021 (mp3cut.net).mp3');
  input.value = "";
})
document.querySelector('.del').addEventListener("click", () => {
  playSound('pop-up-something-160353 (mp3cut.net).mp3');
  input.value = input.value.slice(0, -1);/*Extracts from the beginning and ends extraction before ending.
  if 2nd argument(endIndex) is negative then it treats the argument like :- str.length+endIndex.
  So here endIndex is :- input.value.length-1;
  i.e. it is removing the last character from the string.
  */
})
document.querySelector('.output').addEventListener("click", () => {
  if (isNaN(input.value[input.value.length - 1]) || isNaN(input.value[0])) {

    playSound('beep-warning-6387.mp3');
    return;
  }// checking first or last input is a number or not.
  else {
    playSound('click-47609 (1) (mp3cut.net).mp3');
    input.value = eval(input.value);

  }
})

function playSound(url) {
  let audio = new Audio(url);
  audio.play();
}