const containerE1 = document.querySelector(".container");
const careers = [ "Ml Engineer" , "Full stack developer", "js developer", "php developer"];
let careerIndex = 0;
let characterIndex = 0;

function updateText(){
    characterIndex++;
    containerE1.innerHTML = `<h1>I'm a ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
   
    
    if(characterIndex > careers[careerIndex].length){
        
        characterIndex=0;
        careerIndex++
        if(careerIndex >= careers.length){
            careerIndex = 0;
        }
    }
    
    setTimeout(updateText, 400);


}
updateText();

