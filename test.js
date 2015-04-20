var hsl2rgb = require('./')
var test = require('tape')

test('converts [H,S,L] to [R,G,B]', function (t) {
  t.deepEqual(hsl2rgb([0.5, 0.25, 0.5]), [0.375, 0.625, 0.625])
  t.deepEqual(hsl2rgb([1.0, 1.0, 0.5]), [1, 0, 0])
  t.deepEqual(hsl2rgb([1 / 3, 1.0, 0.5]), [0, 1, 0])
  t.deepEqual(hsl2rgb([1, 0.0, 0.5]), [0.5, 0.5, 0.5])
  t.deepEqual(hsl2rgb([0, 0.5, 0.5]), [0.75, 0.25, 0.25])
  t.deepEqual(hsl2rgb([0, 0.5, 0]), [0, 0, 0])
  t.deepEqual(hsl2rgb([0, 0.5, 1]), [1, 1, 1])
  t.end()
})
