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
    checkFather = document.getElementsByTagName('ul');
    console.log(e.target);

    // console.log("clicked" + e.target);
  }
  // console.log(elListItems);
}())
