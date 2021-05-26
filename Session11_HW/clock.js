const getRandomHexaColor = () => {
    const hexa = '0123456789abcdef';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += hexa[Math.floor(Math.random() * 16)];

    }
    return color;
};

setInterval(() => {
    document.querySelector('body').style.backgroundColor =
        getRandomHexaColor();
}, 100);


//시계
const clockContent = document.querySelector('.now');

const getCurrentTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    // month = (month < 10) ? '0' + month : month;
    // day = (day < 10) ? '0' + day : day;
    // hour = (hour < 10) ? '0' + hour : hour;
    // minute = (minute < 10) ? '0'+ minute : minute;
    // second = (second < 10) ? '0' + second : second;

    clockContent.innerText = `${year}년 ${month + 1}월 ${day}일 ${hour < 10 ? `0${hour}` : hour}시 ${minute < 10 ? `0${minute}` : minute}분 ${second < 10 ? `0${second}` : second
        }초`;
};

const initClock = () => {
    getCurrentTime();
    setInterval(getCurrentTime, 1000);
};

initClock();

