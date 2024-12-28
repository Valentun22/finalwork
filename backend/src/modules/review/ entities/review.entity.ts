import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reviews')
export class ReviewEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column()
    venueId: string;

    @Column()
    rating: number;

    @Column()
    comment: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
