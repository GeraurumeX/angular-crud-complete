import { Request, Response } from "express";

import pool from "../database";

class GamesController {
  public index(req: Request, res: Response) {
    pool.query("DESCRIBE games");
    res.json("Games");
  }
}

const gamesController = new GamesController();
export default gamesController;
