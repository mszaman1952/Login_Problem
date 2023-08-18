const {app, prot, port} = require('./app.js')

app.listen(port, () => {
    console.log(`Server is Running Successfully at http://localhost:${port}`);
});