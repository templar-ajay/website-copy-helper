const purify = require("purify-css");
const fs = require("fs");

// Read HTML content from a file
fs.readFile("source.html", "utf8", (htmlErr, htmlContent) => {
  if (htmlErr) {
    console.error("Error reading HTML file:", htmlErr);
    return;
  }

  // Read CSS content from a file
  fs.readFile("source.css", "utf8", (cssErr, cssContent) => {
    if (cssErr) {
      console.error("Error reading CSS file:", cssErr);
      return;
    }

    // Purify HTML with the provided CSS
    purify(htmlContent, cssContent, function (purifiedResult) {
      // Write the purified CSS to a file
      fs.writeFile("output.css", purifiedResult, (writeErr) => {
        if (writeErr) {
          console.error("Error writing CSS to file:", writeErr);
        } else {
          console.log("CSS has been written to output.css");
        }
      });
    });
  });
});
