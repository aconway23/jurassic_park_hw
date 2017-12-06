const Dinosaur = require ('../dinosaur.js');
const assert = require ('assert');

describe ('Dinosaur', function() {
  let dinosaur;


beforeEach('Dinosaur', function () {
  dinosaur = new Dinosaur("Velociraptor", 6);
});

it("Should have type", function() {
  assert.strictEqual(dinosaur.type, "Velociraptor");
});

it("Should have a number of offspring per year", function() {
  assert.strictEqual(dinosaur.offspring, 6);
});


});
