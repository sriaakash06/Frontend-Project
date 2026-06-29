function getcity(){


   let city= document.getElementById("searchbox").value;
   document.getElementById("searchbox").value="";

   if(city.trim()==""){
    alert("Please fill the city name");
    return;
   }

   let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}
   &appid=${API_KEY}&units=metric`;
   
   fetch(api)
   .then((response)=>{
    return response.json();
   })

   .then((data)=>{
    console.log(data);

    if (data.cod == "404") {
    alert("City not found!");
    return;
    }

    if(data.cod !== 200){
    alert("City not found!");
    return;
    }

    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent=data.main.temp + "°C";
    document.querySelector(".condition").textContent=data.weather[0].description;
    document.querySelector(".humidityresult").textContent=data.main.humidity+ "%";
    document.querySelector(".windresult").textContent=data.wind.speed + "m/s";
    document.querySelector(".tempresult").textContent =data.main.feels_like + "°C";
    document.querySelector(".visibilityresult").textContent=data.visibility/1000 + "km";


     let icon = data.weather[0].icon;

    document.getElementById("weatherIcon").src =
    `https://openweathermap.org/img/wn/${icon}@2x.png`;


    let sunrise=new Date(data.sys.sunrise*1000);

    document.querySelector(".sunriseresult").textContent=sunrise.toLocaleTimeString();

    let sunset = new Date(data.sys.sunset * 1000);

document.querySelector(".sunsetresult").textContent =sunset.toLocaleTimeString();



   })
   .catch((error)=>{
    console.log(error);
   });

   setInterval(()=>{
    let now=new Date();
    document.querySelector(".date").textContent=now.toLocaleDateString();

    document.querySelector(".time").textContent=now.toLocaleTimeString();
   },1000);

}