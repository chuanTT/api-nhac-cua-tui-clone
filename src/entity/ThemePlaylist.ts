import { Entity,  PrimaryColumn } from "typeorm";

@Entity()
export class ThemePlaylist {
  @PrimaryColumn()
  theme_id: number;

  @PrimaryColumn()
  playlist_id: number;
}
