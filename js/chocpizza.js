(function() {
  console.log("Hey iife");
  var elListItems = document.getElementsByTagName('input');
  addEventListeners(elListItems);

  function addEventListeners(nodeList){
    for (var i=0; i<nodeList.length; i++) {
      nodeList[i].addEventListener("click", handleChecks, false);
    }
  }
  function handleChecks(e){
    if (e.target.checked) {
      console.log("checked");
      e.target.parentElement.style.textDecoration="line-through";
      console.log(e.target.parentElement.textContent);
    }
    else {
      console.log("unchecked");
      e.target.parentElement.style.textDecoration="none";
    }
  }
}())
