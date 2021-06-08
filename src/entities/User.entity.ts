import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Address } from './Address.entity';
import { Cats } from './Cats.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar')
  firstName: string;

  @Column('varchar')
  lastName: string;

  @Column('int')
  age: number;

  @Column('varchar', { length: 9 })
  phone: string;

  @OneToOne(() => Address, (addr) => addr.id)
  address: Address;

  @OneToMany(() => Cats, (cats) => cats.owner)
  cats: Array<Cats>;
}
