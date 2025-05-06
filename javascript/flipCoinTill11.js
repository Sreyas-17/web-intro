let heads = 0;
let tails = 0;

while (heads < 11 && tails < 11) {
    let flip = Math.floor(Math.random() * 2); // 0 or 1
    if (flip === 0) {
        heads++;
        console.log(`Heads (${heads})`);
    } else {
        tails++;
        console.log(`Tails (${tails})`);
    }
}

console.log(heads === 11 ? "Heads wins" : "Tails wins");
