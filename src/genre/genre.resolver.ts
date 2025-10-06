import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { GenreService } from './genre.service';
import { CreateGenreInput } from './input/createGenre.input';
import { GenreModel } from './models/genre.model';

@Resolver()
export class GenreResolver {
  constructor(private readonly genreService: GenreService) {}
  @Mutation(() => GenreModel)
  async createGenre(@Args('data') input: CreateGenreInput) {
    return await this.genreService.createGenre(input);
  }

}
