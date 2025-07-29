const { Readable } = require("stream");

class OneToNine extends Readable {
  i = 1;

  // extend Readable's _read method
  _read(size) {
    if (this.i === 10) {
      // escape when i is 10
      this.push(null);
      return;
    }

    this.push(this.i.toString() + " HA \n");

    this.i += 1;
  }
}

const oneToNine = new OneToNine();

oneToNine.pipe(process.stdout);
