import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FeedsService, Feed, FeedArticles } from './feeds.service';

@Controller('feeds')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  @Get()
  findAll(): Feed[] {
    return this.feedsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Feed {
    return this.feedsService.findOne(id);
  }

  @Get(':id/articles')
  findArticles(@Param('id', ParseIntPipe) id: number): FeedArticles {
    return this.feedsService.findArticles(id);
  }
}
