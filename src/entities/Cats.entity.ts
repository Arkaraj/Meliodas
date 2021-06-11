import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User.entity';

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

@Entity()
export class Cats extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  breed: string;

  @Column('float')
  weight: number;

  @Column({ type: 'enum', enum: Gender, default: Gender.Male })
  gender: string;

  @Column('varchar')
  colour: string;

  @Column('text')
  description: string;

  @Column('int', { default: 0 })
  petPoints: number;

  @Column('boolean', { default: true })
  isavailable: boolean;

  @Column('varchar', { nullable: true })
  ownerId: string | null;
  @ManyToOne(() => User, (usr) => usr.cats)
  @JoinColumn({ name: 'ownerId' })
  owner: User;
}
