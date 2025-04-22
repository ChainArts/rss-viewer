/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { CategoriesService, Category } from '../categories/categories.service';

export interface Feed {
  id: number;
  url: string;
  title: string;
  category: Category;
}

export interface FeedArticles {
  id: number;
  url: string;
  title: string;
  articles: Article[];
}

export interface Article {
  id: string;
  url: string;
  title: string;
  read: boolean;
  favorite: boolean;
  content: string | null;
  excerpt: string | null;
}

@Injectable()
export class FeedsService {
  private readonly feeds: Feed[] = [];

  constructor(private readonly categoriesService: CategoriesService) {
    // Generate one feed per category
    const cats = this.categoriesService.findAll();
    cats.forEach((cat) => {
      this.feeds.push({
        id: cat.id,
        url: faker.internet.url(),
        title: faker.lorem.words(3),
        category: cat,
      });
    });
  }

  /**
   * Returns all feeds with their category.
   */
  findAll(): Feed[] {
    return this.feeds;
  }

  /**
   * Returns a single feed by ID.
   */
  findOne(id: number): Feed {
    const feed = this.feeds.find((f) => f.id === id);
    if (!feed) throw new NotFoundException(`Feed with id ${id} not found`);
    return feed;
  }

  /**
   * Returns a feed along with a list of mock articles.
   */
  findArticles(feedId: number): FeedArticles {
    const feed = this.findOne(feedId);
    // Generate 5 mock articles
    const articles: Article[] = Array.from({ length: 5 }).map(() => ({
      id: faker.string.uuid(),
      url: faker.internet.url(),
      title: faker.lorem.sentence(),
      read: faker.datatype.boolean(),
      favorite: faker.datatype.boolean(),
      content: faker.lorem.paragraphs(2),
      excerpt: faker.lorem.sentences(2),
    }));
    return {
      id: feed.id,
      url: feed.url,
      title: feed.title,
      articles,
    };
  }
}
