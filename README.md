## Website Performance Optimization portfolio project

### Getting Started:

1. Open the terminal and navigate to project path and type `python -m SimpleHTTPServer 8080` to run local server.
2. Open a browser and visit localhost:8080
3. Install [ngrok](https://ngrok.com/) into the project dir to access localhost remotely.
4. Run `./ngrok http 8080` and copy the public URL ngrok gives you and try running it through PageSpeed Insights.

### Optimization of the project:

#### Part 1: Optimize PageSpeed Insights score for index.html
The following was altered to optimize score for index.html:
* Eliminating render-blockig css by:
  - Making the `style.css` internal in `index.html`.
  - Adding `@media="print"` to the external `print.css` file.
* Reducing images by using Grunt tool and grunt-contrib-imagemin plugin.
* Minifying `index.html` using [willpeavy](https://www.willpeavy.com/minifier/).
* Minifying `perfmatters.js`.
* Removing font link to end of page to prevent css blocking.
* adding `async` to Analytics script. `<script src="http://www.google-analytics.com/analytics.js"></script>`
* Resizing pizza image in `index.html`.

#### Part 2: Optimize Frames per Second in pizza.html
The 60fps was achieved by:
* Moving the `scrollTop` out of the loop.
```
function updatePositions() {
  frame++;
  window.performance.mark("mark_start_frame");

  var items = document.querySelectorAll('.mover');
  // moving scrollTop out of the loop to stop FSL problem
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  for (var i = 0; i < items.length; i++) {
    var phase = Math.sin((scrollTop / 1250) + (i % 5));
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }
```
* Replacing all `document.querySelector()` to `document.getElementById()`.

* Removing pizzasDiv from loop to increase performance
```
var pizzasDiv = document.getElementById("randomPizzas");
for (var i = 2; i < 100; i++) {
  pizzasDiv.appendChild(pizzaElementGenerator(i));
}
```

Time to resize pizzas is less than 5 ms:
* Stop FSL problem and removing code redundancy by creating:
`  var randomPizzas = document.querySelectorAll(".randomPizzaContainer");`
* Simplifying the code by adding the loop
```
for (var i = 0; i < randomPizzas.length; i++) {

  randomPizzas[i].style.width = newWidth+"%";
}
```
 to  the `sizeSwitcher (size)` function.
