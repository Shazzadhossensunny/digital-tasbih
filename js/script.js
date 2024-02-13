let count = 0;
const showText = document.getElementById("show-text");
const updateText = document.getElementById("update-text");
// suhan Allah
document
  .getElementById("subhanallah-increment-btn")
  .addEventListener("click", function () {
    count++;
    showText.innerText = count;
    if (count === 33) {
      const upDateInfo = (updateText.innerHTML =
        "complete Subhan Allah Go For Alhumdulillah");
      return upDateInfo;
    }
    updateText.innerHTML = " ";
  });
document
  .getElementById("subhanallah-decrement-btn")
  .addEventListener("click", function () {
    if (count === 0) {
      const upDateInfo = (updateText.innerHTML = "complete Subhan Allah Fast");
      return upDateInfo;
    }
    count--;
    showText.innerText = count;
    updateText.innerHTML = " ";
  });

// alhumdulillah
let count2 = 0;
const showText2 = document.getElementById("show-text2");
const updateText2 = document.getElementById("update-text2");
document
  .getElementById("alhumdulliah-increment-btn")
  .addEventListener("click", function () {
    count2++;
    showText2.innerText = count2;
    if (count2 === 33) {
      const upDateInfo = (updateText2.innerHTML =
        "complete Alhumdulillah Go For Allahuakbar");
      return upDateInfo;
    }
    updateText2.innerHTML = " ";
  });
document
  .getElementById("alhumdulliah-decrement-btn")
  .addEventListener("click", function () {
    if (count2 === 0) {
      const upDateInfo = (updateText2.innerHTML =
        "complete Alhumdulillah Fast");
      return upDateInfo;
    }
    count2--;
    showText2.innerText = count2;
    updateText2.innerHTML = " ";
  });

//   allahuakber
let count3 = 0;
const showText3 = document.getElementById("show-text3");
const updateText3 = document.getElementById("update-text3");
document
  .getElementById("allahuakbar-increment-btn")
  .addEventListener("click", function () {
    count3++;
    showText3.innerText = count3;
    if (count3 === 34) {
      const upDateInfo = (updateText3.innerHTML = "complete Allahuakbar");
      return upDateInfo;
    }
    updateText3.innerHTML = " ";
  });
document
  .getElementById("allahuakbar-decrement-btn")
  .addEventListener("click", function () {
    if (count3 === 0) {
      const upDateInfo = (updateText3.innerHTML = "complete Allahuakbar Fast");
      return upDateInfo;
    }
    count3--;
    showText3.innerText = count3;
    updateText3.innerHTML = " ";
  });
//   reset button
document.getElementById("reset-btn").addEventListener("click", function () {
  showText.innerText = 0;
  showText2.innerText = 0;
  showText3.innerText = 0;
  count = 0;
  count2 = 0;
  count3 = 0;
});
