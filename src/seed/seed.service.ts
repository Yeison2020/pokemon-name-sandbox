import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=2000',
    );

    const pokemonToInsert: { name: string; no: number }[] = [];

    data.results.forEach(async ({ name, url }) => {
      const segment = url.split('/');
      const no = +segment[segment.length - 2];

      pokemonToInsert.push({ name, no });
    });

    // Best way to insert in db arrays to avoid creating 1000 of spans and just do one insertion array
    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed Executed';
  }
}
