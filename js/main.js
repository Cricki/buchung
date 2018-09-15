M.AutoInit();

$(document).ready(function(){
    $('select').formSelect();
  });


let toggledBrutto = false;
let toggledNetto = false;
const buchSatzList = document.querySelector("#buchungsSatz");
const buchungsUl = document.querySelectorAll("#buchungsSatz li");
const form = document.querySelector("#myForm");
console.log(buchungsUl);
let betr;

// Load all EventListener

loadEventListeners();

// Load all event listeners

function loadEventListeners(){
        // DOM load event
        //document.addEventListener("DOMContentLoaded", getTasks);
        // Add task event
        form.addEventListener("submit", getValues);

}


// Add getValues
function getValues(e){


    // FORM SELECT VARIABLES
    const sollName = document.getElementById("soll-select").value.toString();
    const habenName = document.getElementById("haben-select").value.toString();
    const brutto = toggledBrutto;
    const netto = toggledNetto;
    let sollType;
    let habenType;
    let bruttoWert = betrag - (betrag*0.19);
    const moneyVal = betr;


    // Variables for inserting into T-Konto Table
    let t_konto_soll;
    let t_konto_haben;
    t_konto_soll = "s"+sollName;
    t_konto_haben = "h"+habenName;

    sollType = checkAccountType(sollName);
    habenType = checkAccountType(habenName);
    console.log(sollType);
    console.log(habenType);



//-------------------------------------------------------------------------
    // CREATING THE HTML LI WHICH IS THEN ADDED TO THE UL
    // create li element
    const li = document.createElement("li");
    // li.className = "collection-item";
    //Create textnode and append to li
    li.appendChild(document.createTextNode(sollName + " " + parseFloat(moneyVal) + " an "  + parseFloat(moneyVal)+ " " + habenName));
    // create new link element
    const link = document.createElement("a");
    li.appendChild(link);
    // append li to ul
    buchSatzList.appendChild(li);

    // ADDING TO UL
    buchSatzList.appendChild(li);
//-------------------------------------------------------------------------

    // LI for Soll Account
    const liSoll = document.createElement("li");
    liSoll.appendChild(document.createTextNode(moneyVal.toString()));
    document.getElementById(t_konto_soll).appendChild(liSoll);


    // LI for Haben Account
    const liHaben = document.createElement("li");
    liHaben.appendChild(document.createTextNode(moneyVal.toString()));
    document.getElementById(t_konto_haben).appendChild(liHaben);

//-------------------------------------------------------------------------
    // console.log(brutto);
    // console.log(netto);
    e.preventDefault();
   // $('.modal').modal(close());

}



// BRUTTO UND/ODER NETTO GETTER FUNCTIONS
// toggledBrutto/Netto return true when selected
// false when not selected
// will return the boolean value to decide if or which mathematic
// operation must be done

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


// FUNCTION TO GET A NUMBER 
// Number entered is the number transfered to account

function getSelectValueNumber(e){
  let value = parseFloat(e.value);
  console.log(value);
  //let v1 = typeof value;
  //console.log(v1);
  betr = value;
  return value;
  // var id = e.id;
  // console.log(id);

}


// Function to check if the selected value is passiva or activa

function checkAccountType(elem){
  if(elem == "Fuhrpark" ||elem ==  "Rohstoffe" ||elem ==  "Forderungen" ||elem ==  "Bank" ||elem ==  "Kasse" 
    || elem ==  "Vorsteuer" ){
    return "Aktiva";
  }else if(elem == "Eigenkapital" ||elem ==  "Verb." ||elem ==  "Umsatzsteuer"){
    return "Passiva";
  }
  return "noType"; 
}