function calculatePoints() {
    const ramMultiplier = parseFloat(document.getElementById('ram').value);
    const cpuMultiplier = parseFloat(document.getElementById('cpu').value);
    const internetSpeedMultiplier = parseFloat(document.getElementById('internetSpeed').value);
    const diskTypeMultiplier = parseFloat(document.getElementById('diskType').value);
    const diskCapacity = parseFloat(document.getElementById('diskCapacity').value);

    const basePoints = ramMultiplier * cpuMultiplier * internetSpeedMultiplier * (diskCapacity / 10) * diskTypeMultiplier;
    const pointsFirst24Hours = basePoints * 0.8;
    const pointsAfter24Hours = basePoints;

    const finalPointsFirst24Hours = pointsFirst24Hours > 450 ? 450 * 0.8 : pointsFirst24Hours;
    const finalPointsAfter24Hours = pointsAfter24Hours > 450 ? 450 : pointsAfter24Hours;

    const resultMessage = basePoints > 450 ? 
        `Due to the maximum point limit, your points will be capped at 450.` :
        ``;

    document.getElementById('result').innerHTML = `
        For the first 24 hours, your client will earn <strong>${finalPointsFirst24Hours.toFixed(2)}</strong> points per hour. 
        After 24 hours, your points will be <strong>${finalPointsAfter24Hours.toFixed(2)}</strong> points per hour.
        <br>${resultMessage}
    `;
}
