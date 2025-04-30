import { Feed } from 'src/feeds/feed.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    name: string;
    
    @ManyToMany(() => Feed, (feed) => feed.category)
    feeds: Feed[];
}
    