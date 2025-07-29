const { createWriteStream } = require("fs");

const stream = createWriteStream("output.txt");

stream.write("hey");
stream.write("stack");

// Cannot write after 'end()' is called.
// stream.end();
// stream.write("fuck");
