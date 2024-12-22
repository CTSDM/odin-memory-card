function getRandomizedArray(arrayToBeRandomized) {
    const arr = arrayToBeRandomized.slice();
    for (let i = arr.length - 1; i >= 0; --i) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

function getCardsNumber(difficulty) {
    // used in dev
    if (typeof difficulty !== "string")
        throw new Error("The difficulty must be a string");

    switch (difficulty.toLowerCase()) {
        case "easy":
            return 8;
        case "normal":
            return 16;
        case "god":
            return 32;
        default:
            throw new Error("The difficulty value is not found");
    }
}

function getSubsetElements(arrLength, arr) {
    const indexSelectedArr = [];
    while (indexSelectedArr.length < arrLength) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (indexSelectedArr.indexOf(randomIndex) === -1)
            indexSelectedArr.push(randomIndex);
    }
    const subArr = arr.filter((_, index) =>
        indexSelectedArr.indexOf(index) === -1 ? false : true,
    );
    return subArr;
}

export { getRandomizedArray, getCardsNumber, getSubsetElements };
