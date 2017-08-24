Array.prototype.Square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.Cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.Average = function () { return this.sum() / this.length; }
Array.prototype.Sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.Even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.Odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }