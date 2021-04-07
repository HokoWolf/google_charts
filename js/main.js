function showInfo(elem) {
    var parentElem = elem.parentElement;
    parentElem.getElementsByClassName("column")[0].style.boxShadow = "0 0 4px black";
    parentElem.getElementsByClassName("column")[1].style.boxShadow = "0 0 4px black";

    var info = parentElem.parentElement.getElementsByClassName("column-window")[0];
    info.style.display = "block";
}

function closeInfo(elem) {
    var parentElem = elem.parentElement;
    parentElem.getElementsByClassName("column")[0].style.boxShadow = "none";
    parentElem.getElementsByClassName("column")[1].style.boxShadow = "none";
  
    var info = parentElem.parentElement.getElementsByClassName("column-window")[0];
    info.style.display = "none";
}

// zusammenbrechen - обанкротиться или ослабеть
// der Onkel - дядя
// die Rosinen - изюм
// brechen - ломать, разрушать, расбивать
// 
