//how to compare two JSON have the same properties without order
var obj1 = {name: "prabhu" , age: 25};
var obj2 = {age: 25, name: "prabhu"};

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log(flag);

//rest countries show all countries flag in console
var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true);

request.send();

request.onload = function(){ 
    var data = JSON.parse(request.response);
    console.log(data);
    for ( var i=0; i<data.length; i++)
    {
        console.log(data[i].flags);
    }
}

//print all countries name,region,subregion,population 


var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true);

request.send();

request.onload = function(){ 
    var data = JSON.parse(request.response);
    console.log(data);
    for ( var i=0; i<data.length; i++)
    {
        console.log(data[i].name);
        console.log(data[i].region);
        console.log(data[i].subregion);
        console.log(data[i].population);
    }
}