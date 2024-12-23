import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { VenueEntity } from "./venue.entity";
import {NewsTypeEnum} from "../enums/newsType.enum";
import {TableNameEnum} from "./table-name.enum";

@Entity(TableNameEnum.NEWS)
export class NewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ type: "enum", enum: NewsTypeEnum })
  type: NewsTypeEnum;

  @ManyToOne(() => VenueEntity, (venue) => venue.news)
  venue: VenueEntity;
}
