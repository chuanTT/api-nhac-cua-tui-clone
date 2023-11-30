import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
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

  @OneToOne(() => User, user => user.id)
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
