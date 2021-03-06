import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  BaseEntity,
  JoinColumn,
} from 'typeorm';
import { Address } from './Address.entity';
import { Cats } from './Cats.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  firstName: string;

  @Column('varchar')
  lastName: string;

  @Column('int')
  age: number;

  @Column('varchar', { length: 10 })
  phone: string;

  @OneToOne(() => Address, (addr) => addr.id)
  @JoinColumn()
  address: Address | null;

  @OneToMany(() => Cats, (cats) => cats.owner)
  cats: Array<Cats>;
}
