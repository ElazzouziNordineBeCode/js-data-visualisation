/////////////////// START TARGET DOM SECTION TO PLACE CHART ////////////////////////

// create new element
const elem = document.createElement("canvas");
elem.setAttribute("id", "myChart");

// grab target element reference
const target = document.querySelector("#table1");

// insert the element before target element
target.before(elem);

//////////////////// END TARGET DOM SECTION TO PLACE CHART////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////// START GET BELGIUM VALUE ELEMENT FROM HTML  //////////////////////
function BelgiumValue() {
  // Get row from id table1
  let belgiumRow = document.querySelector("#table1").rows[2].childNodes;
  // Creat a empty list
  let list1 = [];
  // push result on the new list and replace "," by "." in the same time
  belgiumRow.forEach((element) => {
    if (element.innerText != undefined) {
      element.innerText = element.innerText.replace(/,/g, ".");
      list1.push(element.innerText);
    }
  });
  // Deleting the two first result that we do not need it
  list1.shift();
  list1.shift();

  return list1;
}

/////////////////// END GET BELGIUM VALUE ELEMENT FROM HTML  ///////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////// START GET BELGIUM VALUE ELEMENT FROM HTML  //////////////////////
function tabLabels() {
  // Get row labels from id table1
  let tabLabels = document.querySelector("#table1").rows[1].childNodes;
  // Creat a empty list
  let listLabels = [];
  // push result on the new list
  tabLabels.forEach((element) => {
    if (element.innerText != undefined){
        listLabels.push(element.innerText);
    }
  });
  
   // Deleting the two first result that we do not need it
   listLabels.shift();
   listLabels.shift();

  return listLabels;
}

/////////////////// END GET BELGIUM VALUE ELEMENT FROM HTML  ///////////////////////

/////////////////// START CREATING BASIC CHART JS ///////////////////////////////////

function targetTab1() {

  const data = {
    labels: tabLabels(),
    datasets: [
      {
        label: "Belgium",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: BelgiumValue(),
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
}

targetTab1();

/////////////////// END CREATING BASIC CHART JS /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// let belgiumRow = document.getElementById("table1").rows[2].cells[2].innerHTML
