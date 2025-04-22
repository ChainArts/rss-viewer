/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { FeedsService, Feed } from '../feeds/feeds.service';

export interface ArticleDetail {
  id: string;
  url: string;
  title: string;
  read: boolean;
  favorite: boolean;
  content: string | null;
  excerpt: string | null;
  feed: Feed;
}

@Injectable()
export class ArticlesService {
  private readonly articles: ArticleDetail[] = [];

  constructor(private readonly feedsService: FeedsService) {
    // Aggregate articles from each feed
    const feeds = this.feedsService.findAll();
    feeds.forEach((feed) => {
      for (let i = 0; i < 5; i++) {
        this.articles.push({
          id: faker.string.uuid(),
          url: faker.internet.url(),
          title: faker.lorem.sentence(),
          read: faker.datatype.boolean(),
          favorite: faker.datatype.boolean(),
          content: faker.lorem.paragraphs(2),
          excerpt: faker.lorem.sentences(2),
          feed,
        });
      }
    });
  }

  /**
   * Returns all articles across all feeds.
   */
  findAll(): ArticleDetail[] {
    return this.articles;
  }

  /**
   * Returns a single article by its UUID.
   */
  findOne(id: string): ArticleDetail {
    const article = this.articles.find((a) => a.id === id);
    if (!article)
      throw new NotFoundException(`Article with id ${id} not found`);
    return article;
  }

  /**
   * Updates properties on an existing article and returns the updated object.
   */
  update(id: string, attrs: Partial<ArticleDetail>): ArticleDetail {
    const article = this.findOne(id);
    Object.assign(article, attrs);
    return article;
  }
}
