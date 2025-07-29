const { createReadStream } = require("fs");

const stream = createReadStream("./input.txt");

stream.on("data", (chunk) => {
  console.log("chunk: ", chunk);
});
