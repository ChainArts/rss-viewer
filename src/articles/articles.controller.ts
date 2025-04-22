import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { ArticlesService, ArticleDetail } from './articles.service';

@Controller('articles') // global prefix 'api' is set in main.ts
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  findAll(): ArticleDetail[] {
    return this.articlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): ArticleDetail {
    return this.articlesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() attrs: Partial<ArticleDetail>,
  ): ArticleDetail {
    return this.articlesService.update(id, attrs);
  }
}
