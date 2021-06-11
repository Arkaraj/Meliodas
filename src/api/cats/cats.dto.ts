import { Gender } from '../../entities/Cats.entity';

export class CatsDto {
  readonly name: string;
  readonly breed: string;
  readonly weight: number;
  readonly gender: typeof Gender.Male;
  readonly colour: string;
  readonly description: string;
  readonly petPoints: number;
  //   readonly isavailable: string;
  readonly ownerId: string;
}
