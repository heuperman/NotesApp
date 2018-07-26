function Expectation(statement) {
  this.statement = statement;
}

Expectation.prototype.toBeTrue = function () {
  if (this.statement) {
    console.log("%c Test passed ", "background: #12cc37; color: white");
  } else {
    console.log("%c Test failed: is not true ", "background: #cc124a; color: white ");
  }
  console.log("------------------------");
};

Expectation.prototype.toEqual = function (statement) {
  if (this.statement === statement) {
    console.log("%c Test passed ", "background: #12cc37; color: white");
  } else {
    console.log('%c Test failed: expected "' + this.statement + '" to be equal to "' + statement + '" ', "background: #cc124a; color: white ");
  }
  console.log("------------------------");
};

var describe = function(scope, callback) {
  console.log(scope);
  callback();
};

var it = function(expected_behaviour, callback) {
  console.log(expected_behaviour);
  callback();
};

var expect = function(statement) {
  return new Expectation(statement);
};
