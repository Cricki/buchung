$(document).ready(function(){
    $('select').formSelect();
  });

// function getSelectValue(){
//   var selectedValue = document.getElementById("soll-select").value;
//   console.log(selectedValue);
// }
function getSelectValue(e){
  var value = e.value.toString();
  console.log(value);
  var v1 = typeof value;
  console.log(v1);
  // var id = e.id;
  // console.log(id);
  return value;
}

// Function to check if the selected value is passiva or activa

function checkAccountType(elem){
  if(elem == "Furhpark" || "Rohstoffe" || "Forderungen" || "Bank" || "Kasse" ){
  console.log("Aktiva")
  return "Aktiva";
  }else if(elem == "Eigenkapital" || "Verb." || "Umsatzsteuer"){
    console.log("Passiva");
    return "Passiva";
  }
  return "noType"; 
}

// FUNCTION TO GET A NUMBER 
// Number entered is the number transfered to account

function getSelectValueNumber(e){
  var value = parseFloat(e.value);
  console.log(value);
  var v1 = typeof value;
  console.log(v1);

  return value;
  // var id = e.id;
  // console.log(id);

}


// BRUTTO UND/ODER NETTO GETTER FUNCTIONS
// toggledBrutto/Netto return true when selected
// false when not selected
// will return the boolean value to decide if or which mathematic
// operation must be done
let toggledBrutto = false;
let toggledNetto = false;
function toggleBrutto(){
  if(toggledBrutto == false){
    toggledBrutto = true;
    console.log(toggledBrutto)
    return toggledBrutto;
  }
  if(toggledBrutto == true){
    toggledBrutto = false;
    console.log(toggledBrutto);
    return toggledBrutto;
  }
}

function toggleNetto(){
  if(!toggledNetto){
    toggledNetto = true;
    console.log(toggledNetto);
    return toggledNetto;
  }
  if(toggledNetto){
    toggledNetto = false;
    console.log(toggledNetto);
    return toggledNetto;
  }
}

function main(){
  
  // SET VARIABLES
  const sollName = document.getElementById("soll-select").value.toString();
  const habenName = document.getElementById("haben-select").value.toString();
  const betrag = parseFloat(document.getElementById("betrag").value);
  const brutto = toggledBrutto;
  const netto = toggledNetto;
  let sollType;
  let habenType;
  let bruttoWert = betrag - (betrag*0.19);
  console.log(sollName);
  console.log(habenName);
  console.log(betrag);
  console.log(brutto);
  console.log(netto);

  // SET VARIABLES
  

  // CHECK IF INPUTS ARE ACTIVA OR PASSIVA

  if(sollName == "Eigenkapital" || sollName == "Verb." || sollName == "Umsatzsteuer"){
    sollType = "Passiva";
    console.log(sollType);
  }
  if(sollName == "Fuhrpark" || sollName == "Rohstoffe" || sollName == "Forderungen" ||
  sollName == "Bank" || sollName == "Kasse" || sollName == "Vorsteuer"){
    sollType = "Aktiva";
    console.log(sollType);
  }

  if(habenName == "Eigenkapital" || habenName == "Verb." || habenName == "Umsatzsteuer"){
    habenType = "Passiva";
    console.log(habenType);
  }
  if(habenName == "Fuhrpark" || habenName == "Rohstoffe" || habenName == "Forderungen" ||
  habenName == "Bank" || habenName == "Kasse" || sollName == "Vorsteuer"){
    habenType = "Aktiva";
    console.log(habenType);
  }

  // CHECK ACTIVA AND PASSIVA
  //_____________________________________________________________________________________

  // Chech which Trade is going on
  if((sollType == "Aktiva") && (habenType == "Aktiva")){
      let liSatz = document.createElement("li");
      let textNode = document.createTextNode(sollName + " " + bruttoWert + " an "+ habenName + " " + betrag);
      liSatz.appendChild(textNode);
      console.log(liSatz);
      let buchSatz = document.getElementById("buchungsSatz");
      buchSatz.appendChild(liSatz);
  }

}

