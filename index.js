const express = require('express')
const app = express()
const port = 8888

app.get('/', (req, res) => res.send("Hello Tao Le!"))


app.listen(port, () => console.log(`Server running on port ${port} 🔥`));