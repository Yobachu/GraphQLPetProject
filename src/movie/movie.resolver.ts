import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MovieService } from './movie.service';

import { MovieModel } from './models/movie.model';
import { CreateMovieInput } from './input/createMovie.input';
import { GenreModel } from '../genre/models/genre.model';

@Resolver()
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query(() => [MovieModel])
  async getMovies() {
    return this.movieService.getMovies();
  }

  @Mutation(() => MovieModel)
  async createMovie(@Args('data') input: CreateMovieInput) {
    return this.movieService.createMovie(input);
  }

  @Query(() => MovieModel)
  async getOneMovie(@Args('id', { type: () => ID }) id: number) {
    return this.movieService.getOneMovie(id);
  }

  @Mutation(() => MovieModel)
  async addGenreToMovies(
    @Args('movie_id', { type: () => ID }) movie_id: number,
    @Args('genre_id', { type: () => ID }) genre_id: number,
  ) {
    return await this.movieService.addGenreToMovies(movie_id, genre_id);
  }

  @Mutation(() => MovieModel)
  async deleteGenreFromMovie(
    @Args('movie_id', { type: () => ID }) movie_id: number,
    @Args('genre_id', { type: () => ID }) genre_id: number,
  ) {
    return await this.movieService.deleteGenreFromMovie(movie_id, genre_id);
  }

  @Mutation(() => String, { nullable: true })
  async deleteMovie(@Args('id', { type: () => ID }) id: number) {
    return await this.movieService.deleteMovie(id);
  }
}
