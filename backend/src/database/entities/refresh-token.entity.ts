import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from './models/base.model';
import {TableNameEnum} from "./table-name.enum";
import {UserEntity} from "./user.entity";

@Entity(TableNameEnum.REFRESH_TOKEN)
export class RefreshTokenEntity extends BaseModel {
  @Column('text')
  refreshToken: string;

  @Column('text')
  deviceId: string;

  @Column()
  user_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.refreshTokens)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
