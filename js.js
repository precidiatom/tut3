var chatStr = ""

function replaceEmojis(){
    chatStr = chatStr.replace(":)", "<img class='emoji' src='img/smile.png' />" );
    chatStr = chatStr.replace(":(", "<img class='emoji' src='img/sad.png' />" );
    chatStr = chatStr.replace(";)", "<img class='emoji' src='img/wink.png' />" );
    chatStr = chatStr.replace(":*", "<img class='emoji' src='img/kiss.png' />" );
    chatStr = chatStr.replace("(y)", "<img class='emoji' src='img/peace.png' />" );
    chatStr = chatStr.replace(":D", "<img class='emoji' src='img/veryhappy.png' />" );
    chatStr = chatStr.replace("D:", "<img class='emoji' src='img/anguish.png' />" );
    
    chatStr = chatStr.replace("boogie", "******" );
    chatStr = chatStr.replace("Apple", "PC" );
    chatStr = chatStr.replace("shit", "doodoo" );
    chatStr = chatStr.replace("dumbass", "silly" );
    chatStr = chatStr.replace("uwu", "get outta here" );
    chatStr = chatStr.replace("help", "get chicken nuggets" );

    
    
    
    
}

function censorWords(){
    
}

/*--------p1Chat ----------*/
function changeChatStr(){
    chatStr = document.getElementById("p1Input").value;
    document.getElementById("p1Input").value = "";

    /*
    if(chatStr == ":)"){
        chatStr = "<img class='emoji' src='img/smile.png' />";
    } else if(chatStr == ":(" ){
        chatStr = "<img class='emoji' src='img/sad.png'/>" ;
    } 
    */
    
    replaceEmojis();
}

/*--------p2Chat ----------*/
function changeChatStr2(){
    chatStr = document.getElementById("p2Input").value;
    document.getElementById("p2Input").value = "";
    
    replaceEmojis();
    
}

/*-------------chatDisplay------*/
function createChat(chatNum){
    var ndiv = document.createElement("div");
    ndiv.innerHTML = chatStr;
  
    if(chatNum == 1){
        ndiv.style.backgroundColor ="#AFA";
    } else if(chatNum == 2){
        ndiv.style.backgroundColor ="#AAF";
    }
    
    ndiv.style.padding = "10px";
    document.getElementById("chatDisplay").appendChild(ndiv);
}

/*--------Interactions-------*/
document.getElementById("p1Input").addEventListener("keyup", function(ev){
   if(ev.keyCode == 13){
       changeChatStr();
       createChat(1);
   } 
});

document.getElementById("p2Input").addEventListener("keyup", function(ev){
   if(ev.keyCode == 13){
       changeChatStr2();
       createChat(2);
   } 
});

