const targetDate = new Date("2024-10-02T23:59:59").getTime();
const updateCountdown = () => {
    const now = new Date().getTime();
    const timeGap = targetDate - now;
    const days = Math.floor(timeGap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeGap % (1000 * 60)) / 1000);
    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    if (timeGap < 0) {
        document.getElementById('countdown').innerHTML = "Coming Soon!!";
    } else{
        setTimeout(updateCountdown, 1000);
    }
};
updateCountdown();

