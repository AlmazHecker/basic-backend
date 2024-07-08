import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get(`*`, (req, res) => {
  console.log(
    `REQUEST BODY START\n
    ${req?.body}\n
    REQUEST BODY END
    `
  );
});

app.listen(5050, () => {
  console.log(`SERVER IS WORKING ON ${5050} PORT!`);
});
