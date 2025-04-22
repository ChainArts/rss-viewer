/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

export interface Category {
  id: number;
  name: string;
}

@Injectable()
export class CategoriesService {
  private readonly categories: Category[] = [];

  constructor() {
    // Generate 3 mock categories with random department names
    for (let i = 1; i <= 3; i++) {
      this.categories.push({
        id: i,
        name: faker.commerce.department(),
      });
    }
  }

  /**
   * Returns a list of all categories.
   */
  findAll(): Category[] {
    return this.categories;
  }
}
