const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const digit1 = document.getElementById("digit-1");
const digit2 = document.getElementById("digit-2");
const segmentElementsInDigit = {
    1: digit1.children,
    2: digit2.children,
};

incrementBtn.onclick = increment;
decrementBtn.onclick = decrement;

const SEGMENTS_BY_NUMBER = {
    0: [1, 1, 1, 1, 1, 1, 0],
    1: [0, 1, 1, 0, 0, 0, 0],
    2: [1, 1, 0, 1, 1, 0, 1],
    3: [1, 1, 1, 1, 0, 0, 1],
    4: [0, 1, 1, 0, 0, 1, 1],
    5: [1, 0, 1, 1, 0, 1, 1],
    6: [1, 0, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 0, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1],
    empty: [0, 0, 0, 0, 0, 0, 0],
};

let currentNumber = 0;

function increment() {
    if (currentNumber === 99) {
        alert("99 is the highest number");
        return;
    }
    updateNumber(currentNumber + 1);
}

function decrement() {
    if (currentNumber === 0) {
        alert("Zero is the lowest number");
        return;
    }
    updateNumber(currentNumber - 1);
}

function updateNumber(number) {
    currentNumber = number;
    if (number < 10) {
        updateDigit(1, "empty");
        updateDigit(2, number);
    } else if (number >= 10 && number < 100) {
        updateDigit(1, number.toString()[0]);
        updateDigit(2, number.toString()[1]);
    }
}

function updateDigit(digit, number) {
    SEGMENTS_BY_NUMBER[number].forEach((value, segment) => {
        lightSegment(digit, segment, value);
    });
}

function lightSegment(digit, segment, value) {
    if (
        value &&
        !segmentElementsInDigit[digit][segment].classList.contains("on")
    ) {
        segmentElementsInDigit[digit][segment].classList.add("on");
    } else if (!value &&
        segmentElementsInDigit[digit][segment].classList.contains("on")
    ) {
        segmentElementsInDigit[digit][segment].classList.remove("on");
    }
}

updateNumber(currentNumber);