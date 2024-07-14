function calculatePoints() {
    const ramMultiplier = parseFloat(document.getElementById('ram').value);
    const cpuMultiplier = parseFloat(document.getElementById('cpu').value);
    const internetSpeedMultiplier = parseFloat(document.getElementById('internetSpeed').value);
    const diskTypeMultiplier = parseFloat(document.getElementById('diskType').value);
    const diskCapacity = parseFloat(document.getElementById('diskCapacity').value);

    const basePoints = ramMultiplier * cpuMultiplier * internetSpeedMultiplier * (diskCapacity / 10) * diskTypeMultiplier;
    const pointsFirst24Hours = basePoints * 0.8;
    const pointsAfter24Hours = basePoints;

    document.getElementById('result').innerHTML = `
        For the first 24 hours, your client will earn <strong>${pointsFirst24Hours.toFixed(2)}</strong> points per hour. 
        After 24 hours, your points will be <strong>${pointsAfter24Hours.toFixed(2)}</strong> points per hour.
    `;
}
