import { Feed } from 'src/feeds/feed.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('articles')
export class Article {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    title: string;

    @Column({ unique: true })
    url: string;

    @Column({type: 'boolean', default: false})
    read: boolean;

    @Column({type: 'boolean', default: false})
    favorite: boolean;

    @Column({type: 'text', nullable: true })
    content?: string;

    @Column({type: 'text', nullable: true })
    excerpt?: string;

    @ManyToMany(() => Feed, (feed) => feed.category)
    feed: Feed[];
}
    