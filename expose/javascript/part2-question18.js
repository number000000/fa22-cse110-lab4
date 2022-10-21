setInterval(curTime, 1000);

function curTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}