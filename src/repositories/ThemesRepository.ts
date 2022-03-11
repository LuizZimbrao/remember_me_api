import { EntityRepository, Repository } from 'typeorm';
import Theme from '../entities/Theme';

@EntityRepository(Theme)
class ThemesRepository extends Repository<Theme> {}

export default ThemesRepository;
