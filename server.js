const expres = require('express')//express 형태
const fs = require('fs');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {});