const userTab=document.querySelector("[data-userWeather]");
const searchTab=document.querySelector("[data-searchWeather]");
const userContainer=document.querySelector(".weather-container");
const grantAccessContainer=document.querySelector(".grant-location-container");
const searchForm=document.querySelector("[data-searchForm]");
const loadingScreen=document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-container");
//initially variable needs


let currentTab=userTab;
const API_KEY="136fbca9a3f466a82b8e54f354d083cb";
currentTab.classList.add("current-tab");

// ek kaam or pandibg hai

function switchTab(clickedTab){
    if(clickedTab!=currentTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");


        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            //main pale search tab pr tha, ab your weather tab visible karna hai
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getfromSessionStrage();
        }
    }
}
userTab.addEventListener("click",()=>{
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click",()=>{
    //pass clicked tab as input paramter
    switchTab(searchTab);
});



//check if cordinates are already present in session storage
function  getfromSessionStrage(){
 const localCoordinates=sessionStorage.getItem("user-coordinates");
if(!localCoordinates){
    //agr local coordinates anhi mile
    grantAccessContainer.classList.add("active");

}
else{
    const coordinates=JSON.parse(localCoordinates);
    fetchUserWeatherInfo(coordinates);
}

}

async function fetchUserWeatherInfo(coordinates){
    const {lat,lon}=coordinates;
    //make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //ABI CALL
    try{
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    }
    catch(err){

    }
}