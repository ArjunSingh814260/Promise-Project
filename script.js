const h1 = document.querySelector(".div1 h1");
const h2 = document.querySelector(".div2 h1");
const h3 = document.querySelector(".div3 h1");

const btn = document.getElementsByClassName("btn")[0];
var i = 1;

const stoper = () => {
  h1.innerHTML = 0;
  h2.innerHTML = 0;
  h3.innerHTML = 0;
  return (i = 0);
};
function myfunction() {
  const prm = new Promise((resolve, reject) => {
    if (btn.innerHTML == "Start") {
      btn.innerHTML = "Stop";

      resolve(i);
    } else if (btn.innerHTML == "Stop") {
      reject();
      btn.innerHTML = "Start";
    }
  });

  prm
    .then((i) => {
      setInterval(() => {
        if (i <= 5) {
          if (btn.innerHTML == "Start") {
            i = stoper();
          } else {
            h1.innerHTML = i;
            i++;
          }
        } else if (i <= 10) {
          if (btn.innerHTML == "Start") {
            i = stoper();
          } else {
            h2.innerHTML = i;
            i++;
          }
        } else if (i <= 15) {
          if (btn.innerHTML == "Start") {
            i = stoper();
          } else {
            h3.innerHTML = i;
            i++;
            console.log(i);
          }
        } else if (i > 15) {
          i = stoper();
          btn.innerHTML = "Start";
        }
      }, 1000);
    })
    .catch(() => {});
}
