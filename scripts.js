
function Generator (){
    var generate = Math.round(Math.random()* 10000000000);
    
    var length = 15,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        const show = document.querySelectorAll("input")[0].value = retVal
        
}

var generateButton = document.querySelectorAll("button")[1];


const item = document.querySelectorAll("input")[0];
function copy (){
       var nav = navigator.clipboard.writeText(item.value);   

       document.querySelectorAll("Button")[0].innerHTML = "Copied"

       
       setTimeout("document.location.reload();", 4000) 
       alert("Copied Generated Password to clipboard");
}


// var copied = document.querySelectorAll("Button")[0].addEventListener(onclick, function(){
//     });

// const Http = new XMLHttpRequest();
// const url = __dirname + "/index.html"
// Http.open("GET", url);
// Http.send()


// var form = document.querySelectorAll("forme")[0];
// form.preventDefault()