# test-timebomb
💥 auto expire feature toggles in your code

### example

```js
import timebomb from 'test-timebomb';

// jest it up (optional - default will simply throw)
timebomb.fail = (test) => expect('💥').toEqual('feature ' + test.result.description + ' has expired')

// yeah thats a ms timestamp for when this test will never pass again
timebomb(1496327291228)(
  test('myFeature', () => {
    expect(feature()).toMatchSnapshot();
  })
)
```

output:
```
//output
FAIL  __tests__/feature.test.js
 ● Test suite failed to run

   expect(received).toEqual(expected)

   Expected value to equal:
     "feature myFeature has expired"
   Received:
     "💥"
```

_default `timebomb.fail` simply throws:_
```
FAIL  __tests__/feature.test.js
 ● Test suite failed to run

   💥feature expired💥
```
