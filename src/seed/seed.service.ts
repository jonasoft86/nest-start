import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import axios , {AxiosInstance} from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {

  private readonly axios:AxiosInstance = axios;
  async executeSeed() {

    const {data} = await this.axios.get<PokeResponse>(' https://pokeapi.co/api/v2/pokemon/')
    return data.results;
  }


}
