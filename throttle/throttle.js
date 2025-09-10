// Throttling is a technique that limits the execution of a function to at most once within a specified time interval, regardless of how many times the event is triggered.
//  This is crucial for optimizing performance when dealing with high-frequency events like scrolling, resizing, or user input.

// Throttling ensures that a function executes immediately on the first call, then blocks subsequent calls for a specified delay period. 
// Once the delay expires, the function can be executed again if triggered.

const onScrollDiv = document.querySelector(".content");
const containerDiv = document.querySelector(".container");
// basic label throttling
function throttleFunc(func,dealy) {
    let lastTime = 0;
    return function(...args){
        let now = Date.now();
        if (now - lastTime >= dealy) {
            console.log(this, args)
            func.apply(this, args);
            lastTime = now;
        }
    }
}

const handleScollEventThrottle = (event) => {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const clientHeight = event.target.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    console.log("Scroll Event Triggered!");
    console.log(`Scroll position: ${scrollTop}px`);
    console.log(`Scroll percentage: ${scrollPercentage.toFixed(2)}%`);
}

const funcThrottle = throttleFunc(handleScollEventThrottle, 1000);

onScrollDiv.addEventListener("scroll", funcThrottle);


//  advance technices

function throttleAdnce(func, delay, options = {}) {
  let timeout = null;
  let previous = 0;
  return function (...args) {
    const now = Date.now();
    
    if (!previous && options.leading === false) {
      previous = now;
    }
    
    const remaining = delay - (now - previous);
    
    if (remaining <= 0 || remaining > delay) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(this, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(() => {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  };
}


