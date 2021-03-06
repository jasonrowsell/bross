const chalk = require('chalk');

class Matchers {
  constructor(actual) {
    this.actual = actual;
  }

  toBe(expected) {
    if (expected === this.actual) {
      console.log(chalk.greenBright(`    Pass`));
    } else {
      console.log(
        chalk.redBright(`Fail: Expected ${this.actual} to be ${expected}`)
      );
    }
  }

  toEqual(expected) {
    if (expected == this.actual) {
      console.log(chalk.greenBright(`    Pass`));
    } else {
      console.log(
        chalk.redBright(`Fail: Expected ${this.actual} to equal ${expected}`)
      );
    }
  }

  toBeTruthy() {
    if (this.actual) {
      console.log(chalk.greenBright(`    Pass`));
    } else {
      console.log(
        chalk.redBright(
          `Fail: Expected value to be truthy but got ${this.actual}`
        )
      );
    }
  }

  toBeEmpty() {
    if (this.actual.length === 0) {
      console.log(chalk.greenBright(`    Pass`));
    } else {
      console.log(chalk.redBright(`Fail: Expected ${this.actual} to be empty`));
    }
  }

  toInclude(expected) {
    if (this.actual.includes(expected)) {
      console.log(chalk.greenBright(`    Pass`));
    } else {
      console.log(
        chalk.redBright(`Fail: Expected ${this.actual} to include ${expected}`)
      );
    }
  }
}

function expect(actual) {
  return new Matchers(actual);
}

function describe(suiteName, fn) {
  try {
    console.log('\n');
    console.log(`describe: ${suiteName}`);
    fn();
  } catch (err) {
    console.log(chalk.redBright(`[${err.message.toUpperCase()}]`));
  }
}

function it(testName, fn) {
  console.log(`  it ${chalk.yellow(testName)}`);
  try {
    fn();
  } catch (err) {
    console.log(`    ${chalk.redBright(err)}`);
    throw new Error('test run failed');
  }
}

describe('suite', () => {
  it('passes a test', () => {
    expect(2 + 2).toEqual(4);
  });
  it('fails a test', () => {
    expect(2 + 2).toEqual(3);
  });
});

describe('another suite', () => {
  it('passes a test', () => {
    expect(1).toBe(3);
  });
  it('fails a test', () => {
    expect([1, 2, 3]).toInclude(3);
  });
  it('passes a test', () => {
    expect([1, 2, 3]).toInclude(5);
  });
  it('fails a test', () => {
    expect([1, 2, 3]).toBeEmpty();
  });
  it('passes a test', () => {
    expect(true).toBeTruthy();
  });
  it('fails a test', () => {
    expect(false).toBeTruthy();
  });
});
