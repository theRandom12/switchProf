
const searchBar = document.getElementById('search-input');
let gameLi=[]
var returnVal;


let currentGame=null
let gamesLi=games
function insertStr(useString,strIndex,insStr){
    var output = useString.substring(0, strIndex) + insStr + useString.substring(strIndex);
    return output
}

function changeGame(gameNo){
    currentGame=gameNo
    searchBar.disabled=false

}
function generateImage(){
    GrabzIt(key).ConvertHTML("")
}
function validUrl(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
      '((\\d{1,3}\\.){3}\\d{1,3}))'+
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i');
    return !!pattern.test(str);
  }

function ImageExist(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    request.onload = function() {
      status = request.status;
      if (request.status == 200)
      {
        return true;
      } else {
        return false;
      }
    }
  }

function searchGame(){

    if(searchBar.value!=""){
        document.getElementById("searchResult").innerHTML = "";
        document.getElementById("searchResult").hidden=false
        document.getElementById("searchLabel").hidden=true
        let pattern = new RegExp(this.value, 'i');
        let resultSet = gamesLi.filter(item => item.name.match(pattern) && this.value != '');
        for(let j=0;j<resultSet.length;j++){
            let i=resultSet[j]
            let gameText=document.createElement("button")
            gameText.type="button"
            gameText.style="border:none;background:none;color:#6ef0d6";
            gameText.innerHTML=i.name
            gameText.addEventListener("click",function(){addGame(i.name,i.id)})
            document.getElementById("searchResult").appendChild(gameText)

        }
        
    }

    else{
        document.getElementById("searchResult").hidden=true;
    }
}

function addGame(name, id){


    document.getElementById("art"+currentGame).src="https://art.gametdb.com/switch/coverM/US/"+id+".jpg"
    



    document.getElementById("gameName"+currentGame).innerHTML = name
    currentGame=null
    document.getElementById("searchResult").hidden=true
    document.getElementById("searchLabel").hidden=false
    searchBar.disabled=true
    searchBar.value=""
    
    

}

function sleep(milliseconds) {
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
        break;
        }
    }
    }
function start(){

        if(document.getElementById("username").value!=""){
            document.getElementById("name").innerHTML =document.getElementById("username").value 
        }
        if(document.getElementById("desc").value!=""){
            document.getElementById("about").innerHTML=document.getElementById("desc").value
        }
}
function friendCodeRestrict(){
    let docVal=document.getElementById("friendCodeIn").value
    if(document.getElementById("friendCodeIn").value.includes("SW-")==false){
    document.getElementById("friendCodeIn").value="SW-"
    }
    if(docVal.length>=7 && docVal.charAt(7)!="-"){

        document.getElementById("friendCodeIn").value=insertStr(docVal,7,"-")
    }
    if(docVal.length>=12 && docVal.charAt(12)!="-"){

        document.getElementById("friendCodeIn").value=insertStr(docVal,12,"-")
    }
    if(docVal.length==17){
        document.getElementById("friendCode").innerHTML=document.getElementById("friendCodeIn").value
    }
    

}
function borderColorChange(){
    document.getElementById("banner").style.borderColor=document.getElementById("borderColor").value
    document.getElementById("mainDiv").style.borderColor=document.getElementById("borderColor").value
    document.getElementById("mainDiv").style.borderColor=document.getElementById("borderColor").value
    document.getElementById("mainDiv").style.borderColor=document.getElementById("borderColor").value
}
function pfpUrl(){
    if(validUrl(document.getElementById("profileUrl").value)){
        console.log("hi")
        document.getElementById("profilePic").src=document.getElementById("profileUrl").value

    }
}

document.getElementById("username").addEventListener("keyup",start)
document.getElementById("desc").addEventListener("keyup",start)
document.getElementById("friendCodeIn").addEventListener("keyup",friendCodeRestrict)
document.getElementById("borderColor").addEventListener("change",borderColorChange) 
searchBar.addEventListener('keyup',searchGame)
document.getElementById("profileUrl").addEventListener("change",pfpUrl)
document.getElementById("Game1").addEventListener("click",function(){changeGame(1)});
document.getElementById("Game2").addEventListener("click",function(){changeGame(2)});
document.getElementById("Game3").addEventListener("click",function(){changeGame(3)});
