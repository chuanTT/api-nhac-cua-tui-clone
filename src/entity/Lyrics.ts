import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";
import { Song } from "./Song";

@Entity()
export class Lyrics {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Song, song => song.id)
  @JoinColumn()
  song: Song;

  @Column("text")
  lyrics: string;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn()
  user: User;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;
}
