import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGenreInput } from './input/createGenre.input';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}

  async createGenre(input: CreateGenreInput) {
    return await this.prisma.genre.create({
      data: {
        ...input,
      },
    });
  }
}
