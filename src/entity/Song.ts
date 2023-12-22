import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar")
  name: string;

  @Column("nvarchar")
  thumb: string;

  @Column("nvarchar")
  audio: string;

  @Column("int")
  is_stop: number;

  @Column("int")
  is_video: number;

  @Column("int")
  views: number;

  @Column("int")
  type_id: number;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;
}
