import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GenreModel {
  @Field(() => ID)
  id: number;
  @Field(() => String)
  name: string;
}
