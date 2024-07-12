function calculatePoints() {
    const ramSpeed = parseInt(document.getElementById('ramSpeed').value);
    const ramCapacity = parseInt(document.getElementById('ramCapacity').value);
    const hddType = document.getElementById('hddType').value;
    const hddCapacity = parseInt(document.getElementById('hddCapacity').value);
    const cpuCores = parseInt(document.getElementById('cpuCores').value);
    const cpuSpeed = parseFloat(document.getElementById('cpuSpeed').value);
    const uptimeMultiplier = parseFloat(document.getElementById('uptimeMultiplier').value);
    const internetSpeed = parseFloat(document.getElementById('internetSpeed').value);

    const referenceCores = 4;
    const referenceClockSpeed = 2.5; // Example reference values
    const referenceRAMCapacity = 8; // Example reference values
    const referenceRAMSpeed = 2400; // Example reference values

    let storageMultiplier;
    switch(hddType) {
        case 'hdd':
            storageMultiplier = 1;
            break;
        case 'ssd':
            storageMultiplier = 1.5;
            break;
        case 'nvme':
            storageMultiplier = 2;
            break;
    }

    const normalizedCPU = (cpuCores * cpuSpeed) / (referenceCores * referenceClockSpeed);
    const normalizedRAM = (ramCapacity * ramSpeed) / (referenceRAMCapacity * referenceRAMSpeed);

    let cpuMultiplier = normalizedCPU < 10 ? 1 : 1.25;
    let ramMultiplier = ramCapacity < 1 ? 1 : 1.25;

    let allowedStoragePoints = Math.min(hddCapacity, 3000) * storageMultiplier;

    let points = allowedStoragePoints * uptimeMultiplier * cpuMultiplier * ramMultiplier * internetSpeed;

    document.getElementById('result').innerText = `Toplam Puan: ${points}`;
}
