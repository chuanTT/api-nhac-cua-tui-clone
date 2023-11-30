import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { User } from "./User";
import { Song } from "./Song";

@Entity()
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar")
  name: number;

  @Column("nvarchar")
  alias: number;

  @Column('nvarchar')
  thumb: string

  @OneToOne(() => User, user => user.id)
  @JoinColumn()
  user: User;

  @ManyToMany(() => Song, (Song) => Song.id, { eager: true })
  @JoinTable({
    name: "playlist_song",
    joinColumn: {
      name: "song_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: 'playlist_id',
      referencedColumnName: 'id',
    },
  })
  songs: Song[];

  @Column('int')
  is_review: number

  @Column('int')
  is_selective: number

  @Column('text')
  description: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
