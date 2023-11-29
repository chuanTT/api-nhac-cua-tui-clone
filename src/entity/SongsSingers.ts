import { Entity,  PrimaryColumn } from "typeorm";

@Entity()
export class SongsSingers {
  @PrimaryColumn()
  song_id: number;

  @PrimaryColumn()
  singer_id: number;
}
