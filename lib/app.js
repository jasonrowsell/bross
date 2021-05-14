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

  toBe(expected) {
    if (expected === this.actual) {
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
