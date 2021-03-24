//Elements
const logoIcon = document.getElementById('logo-icon');;
const divBar = document.querySelector('.bar');
const divBarBg = document.querySelector('.bar-bg');
const txt = document.querySelector('.txt');
const txtStart = document.querySelector('.start');
const numOfBreaths = document.getElementById('numBreaths');


let iterationCount = 0;

const animateLogo = () => {
  let logoAnimation = logoIcon.animate([
    {
      width: '50%',
      left: '30%'
    },
    {
      width: '30%',
      left: '20%'
    }
  ], {
    duration: 1000,
    iterations: 1,
    fill: 'forwards'
  });
  logoAnimation.addEventListener('finish', () => {
    divBar.style.display = 'block';
    divBarBg.style.display = 'block';
    txt.style.display = 'block';
    console.log('ended')
    animateBarIn()
  });
}

const animateBarIn = () => {
  const barAnimation = divBar.animate([
    {
      width: '0px'
    },
    {
      width: '74%'
    }
  ], {
    duration: 4000,
    iterations: 1,
    direction: 'alternate',
    easing: 'linear'
  });
  //When animation finish start out-animation
  barAnimation.addEventListener('finish', () => {

    txt.innerHTML = txt.innerHTML === "out" ? 'in' : 'out';

    animateBarOut()
  });

}

const animateBarOut = () => {
  const barAnimation = divBar.animate([
    {
      width: '74%'
    },
    {
      width: '0px'
    }
  ], {
    // timing options
    duration: 4000,
    iterations: 1,
    direction: 'alternate',
    easing: 'linear'
  });
  //When animation finish start in-animation
  barAnimation.addEventListener('finish', () => {
    iterationCount++;
    numOfBreaths.innerText = iterationCount;
    txt.innerHTML = txt.innerHTML === "out" ? 'in' : 'out';
    animateBarIn();
  });

}

const init = () => {
  logoIcon.addEventListener('click', () => {
    txtStart.style.display = "none";
    animateLogo()
  });
  txtStart.addEventListener('click', () => {
    txtStart.style.display = "none";
    animateLogo()
  });
  divBar.style.display = 'none';
  divBarBg.style.display = 'none';
  txt.style.display = 'none';

}


init();