const counter = document.getElementById("counter_num");
const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#decrease");
let counter_num = parseInt(counter.textContent);
console.log(counter_num + 3);

increase.addEventListener('click', () => {
    counter_num++;
    counter.textContent = counter_num;
    check_num();
});
decrease.addEventListener("click", () => {
    counter_num--;
    counter.textContent = counter_num;
    check_num();
});
reset.addEventListener("click", () => {
    counter_num = 0;
    counter.textContent = counter_num;
    check_num();
});

function check_num() {
    if (counter_num > 0) {
        counter.style.color = 'green';
        console.log(counter_num + 'is > 0');
    } else if (counter_num < 0) {
        counter.style.color = "red";
        console.log(counter_num + "is < 0");
    } else {
        counter.style.color = "black";
        console.log(counter_num + "is = 0");
    };
}