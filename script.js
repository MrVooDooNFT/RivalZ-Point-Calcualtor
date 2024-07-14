function calculatePoints() {
    const ramMultiplier = parseFloat(document.getElementById('ram').value);
    const cpuMultiplier = parseFloat(document.getElementById('cpu').value);
    const internetSpeedMultiplier = parseFloat(document.getElementById('internetSpeed').value);
    const diskTypeMultiplier = parseFloat(document.getElementById('diskType').value);
    const diskCapacity = parseFloat(document.getElementById('diskCapacity').value);

    const basePoints = ramMultiplier * cpuMultiplier * internetSpeedMultiplier * (diskCapacity / 10) * diskTypeMultiplier;
    const pointsAfter24Hours = basePoints * 1.25;

    document.getElementById('result').innerHTML = `
        İlk 24 saat clientiniz saatlik <strong>${basePoints.toFixed(2)}</strong> puan alacaktır, 
        24 saat sonunda puanınız <strong>${pointsAfter24Hours.toFixed(2)}</strong> puana yükselecektir.
    `;
}
