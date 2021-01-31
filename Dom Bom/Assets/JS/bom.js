let href = document.querySelector("body > div.row > div > div:nth-child(2) > a:nth-child(1) > span") ;
let protcol = document.querySelector("body > div.row > div > div:nth-child(2) > a:nth-child(2) > span");
let Host =  document.querySelector("body > div.row > div > div:nth-child(2) > a:nth-child(3) > span");
let Port = document.querySelector("body > div.row > div > div:nth-child(2) > a:nth-child(4) > span");
let hostName = document.querySelector("body > div.row > div > div:nth-child(2) > a:nth-child(5) > span");
let appName=document.querySelector("body > div.row > div > div:nth-child(4) > a:nth-child(1) > span");
let appVersion=document.querySelector("body > div.row > div > div:nth-child(4) > a:nth-child(2) > span")
let platform=document.querySelector("body > div.row > div > div:nth-child(4) > a:nth-child(3) > span");
let language=document.querySelector("body > div.row > div > div:nth-child(4) > a:nth-child(4) > span");
let cookieEnabled=document.querySelector("body > div.row > div > div:nth-child(4) > a:nth-child(5) > span");
let height=document.querySelector("body > div.row > div > div:nth-child(6) > a:nth-child(1) > span");
let width=document.querySelector("body > div.row > div > div:nth-child(6) > a:nth-child(2) > span");
let pixelDepth=document.querySelector("body > div.row > div > div:nth-child(6) > a:nth-child(3) > span");
let length=document.querySelector("body > div.row > div > div:nth-child(8) > a:nth-child(1) > span");
let state=document.querySelector("body > div.row > div > div:nth-child(8) > a:nth-child(2) > span");

href.innerHTML = window.location.href;
protcol.innerHTML = window.location.protocol;
Host.innerHTML = window.location.host;
Port.innerHTML = window.location.port;
hostName.innerHTML = window.location.hostname;

appName.innerHTML =window.navigator.appName;
appVersion.innerHTML =window.navigator.appVersion;
platform.innerHTML =window.navigator.platform;
language.innerHTML = window.navigator.language;
cookieEnabled.innerHTML =window.navigator.cookieEnabled;

height.innerHTML = window.screen.height;
width.innerHTML =window.screen.width;
pixelDepth.innerHTML =window.screen.pixelDepth;

length.innerHTML= window.history.length;
state.innerHTML = window.history.state;

