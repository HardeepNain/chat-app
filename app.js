// Humne yhape express aur nodemon package install kr liye h

// express => it is used to create server easily
const express = require("express");

// server is created : Iss line se server create hoga
const app = express();

// GET method with route /
app.get("/" , function(request , response){
    response.send("<h1>Welcome to My app</h1>");
})

app.listen(4000, function () { // idhar hume btana hota hai ki app kis port pe chalu karni hai
  console.log("App started at port 4000 !!");
});

/*
Humne yhape route de rkha h -> /
Aur hmara server yaani app listen ho rha h -> localhost: 4000(given port) pe

Iska matlab h ki hum jaise hi apne broweser me localhost:4000 likhenge 
to humne / route joki by default route hota h uske fxn me response me jo bhi data send kra hoga 
wo hume browser me as a result show hoga

request : jab bhi hum browser pe hit lgate hai yani localhost:4000 likhe ke to iss application of hit lagti hai 
aur jo browser se humne hit lgayi hai wo apne saath request naam ka package leke aata hai jisme diff methods hote hai
*/

/*
Hum pahle server ko chalu krte h fir request maarte h
but agr humne server ko chalur krne ke baad code me kuch bhi changes kiye to
wo changes ko affect me laane ke liye hume pahle server band krna pdega aur fir restart krna pdega
to taki baar baar changes krne par app ko band krke chalu na krna pde isiliye hum nodemon package use krte h
jaise hi code me change hoga ye package server ko apne aap restart kr deta h

command to start app normally : node <filename>
command to start app through nodemon : npm start
*/