import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne, OneToMany,
  OneToOne,
} from 'typeorm';

import { BaseModel } from './models/base.model';
import { UserEntity } from './user.entity';
import {VenueEntity} from "./venue.entity";
import {StatusTypeEnum} from "../enums/status-type.enum";
import {TableNameEnum} from "../enums/table-name.enum";
import {StatisticEntity} from "./statistic.entity";

@Entity(TableNameEnum.SIGNBOARD)
export class SignboardEntity extends BaseModel {
  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  body: string;

  @Column({
    type: 'enum',
    enum: StatusTypeEnum,
    default: StatusTypeEnum.INACTIVE,
  })
  status: StatusTypeEnum;

  @Column()
  userId: string;
  @ManyToOne(() => UserEntity, (entity) => entity.signboard)
  @JoinColumn({ name: 'userId' })
  user?: UserEntity;

  @Column()
  venueId: string;
  @OneToOne(() => VenueEntity, (entity) => entity.signboard)
  @JoinColumn({ name: 'venueId' })
  venue?: VenueEntity;

  @OneToMany(() => StatisticEntity, (entity) => entity.signboard)
  views?: StatisticEntity[];
}
