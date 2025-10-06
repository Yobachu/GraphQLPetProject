import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMovieInput } from './input/createMovie.input';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}
  async getMovies() {
    return this.prisma.movie.findMany({
      include: {
        genres: true,
      },
    });
  }

  async createMovie(input: CreateMovieInput) {
    return this.prisma.movie.create({
      data: { ...input },
    });
  }

  async getOneMovie(id: number) {
    return this.prisma.movie.findUnique({
      where: { id: Number(id) },
      include: {
        genres: true,
      },
    });
  }

  async addGenreToMovies(movie_id: number, genre_id: number) {
    return this.prisma.movie.update({
      where: {
        id: Number(movie_id),
      },
      data: {
        genres: {
          connect: {
            id: Number(genre_id),
          },
        },
      },
      include: {
        genres: true,
      },
    });
  }

  async deleteGenreFromMovie(movie_id: number, genre_id: number) {
    return this.prisma.movie.update({
      where: {
        id: Number(movie_id),
      },
      data: {
        genres: {
          disconnect: {
            id: Number(genre_id),
          },
        },
      },
      include: {
        genres: true,
      },
    });
  }

  async deleteMovie(movie_id: number) {
    const movie = await this.prisma.movie.findUnique({
      where: { id: Number(movie_id) },
    });
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    await this.prisma.movie.deleteMany({
      where: {
        id: Number(movie_id),
      },
    });
    return 'deleted';
  }
}
