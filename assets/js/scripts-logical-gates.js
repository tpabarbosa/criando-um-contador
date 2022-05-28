const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const digit1 = document.getElementById("digit-1");
const digit2 = document.getElementById("digit-2");

incrementBtn.onclick = increment;
decrementBtn.onclick = decrement;

const BINARY = {
    0: [0, 0, 0, 0],
    1: [0, 0, 0, 1],
    2: [0, 0, 1, 0],
    3: [0, 0, 1, 1],
    4: [0, 1, 0, 0],
    5: [0, 1, 0, 1],
    6: [0, 1, 1, 0],
    7: [0, 1, 1, 1],
    8: [1, 0, 0, 0],
    9: [1, 0, 0, 1],
    empty: [1, 1, 1, 1],
};

const segmentElementsInDigit = {
    1: digit1.children[0].children,
    2: digit2.children[0].children,
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
    const A = BINARY[number][0];
    const B = BINARY[number][1];
    const C = BINARY[number][2];
    const D = BINARY[number][3];
    const E = A && B && C && D;
    //seg-a
    lightSegment(digit, 0, (A || C || (B && D) || (!B && !D)) && !E);
    //seg-b
    lightSegment(digit, 1, (!B || (!C && !D) || (C && D)) && !E);
    //seg-c
    lightSegment(digit, 2, (B || !C || D) && !E);
    //seg-d
    lightSegment(
        digit,
        3,
        ((!B && !D) || (C && !D) || (B && !C && D) || (!B && C) || A) && !E
    );
    //seg-e
    lightSegment(digit, 4, ((!B && !D) || (C && !D)) && !E);
    //seg-f
    lightSegment(digit, 5, (A || (!C && !D) || (B && !C) || (B && !D)) && !E);
    //seg-g
    lightSegment(digit, 6, (A || (B && !C) || (!B && C) || (C && !D)) && !E);
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