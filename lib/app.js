function expect(actual) {
  return {
    toBe(expected) {
      if (expected === actual) {
        console.log(`PASS`);
      } else {
        console.log(`FAIL: expected ${actual} to be ${expected}`);
      }
    },
  };
}

expect(true).toBe(true);
expect(2).toBe(3);
