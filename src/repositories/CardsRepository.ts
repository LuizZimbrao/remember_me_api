import { EntityRepository, Repository } from 'typeorm';
import Card from '../entities/Card';

@EntityRepository(Card)
class CardsRepository extends Repository<Card> {}

export default CardsRepository;
