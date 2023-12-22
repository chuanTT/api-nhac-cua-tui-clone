import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Playlist } from "./Playlist";

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar")
  name: string;

  @ManyToMany(() => Playlist, (playlist) => playlist.id, { eager: true })
  @JoinTable({
    name: "ingredient_playlist",
    joinColumn: {
      name: "playlist_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: 'ingredient_id',
      referencedColumnName: 'id',
    },
  })
  playlist: Playlist[];

  @Column("int")
  is_show: number;

  @Column("datetime")
  start_at: Date;

  @Column("datetime")
  end_at: Date;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;
}
