(() => {
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// START CHART 1 ///////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  /////////////////// START TARGET DOM SECTION TO PLACE CHART 1 ///////////////////
  const elem = document.createElement("canvas");
  elem.setAttribute("id", "myChart");
  const target = document.querySelector("#table1");
  target.before(elem);
  /////////////////// END TARGET DOM SECTION TO PLACE CHART 1 //////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  /////// START FUNCTION GET ALL DATA AND SPLIT IT IN 3 DIFFERENT TABLE ////////////
  var oTable = document.querySelector("#table1");
  var oTable2 = document.querySelector("#table2");

  function getElement(table, value) {
    let listFinal = [];

    if (value === "years") {
      let ths = table.querySelector("tbody tr").querySelectorAll("th");
      ths.forEach((th) => {
        listFinal.push(th.innerText);
      });
      listFinal.shift();
      listFinal.shift();
    }

    if (value === "countries") {
      let tds = table.querySelectorAll("tbody tr td");

      tds.forEach((td) => {
        if (td.textContent[0].match(/[a-z]/i)) {
          if (td.textContent.includes("(")) {
            td.textContent = td.textContent.substring(0, td.textContent.indexOf("("));
          }
          listFinal.push(td.textContent);
        }
      });
    }

    if (value === "score") {
      let tds = table.querySelectorAll("tbody tr td");
      // Converting ',' to '.'
      tds.forEach((td) => {
        if (!isNaN(td.textContent[0])) {
          listFinal.push(td.textContent.replace(/,/g, "."));
        }
      });
    }

    return listFinal;
  }

  let years = getElement(oTable, "years");
  let countries = getElement(oTable, "countries");
  let score = getElement(oTable, "score");
  ///////// END FUNCTION GET ALL DATA AND SPLIT IT IN 3 DIFFERENT TABLE /////////////
  ///////////////////////////////////////////////////////////////////////////////////
  //////////////////////// START CHART JS VISUALIZATION /////////////////////////////
  function chartJs(years, countries, score) {
    let countryList = [];
    let k = 0;
    for (i in countries) {
      let newScore = [];
      for (j in years) {
        newScore.push(score[k]);
        k++;
      }
      let rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      let obj = {
        label: countries[i],
        backgroundColor: rgb,
        borderColor: rgb,
        data: newScore,
      };
      countryList.push(obj);
    }
    return countryList;
  }
  const labels = getElement(oTable, "years");

  const data = {
    labels: labels,
    datasets: chartJs(years, countries, score),
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };

  ////////////////////////// END CHART JS VISUALIZATION /////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  //////////////////////// START CONNECTING JS WORK WITH HTML ///////////////////////

  const myChart = new Chart(document.getElementById("myChart"), config);
})();

(() => {
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// START CHART 2 ///////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  /////////////////// START TARGET DOM SECTION TO PLACE CHART 2 ///////////////////
  const elem = document.createElement("canvas");
  elem.setAttribute("id", "myChart2");
  const target = document.querySelector("#table2");
  target.before(elem);
  /////////////////// END TARGET DOM SECTION TO PLACE CHART 2 //////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  /////// START FUNCTION GET ALL DATA AND SPLIT IT IN 3 DIFFERENT TABLE ////////////
  var oTable = document.querySelector("#table2");

  function getElement(table, value) {
    let listFinal = [];

    if (value === "years") {
      let ths = table.querySelector("thead tr").querySelectorAll("th");
      ths.forEach((th) => {
        listFinal.push(th.innerText);
      });
      listFinal.shift();
      listFinal.shift();
    }
    console.log(listFinal, "hello")

    if (value === "countries") {
      let tds = table.querySelectorAll("thead tr td");

      tds.forEach((td) => {
        if (td.textContent[0].match(/[a-z]/i)) {
          if (td.textContent.includes("(")) {
            td.textContent = td.textContent.substring(0, td.textContent.indexOf("("));
          }
          listFinal.push(td.textContent);
        }
      });
    }

    if (value === "score") {
      let tds = table.querySelectorAll("thead tr td");
      // Converting ',' to '.'
      tds.forEach((td) => {
        if (!isNaN(td.textContent[0])) {
          listFinal.push(td.textContent.replace(/,/g, "."));
        }
      });
    }

    return listFinal;
  }

  let years = getElement(oTable, "years");
  let countries = getElement(oTable, "countries");
  let score = getElement(oTable, "score");
  ///////// END FUNCTION GET ALL DATA AND SPLIT IT IN 3 DIFFERENT TABLE /////////////
  ///////////////////////////////////////////////////////////////////////////////////
  //////////////////////// START CHART JS VISUALIZATION /////////////////////////////
  function chartJs(years, countries, score) {
    let countryList = [];
    let k = 0;
    for (i in countries) {
      let newScore = [];
      for (j in years) {
        newScore.push(score[k]);
        k++;
      }
      let rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      let obj = {
        label: countries[i],
        backgroundColor: rgb,
        borderColor: rgb,
        data: newScore,
      };
      countryList.push(obj);
    }
    return countryList;
  }
  const labels = getElement(oTable, "years");

  const data = {
    labels: labels,
    datasets: chartJs(years, countries, score),
  };

  const config = {
    type: "bar",
    data: data,
    options: {},
  };

  ////////////////////////// END CHART JS VISUALIZATION /////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  //////////////////////// START CONNECTING JS WORK WITH HTML ///////////////////////

  const myChart = new Chart(document.getElementById("myChart2"), config);
})();

// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////// START CHART 2 ///////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////
// /////////////////// START TARGET DOM SECTION TO PLACE CHART 2 ////////////////////
const elem2 = document.createElement("canvas");
elem2.setAttribute("id", "myChart2");
const target2 = document.querySelector("#table2");
target2.before(elem2);
/////////////////// END TARGET DOM SECTION TO PLACE CHART 2 ///////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////// START FUNCTION GET ALL DATA AND SPLIT IT IN 3 DIFFERENT TABLE ////////////
var oTable2 = document.querySelector("#table2");

function getElement2(table, value) {
  let listFinal2 = [];

  if (value === "years2") {
    let ths2 = table.querySelector("thead tr").querySelectorAll("th");
    ths2.forEach((th2) => {
      listFinal2.push(th2.innerText);
    });
    listFinal2.shift();
    listFinal2.shift();
  }

  if (value === "countries2") {
    let tds2 = table.querySelectorAll("thead tr td");

    tds2.forEach((td2) => {
      if (td2.textContent[0].match(/[a-z]/i)) {
        if (td2.textContent.includes("(")) {
          td2.textContent = td2.textContent.substring(0, td2.textContent.indexOf("("));
        }
        listFinal2.push(td2.textContent);
      }
    });
  }

  if (value === "score2") {
    let tds2 = table.querySelectorAll("thead tr td");
// Converting ',' to '.'
    tds2.forEach((td2) => {
      if (!isNaN(td2.textContent[0])) {
        listFinal2.push(td2.textContent.replace(/,/g, "."));
      }
    });
  }

  return listFinal2;
}

let years2 = getElement2(oTable2, "years2");
let countries2 = getElement2(oTable2, "countries2");
let score2 = getElement2(oTable2, "score2");
///////// END FUNCTION GET ALL DATA AND SPLIT IT IN 3 DIFFERENT TABLE /////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////// START CHART JS VISUALIZATION /////////////////////////////
function chartJs2(years2, countries2, score2) {
  let countryList2 = [];
  let k2 = 0;
  for (i2 in countries2) {
    let newScore2 = [];
    for (j2 in years2) {
      newScore2.push(score2[k2]);
      k2++;
    }
    let rgb2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    let obj2 = {
      label: countries2[i2],
      backgroundColor: rgb2,
      borderColor: rgb2,
      data: newScore2,
    };
    countryList2.push(obj2);
  }
  return countryList2;
}
const labels2 = getElement2(oTable2, "years2");

const data2 = {
  labels: labels2,
  datasets: chartJs2(years2, countries2, score2),
};

const config2 = {
  type: "line",
  data: data,
  options: {},
};

///////////////////////////////////////////////////////////////////////////////////
//////////////////////// START CONNECTING JS WORK WITH HTML ///////////////////////

const myChart2 = new Chart(document.getElementById("myChart2"), config2);

//////////////////////// END CONNECTING JS WORK WITH HTML ////////////////////////
//////////////////////////////////////////////////////////////////////////////////
