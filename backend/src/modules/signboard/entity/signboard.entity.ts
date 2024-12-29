import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne, OneToMany,
  OneToOne,
} from 'typeorm';
import {TableNameEnum} from "../../../database/enums/table-name.enum";
import {BaseModel} from "../../../database/entities/models/base.model";
import {StatusTypeEnum} from "../../../database/enums/status-type.enum";
import {UserEntity} from "../../user/entity/user.entity";
import {VenueEntity} from "../../venue/entity/venue.entity";
import {StatisticEntity} from "../../../database/entities/statistic.entity";

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
