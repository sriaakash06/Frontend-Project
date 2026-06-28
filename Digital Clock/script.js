function updateclock(){
    const now =new Date();
    let hours=now.getHours();
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();
    const ampm=hours>=12 ? "PM":"AM";
    hours=hours%12;
    hours=hours? hours:12;
    const TimeString=
    `${String(hours).padStart(2,"0")}:
    ${String(minutes).padStart(2,"0")}:
    ${String(seconds).padStart(2,"0")}`;
document.getElementById("time").textContent=TimeString;
document.getElementById("ampm").textContent=ampm;
}
updateclock();
setInterval(updateclock,1000);