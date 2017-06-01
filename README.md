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

### why does this exist?

There are many scenarios where code depends on time sensitive implementations. Maybe it's your Firebase or AWS account info, or some Signing Certificates. If your build breaks _before_ any of these scenarios expire they force development to correct before an outage.

Another use case is for features that you know will be deprecated can __loudly__ be set to be cleaned up in your codebase.

