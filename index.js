// make me smarter
function timebomb(when) {
  return function(test) {
    if (when <= Date.now()) {
      return timebomb.fail(test);
    }
  };
}

// change me
timebomb.fail = test => {
  throw new Error('💥feature expired💥');
};

// use me
module.exports = timebomb;
