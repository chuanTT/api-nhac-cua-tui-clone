import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Playlist } from "./Playlist";

@Entity()
export class Theme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar")
  name: string;

  @Column("nvarchar")
  thumb: string;

  @Column("nvarchar")
  big_thumb: string;

  @Column("text")
  description: string;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;

  @ManyToMany(() => Playlist, (Playlist) => Playlist.id, { eager: true })
  @JoinTable({
    name: "theme_playlist",
    joinColumn: {
      name: "song_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: 'theme_id',
      referencedColumnName: 'id',
    },
  })
  songs: Playlist[];
}
