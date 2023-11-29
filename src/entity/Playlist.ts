import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

  @Column('int')
  user_id: string

  @Column('int')
  is_review: number

  @Column('int')
  is_selective: number

  @Column('text')
  description: string

  @Column("timestamp")
  created_at: Date;

  @Column("timestamp")
  updated_at: Date;
}
