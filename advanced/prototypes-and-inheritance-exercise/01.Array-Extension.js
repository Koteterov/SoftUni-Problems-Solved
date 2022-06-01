(function arrayExtension() {
    Array.prototype.last = function () {
      return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
      return this.slice(n);
    };
    Array.prototype.take = function (n) {
      return this.slice(0, n);
    };
    Array.prototype.sum = function () {
      return this.reduce((acc, el) => acc + el, 0);
    };
    Array.prototype.average = function () {
      return this.reduce((acc, el) => acc + el, 0) / this.length;
    };
  })();
  
  let a = [1, 2, 3];
  
  console.log(a.skip(2));
  console.log(a.take(2));
  console.log(a.sum());
  console.log(a.average());
  