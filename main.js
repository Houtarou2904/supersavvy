const para = document.getElementById('addPara');
const paraText = para.innerHTML;

if (paraText.length > 40) {
    const newText = paraText.slice(0, 40) + '...<i class="fa fa-solid fa-angle-down">';
    para.innerHTML = newText;
}

document.querySelector(".popupContainer").style.display = "none";
document.querySelector("#popup").style.bottom = "-60vh";

function openPopup(divNumber) {
    const childDiv = document.querySelectorAll(".categoryCard .popupContent")[divNumber - 1];
    const popup = document.querySelector('#popup');
    const popupContent = document.getElementById("openContent");
    popupContent.innerHTML = childDiv.innerHTML;

    const popupContainer = document.querySelector(".popupContainer");
    popupContainer.style.display = "flex";
    setTimeout(() => {
        popup.style.bottom = '0px';
    }, 0);
}

function closePopup() {
    const popupContainer = document.querySelector(".popupContainer");
    const popup = document.querySelector('#popup');
    popup.style.bottom = '-60vh';
    setTimeout(() => {
        popupContainer.style.display = "none";
    }, 300);
}
