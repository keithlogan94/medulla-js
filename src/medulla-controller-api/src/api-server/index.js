import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export const runServer = async () => {
  const app = express();

  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(cors());
};
