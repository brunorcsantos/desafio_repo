import app from "./app.js";

const port = 5000;

 /* app.listen(5000);
console.log("Listening at:// port:%s (HTTP)", 5000) */

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })

