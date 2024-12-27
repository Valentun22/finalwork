import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from './models/base.model';
import {UserEntity} from "./user.entity";
import {TableNameEnum} from "../enums/table-name.enum";

@Entity(TableNameEnum.REFRESH_TOKEN)
export class RefreshTokenEntity extends BaseModel {
  @Column('text')
  refreshToken: string;

  @Column('text')
  deviceId: string;

  @Column()
  userId: string;
  @ManyToOne(() => UserEntity, (entity) => entity.refreshTokens)
  @JoinColumn({ name: 'userId' })
  user?: UserEntity;
}
