require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"uisound":[function(require,module,exports){
exports.UISound = (function() {
  function UISound(src) {
    this.src = src;
    this.audio = document.createElement("audio");
    this.audio.setAttribute("webkit-playsinline", "true");
    this.audio.setAttribute("preload", "auto");
    this.audio.src = this.src;
  }

  UISound.prototype.stop = function() {
    this.audio.pause();
    return this.audio.currentTime = 0;
  };

  UISound.prototype.play = function() {
    this.stop();
    return this.audio.play();
  };

  return UISound;

})();


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2hhbmxpL0Ryb3Bib3gvRGVtby9IYXBweUZpc2h5LmZyYW1lci9tb2R1bGVzL3Vpc291bmQuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvaGFubGkvRHJvcGJveC9EZW1vL0hhcHB5RmlzaHkuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBleHBvcnRzLlVJU291bmRcbiAgICBjb25zdHJ1Y3RvcjogKEBzcmMpIC0+XG4gICAgICAgIEBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKVxuICAgICAgICBAYXVkaW8uc2V0QXR0cmlidXRlKFwid2Via2l0LXBsYXlzaW5saW5lXCIsIFwidHJ1ZVwiKVxuICAgICAgICBAYXVkaW8uc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcImF1dG9cIilcbiAgICAgICAgQGF1ZGlvLnNyYyA9IEBzcmNcbiAgICAgICAgXG4gICAgc3RvcDogLT5cbiAgICAgICAgQGF1ZGlvLnBhdXNlKClcbiAgICAgICAgQGF1ZGlvLmN1cnJlbnRUaW1lID0gMFxuICAgIHBsYXk6IC0+XG4gICAgICAgIEBzdG9wKClcbiAgICAgICAgQGF1ZGlvLnBsYXkoKSIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBRElBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7Ozs7QURUWixPQUFPLENBQUM7RUFDRyxpQkFBQyxHQUFEO0lBQUMsSUFBQyxDQUFBLE1BQUQ7SUFDVixJQUFDLENBQUEsS0FBRCxHQUFTLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCO0lBQ1QsSUFBQyxDQUFBLEtBQUssQ0FBQyxZQUFQLENBQW9CLG9CQUFwQixFQUEwQyxNQUExQztJQUNBLElBQUMsQ0FBQSxLQUFLLENBQUMsWUFBUCxDQUFvQixTQUFwQixFQUErQixNQUEvQjtJQUNBLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBUCxHQUFhLElBQUMsQ0FBQTtFQUpMOztvQkFNYixJQUFBLEdBQU0sU0FBQTtJQUNGLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxDQUFBO1dBQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxXQUFQLEdBQXFCO0VBRm5COztvQkFHTixJQUFBLEdBQU0sU0FBQTtJQUNGLElBQUMsQ0FBQSxJQUFELENBQUE7V0FDQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBQTtFQUZFIn0=
