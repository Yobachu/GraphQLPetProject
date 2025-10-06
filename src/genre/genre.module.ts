import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreResolver } from './genre.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [GenreResolver, GenreService, PrismaService],
})
export class GenreModule {}
