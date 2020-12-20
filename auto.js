// PLEASE READ (at minimum read the bottom)

// Warning for non-programmers: 
// Don't put in code you don't understand because it might not be safe. Remember, "you" are running the code, right? 
// So imagine what could happen if someone else could pretend to be you. Access to passwords....

// So here's how it works:
// 1. Click a random element
// That's it actually.

// Let's try it:
// Clicks on "Air"
// Clicks on "Water"
// BAM! New element.

globalThis.auto_element4 = {
   ms: 100, // Delay, in milliseconds, between each click. Change this if you want.
   internals: {
      interval_id: null,
      last_click: null,
      last_element_count: 4,
      // click_combos_so_far: {}
   },
   start(closeWindow=true, ms=auto_element4.ms) {
      auto_element4.stop(); // Just in case
      auto_element4.internals.interval_id = setInterval(function (internals) {
         let elements = document.querySelectorAll("#element-game-root div.elem")
         let chosen_element = internals.last_click = elements[Math.floor(Math.random() * elements.length)]
         chosen_element.click();
         
         if (closeWindow) document.querySelector(".suggest-close").dispatchEvent?.(new Event("click"));
      }, ms, auto_element4.internals)
   },
   stop() {
      clearInterval(auto_element4.internals.interval_id);
   }
}

let logging = setInterval(() => {
   let elements = document.querySelectorAll("#element-game-root div.elem");
   console.log(
      'Elements: %i\n%c+%i%c elements', 
      elements.length, 
      elements.length > auto_element4.internals.last_element_count ? "color:gray;" : "color:green;",
      elements.length - auto_element4.internals.last_element_count,
      elements.length > auto_element4.internals.last_element_count ? "color:black;" : "color: green;"
   )
}, 10000)


auto_element4.start(); // Default: Closes suggestion box, ms=100
// auto_element4.start(false); // Doesn't close suggestion box
// auto_element4.start(false, 200); // Doesn't close suggestion box and also takes 200 ms instead of 100
// auto_element4.start(true, 50); // Takes only 50ms instead of 100ms.

// Then...
// 1. copy all this code
// 2. go to elemental4 tab
// 3. open the console
//    press F12, if you don't have that try Ctrl+Shift+I or Cmd+Opt+I,
//    then try Right Click > Inspect, then search it up because there's a bunch of different browsers and computers and stuff...
// 4. paste the code and press enter. Tada!
