import { Field, GraphQLISODateTime, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMovieInput {
  @Field(() => String)
  title: string;
  @Field(() => String)
  description: string;
  @Field(() => GraphQLISODateTime, { nullable: true })
  releaseDate?: Date;
  @Field(() => String)
  director: string;
}
