import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GenreModel } from '../../genre/models/genre.model';

@ObjectType()
export class MovieModel {
  @Field(() => ID)
  id: number;
  @Field(() => String)
  title: string;
  @Field(() => String)
  description: string;
  @Field(() => String)
  releaseDate: string;
  @Field(() => String)
  director: string;
  @Field(() => [GenreModel])
  genres: GenreModel[];
}
