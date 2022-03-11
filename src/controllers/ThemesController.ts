import { Request, Response } from 'express';
import ThemesService from '../services/ThemesService';

class ThemesController {
  async listAll(req: Request, res: Response) {
    const themes = await ThemesService.findAll();

    return res.json(themes);
  }

  async store(req: Request, res: Response) {
    const { name, description } = req.body;

    const theme = await ThemesService.create({
      name,
      description,
    });

    return res.json(theme);
  }
}

export default new ThemesController();
