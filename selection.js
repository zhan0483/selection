var selectState = false;

function checkallbox(thisform){
    for (var i = 0; i < thisform.elements.length; i++)  
    {      
      var checkbox = thisform.elements[i];  
      checkbox.checked = !selectState;  
    }
    selectState = !selectState;
    if (selectState == true){
        document.getElementById('btn_select').value = "Deselect All";
    }else{
        document.getElementById('btn_select').value = "Select All";
    }
    
}


function submitSelection(thisform){
    let data = [];
    let m = 0;
    for (var i = 0; i < thisform.elements.length; i++)  
    {      
      var checkbox = thisform.elements[i];  
      if ( checkbox.type == "checkbox" && checkbox.checked == true && (checkbox.id != "c" && checkbox.id !="v" && checkbox.id !="w" && checkbox.id !="s" && checkbox.id !="d" && checkbox.id !="k" && checkbox.id !="j")){
          data[m] = checkbox.id;
          m+=1;
      }
    }
    var num = GetRandomNum(0,data.length);
    console.log(num);
    var selectResult = document.getElementById(data[num]).value;
    alert("今天去吃 " + selectResult + ' !');
}


function GetRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.floor(Rand * Range));   
}  


function selectChineseFood(thisform){
    var chineseSelectState = document.getElementById('c').checked;
    for (var i = 0; i < thisform.elements.length; i++)  
    {      
        var checkbox = thisform.elements[i];
        if (checkbox.name == "c"){
            checkbox.checked = chineseSelectState;
        }
    }
}
function selectVietnameseFood(thisform){
    var vietnameseSelectState = document.getElementById('v').checked;
    for (var i = 0; i < thisform.elements.length; i++)  
    {      
        var checkbox = thisform.elements[i];
        if (checkbox.name == "v"){
            checkbox.checked = vietnameseSelectState;
        }
    }
}
function selectJapaneseFood(thisform){
    var japaneseSelectState = document.getElementById('j').checked;
    for (var i = 0; i < thisform.elements.length; i++)  
    {      
        var checkbox = thisform.elements[i];
        if (checkbox.name == "j"){
            checkbox.checked = japaneseSelectState;
        }
    }
}
function selectKoreanFood(thisform){
    var koreanSelectState = document.getElementById('k').checked;
    for (var i = 0; i < thisform.elements.length; i++)  
    {      
        var checkbox = thisform.elements[i];
        if (checkbox.name == "k"){
            checkbox.checked = koreanSelectState;
        }
    }
}
function selectWesternFood(thisform){
    var westernSelectState = document.getElementById('w').checked;
    for (var i = 0; i < thisform.elements.length; i++)  
    {      
        var checkbox = thisform.elements[i];
        if (checkbox.name == "w"){
            checkbox.checked = westernSelectState;
        }
    }
}
function selectSnack(thisform){
    var snackSelectState = document.getElementById('s').checked;
    for (var i = 0; i < thisform.elements.length; i++)  
    {      
        var checkbox = thisform.elements[i];
        if (checkbox.name == "s"){
            checkbox.checked = snackSelectState;
        }
    }
}
function selectDessert(thisform){
    var dessertSelectState = document.getElementById('d').checked;
    for (var i = 0; i < thisform.elements.length; i++)  
    {      
        var checkbox = thisform.elements[i];
        if (checkbox.name == "d"){
            checkbox.checked = dessertSelectState;
        }
    }
}