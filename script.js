function calculate() {
    let cpuMultiplier = document.getElementById('cpu').value === '10_or_more' ? 1.25 : 1;
    let ramMultiplier = document.getElementById('ram').value === 'more_than_1' ? 1.25 : 1;

    // AS constant value (this should be defined somewhere based on your requirement)
    let AS = 1;  // Example value, change as needed

    let result1 = AS * cpuMultiplier * ramMultiplier;
    let result2 = result1 * 1.25;

    document.getElementById('result1').innerText = result1.toFixed(2);
    document.getElementById('result2').innerText = result2.toFixed(2);
}
