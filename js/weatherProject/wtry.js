`console.log("hellow God");`
const API_KEY="136fbca9a3f466a82b8e54f354d083cb";
function renderWeatherInfo(data){
   let newPara=document.createElement('p');
   newPara.textContent=`${data?.main?.temp.toFixed(2)}°C`;
  document.body.appendChild(newPara);
  
   
}
async function fetchWeatherDetails(){
   try{
    let city="goa";
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
   const data= await response.json();
   console.log("Weather data:->",data);
   renderWeatherInfo(data);
  
   }
   catch(err){
    //handle the error here

   }

   //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric
}
async function getCustomWeatherDetails(){
  try{
    let latitude=1;
    let longitude=18.3333;
    let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    let data=await result.json();
    console.log(data);

  }
  catch(err){console.log("error Fount:",err);

  }
   
}
 function switchTab(clickedTab){
  apiErrorContainer.remove("active");
  if(clickedTab!=currentTab){
    currentTab.classList.remove("current-tab");
    currentTab=clickedTab;
       


    if(!searchForm.classList.contains("active")){
      userInfoContainer.classList.contains("active");
      grantAccessContainer.classList.remove("active");
      searchForm.classList.add("active");
    }
    else{
      searchForm.classList.remove("active");
      userInfoContainer.classList.remove("active");
      getFormSessionStorage();


    }
    //console.log("Current Tab",currentTab);
  }
 }








function getLocation(){
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(showPosition);
}
else{
  console.log("No geolocation Support");
}
}

function showPosition(position){
  let lat=position.coards.latitude;
  let longi=position.coards.longitude;
  console.log(lat);
  console.log(longi);
}