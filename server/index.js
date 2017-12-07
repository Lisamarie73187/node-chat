const express = require('express');
const bodyParser = require('body-parser');

const mc = require('./controllers/messages_controller');

const app = express();
app.use(bodyParser.json());

app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);

app.listen(3000, () => {
    console.log('listening...' + 3000);
});
