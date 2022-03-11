import { getCustomRepository } from 'typeorm';
import ThemesRepository from '../repositories/ThemesRepository';

interface ICreateTheme {
  name: string;
  description: string;
}

class ThemesService {
  async findAll() {
    const themesRepository = getCustomRepository(ThemesRepository);

    const themes = await themesRepository.find();

    return themes;
  }

  async create({ name, description }: ICreateTheme) {
    const themesRepository = getCustomRepository(ThemesRepository);

    const theme = themesRepository.create({
      name,
      description,
    });

    await themesRepository.save(theme);

    return theme;
  }
}

export default new ThemesService();
