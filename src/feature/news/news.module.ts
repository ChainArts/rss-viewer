import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Article } from "src/articles/article.entiy";
import { ArticlesController } from "src/articles/articles.controller";
import { ArticlesService } from "src/articles/articles.service";
import { Category } from "src/categories/catefories.entity";
import { CategoriesController } from "src/categories/categories.controller";
import { CategoriesService } from "src/categories/categories.service";
import { Feed } from "src/feeds/feed.entity";
import { FeedsController } from "src/feeds/feeds.controller";
import { FeedsService } from "src/feeds/feeds.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Feed, Article, Category
        ]),
    ],
  controllers: [CategoriesController, ArticlesController, FeedsController],
  providers: [ FeedsService, ArticlesService, CategoriesService],
})

export class NewsModule {}