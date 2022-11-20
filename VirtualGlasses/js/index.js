import { dataGlasses } from "../js/main.js";

const render = () => {
  let text = "";
  for (let i in dataGlasses) {
    text += ` <img onclick="showHang(${i}}" class="col-4" src="${dataGlasses[i].src}">`;
  }
  document.getElementById("vglassesList").innerHTML = text;
  showHang();
};

const showHang = (i) => {
  const glasses = data.filter((element, idx) => idx === i);

  for (let i in dataGlasses) {
    let showGlass = "";
    let showInfo = "";
    if (dataGlasses[i].id === i) {
      showGlass += ` 
        <img src="${dataGlasses[i].virtualImg}">;`;
      showInfo += `
        <p>${dataGlasses[i].brand},${dataGlasses[i].name}(${dataGlasses[i].color})</p>;
        <p>${dataGlasses[i].price},"Stocking"</p>;
        <p>${dataGlasses[i].description}</p>; `;
    }
  }
  document.getElementById("avatar").innerHTML = showGlass;
  document.getElementById("glassesInfo").innerHTML = showInfo;
};

window.onload = () => {
  render();
};
