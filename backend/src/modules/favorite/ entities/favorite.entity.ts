import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('favorites')
export class FavoriteEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column()
    venueId: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
