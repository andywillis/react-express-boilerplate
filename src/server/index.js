/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import path, { dirname } from 'path';
import { readFile, writeFile } from 'fs/promises';
import fsExists from 'fs.promises.exists';
import express from 'express';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import DraftLog from 'draftlog';

DraftLog(console);
const status = console.draft();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/test', (req, res) => {
  res.send('Hallo');
});

app.post('/update', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});
