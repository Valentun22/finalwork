import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from './models/base.model';
import {TableNameEnum} from "../enums/table-name.enum";
import {SignboardEntity} from "./signboard.entity";

@Entity(TableNameEnum.STATISTICS)
export class StatisticEntity extends BaseModel {
  @Column()
  signboard_id: string;
  @ManyToOne(() => SignboardEntity, (entity) => entity.views)
  @JoinColumn({ name: 'signboard_id' })
  signboard?: SignboardEntity;
}
