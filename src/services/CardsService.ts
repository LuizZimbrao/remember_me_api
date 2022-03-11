import { getCustomRepository } from 'typeorm';
import CardsRepository from '../repositories/CardsRepository';

interface ICreateCard {
  theme_id: string;
  text_front: string;
  text_back: string;
}

class CardsService {
  async create({ theme_id, text_front, text_back }: ICreateCard) {
    const cardsRepository = getCustomRepository(CardsRepository);

    const card = cardsRepository.create({
      theme_id,
      text_front,
      text_back,
    });

    await cardsRepository.save(card);

    return card;
  }
}

export default new CardsService();
