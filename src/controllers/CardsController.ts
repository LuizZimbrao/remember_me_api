import { Request, Response } from 'express';
import CardsService from '../services/CardsService';

class CardsController {
  async store(req: Request, res: Response) {
    const { theme_id, text_front, text_back } = req.body;

    const card = await CardsService.create({
      theme_id,
      text_front,
      text_back,
    });

    return res.json(card);
  }
}

export default new CardsController();
