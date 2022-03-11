import {
  Column,
  Entity,
  PrimaryColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('themes')
class Theme {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Theme;
