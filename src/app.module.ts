import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './categories/categories.controller';
import { ArticlesController } from './articles/articles.controller';
import { FeedsController } from './feeds/feeds.controller';
import { FeedsService } from './feeds/feeds.service';
import { ArticlesService } from './articles/articles.service';
import { CategoriesService } from './categories/categories.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ArticlesController, FeedsController],
  providers: [AppService, FeedsService, ArticlesService, CategoriesService],
})
export class AppModule {}
