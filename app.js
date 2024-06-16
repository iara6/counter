let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
//instead of selecting btns one-by-one using their specific classes

console.log(btns);//displays NodeList
//kinda similar to an array
//so forEach can be used too!

btns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    
    if(styles.contains('decrease')){
      count--;
    } else if(styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    if(count > 0) {
      value.style.color = "green";
    }
    if(count < 0) {
      value.style.color = "red";
    }
    if(count === 0) {
      value.style.color = "var(--clr-grey-1)";
    }
    value.textContent = count;
  })
});