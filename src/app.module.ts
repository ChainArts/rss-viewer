import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from 'src/feature/database.config';
import { NewsModule } from 'src/feature/news/news.module';
import { DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        databaseConfig
      ],
    }),
    NewsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ...config.get<Partial<DataSourceOptions>>('database'),
        autoLoadEntities: true,
      }),
    })
  ],
})
export class AppModule {}
