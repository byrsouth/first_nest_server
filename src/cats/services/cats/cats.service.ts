import { Injectable } from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { Cat, UpdateCat } from '../../interfaces/cat.interfaces';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(createCatDto: CreateCatDto): void {
    const cat: Cat = {
      name: createCatDto.name,
      breed: createCatDto.breed,
      age: createCatDto.age,
      id: Math.random() * 10,
    };
    this.cats.push(cat);
  }

  find(id: number): Cat {
    return this.getCat(id);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  update(id: number, updateCat: UpdateCat): Cat {
    const cat = this.getCat(id);
    console.log('Cat is: ' + cat);
    cat.age = updateCat.age;
    cat.breed = updateCat.breed;
    cat.name = updateCat.name;
    return cat;
  }

  delete(id: number): void {
    this.cats.splice(this.getCatIndex(id), 1);
  }

  private getCat(id: number): Cat {
    return this.cats[this.getCatIndex(id)];
  }

  private getCatIndex(id: number): number {
    const hasCat = (c) => c.id === id;
    return this.cats.findIndex(hasCat);
  }
}
