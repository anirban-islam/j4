function waitingTime(waitingTimes, serialNumber) {
 
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

   
    if (serialNumber <= waitingTimes.length) {
        return "Invalid Input";
    }
    const sum = waitingTimes.reduce((acc, time) => acc + time, 0);
    const atime = sum / waitingTimes.length;
    const ratime = Math.round(atime);
    const rinterview = serialNumber - 1 - waitingTimes.length;
    const wtime = rinterview * ratime;

    return wtime;
}
console.log(waitingTime([7, 8, 3, 4, 5], "9"));