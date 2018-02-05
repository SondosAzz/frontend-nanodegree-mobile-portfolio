## Website Performance Optimization portfolio project


### Optimization of the project:

#### Part 1: Optimize PageSpeed Insights score for index.html
The following was altered to optimize score for index.html:
* Eliminating render-blockig css by:
  - Making the `style.css` internal in `index.html`.
  - Adding `@media="print"` to the external `print.css` file.
* Reducing images by using Grunt tool and grunt-contrib-imagemin plugin.
* Minifying `index.html` using [willpeavy](https://www.willpeavy.com/minifier/).
* Minifying `perfmatters.js`.



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







### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
