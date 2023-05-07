var index = 0;

function changeColors(){
    var colors = ["orange", "white", "green", "purple","aqua","blue","yellow"];
 document.getElementsByTagName("body")[0].style.background = colors[index++];

 if(index > colors.length - 1)
 index = 0;
}