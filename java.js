

function Bold() 
{
 
   var  ban =document.getElementById("text").style.fontWeight ;
 
 if(ban == 'bold')
    {
        document.getElementById("text").style.fontWeight = 'normal';
    }
 else
    {
        document.getElementById("text").style.fontWeight = 'bold';
    }
}

function italic(){
    var ita=document.getElementById("text");
    if(ita=="italic"){
        document.getElementById("text").style.fontStyle="none";

    }
    else{
        document.getElementById("text").style.fontStyle="italic";
    }

}

function underline(){
    var under=document.getElementById("text");
    if(under=="underline"){
        document.getElementById("text").style.textDecoration="none";

    }
    else{
        document.getElementById("text").style.textDecoration="underline";
    }

}



//============================================================================================

document.getElementById("left").addEventListener("click",function(){
    document.getElementById("text").style.textAlign="left";
})
document.getElementById("center").addEventListener("click",function(){
    document.getElementById("text").style.textAlign="center";
})
document.getElementById("right").addEventListener("click",function(){
    document.getElementById("text").style.textAlign="right";
})
document.getElementById("normal").addEventListener("click",function(){
    document.getElementById("text").style.textAlign="justify";
})

//================================================================================



document.getElementById('color').addEventListener('blur', function() {
    let colorString = document.getElementById('color').value;
    const textField = document.getElementById('text');
    textField.style.color = colorString;
    
})

//===============================================================================================

document.getElementById("number").addEventListener("click",function(){
    let numberString=document.getElementById("number").value;
    // let getFontSizeValue = parseInt(numberString);

    getFontSizeElement=0;
    const texFixed=document.getElementById("text").innerText;
    texFixed.style.fontSize=numberString+"px";
    
})


// document.getElementById('font-size').addEventListener('blur', function() {
//     let getFontSizeElement = document.getElementById('font-size');
//     let getFontSizeValue = parseInt(getFontSizeElement.value);
//     getFontSizeElement = 0;
//     const textField = document.getElementById('text-field');
//     textField.style.fontSize = getFontSizeValue ;
// });