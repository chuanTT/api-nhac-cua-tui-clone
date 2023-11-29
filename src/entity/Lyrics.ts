import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Lyrics {
  @PrimaryColumn()
  song_id: number;

  @Column("text")
  lyrics: string;

  @Column("integer")
  user_id: string;

  @Column("timestamp")
  created_at: Date;

  @Column("timestamp")
  updated_at: Date;
}
