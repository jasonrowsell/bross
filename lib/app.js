class Matchers {
  constructor(actual) {
    this.actual = actual;
  }

  toBe(expected) {
    if (expected === this.actual) {
      console.log(`PASS`);
    } else {
      console.log(`FAIL: expected ${this.actual} to be ${expected}`);
    }
  }

  toEqual(expected) {
    if (expected == this.actual) {
      console.log(`PASS`);
    } else {
      console.log(`FAIL: expected ${this.actual} to equal ${expected}`);
    }
  }

  toBeTruthy() {
    if (this.actual) {
      console.log(`PASS`);
    } else {
      console.log(`FAIL: expected value to be truthy but got ${this.actual}`);
    }
  }
}

function expect(actual) {
  return new Matchers(actual);
}

expect(true).toBe(true);
expect(2).toBe(3);
expect(3).toEqual(3);
expect(false).toBeTruthy();
