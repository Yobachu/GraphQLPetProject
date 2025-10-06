import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateGenreInput {
  @Field(() => String)
  name: string;
}
