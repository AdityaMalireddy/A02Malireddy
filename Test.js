QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});
QUnit.test('Testing our function Calculation', function (assert) {
    assert.strictEqual(cal_logic(7,10,10),100, 'Passed for all the postive numbers');
    assert.throws(cal_logic(1,-10,10), 'Provided 1 negative and 1 postive number as inputs');
    assert.throws(cal_logic(3,-10,-10), 'Provided 2 negative numbers as inputs');
    assert.throws(cal_logic(3,0,0), 'Provided 0 as inputs ');
   
});