import { Article } from 'src/articles/article.entiy';
import { Category } from 'src/categories/catefories.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('feeds')
export class Feed {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    name: string;

    @Column({ unique: true })
    url: string;
    
    
    @ManyToMany(() => Category, (cat) => cat.feeds,{nullable:true} )
    category?: Category[];

    @ManyToMany(() => Article, (art) => art.feed)
    articles?: Article[];
}
    