function calculatePoints() {
    const ramSpeed = parseInt(document.getElementById('ramSpeed').value);
    const ramCapacity = parseInt(document.getElementById('ramCapacity').value);
    const hddType = document.getElementById('hddType').value;
    const hddCapacity = parseInt(document.getElementById('hddCapacity').value);
    const cpuCores = parseInt(document.getElementById('cpuCores').value);
    const cpuSpeed = parseFloat(document.getElementById('cpuSpeed').value);
    const uptimeMultiplier = parseFloat(document.getElementById('uptimeMultiplier').value);
    const internetSpeed = parseFloat(document.getElementById('internetSpeed').value);

    let points = ramSpeed * ramCapacity;

    switch(hddType) {
        case 'hdd':
            points += hddCapacity * 1;
            break;
        case 'ssd':
            points += hddCapacity * 2;
            break;
        case 'nvme':
            points += hddCapacity * 3;
            break;
    }

    const referenceCores = 4;
    const referenceClockSpeed = 2.5; // Example reference values
    const normalizedCPU = (cpuCores * cpuSpeed) / (referenceCores * referenceClockSpeed);

    points *= uptimeMultiplier;
    points *= normalizedCPU;
    points *= internetSpeed;

    document.getElementById('result').innerText = `Toplam Puan: ${points}`;
}
