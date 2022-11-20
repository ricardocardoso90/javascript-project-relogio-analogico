const digitalElement = document.querySelector('.digital');
const sElement = document.querySelector('.p_s');
const mElement = document.querySelector('.p_m');
const hElement = document.querySelector('.p_h');

//AQUI É A PARTE DO RELÓRIO DIGITAL.
function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    const sDeg = ((360 / 60) * second) - 90;
    const mDeg = ((360 / 60) * minute) - 90;
    const hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
};

//AQUI EU ESTOU ACRESCETANDO UM 0 ANTES DOS NÚMEROS.
function fixZero(time) {
    // if (time < 10) {
    //     return `0${time}`;
    // } else {
    //     return time;
    // };

    return time < 10 ? `0${time}` : time;
};

//AQUI É O TEMPO QUE O RELÓGIO DIGITAL SERÁ EXECUTADO.
setInterval(updateClock, 1000);
updateClock();