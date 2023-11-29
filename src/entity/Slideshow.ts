import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Slideshow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar")
  name: number;

  @Column('nvarchar')
  thumb: string

  @Column('int')
  owner_id: string

  @Column('int')
  user_id: string

  @Column('int')
  is_type: number

  @Column('int')
  is_show: number

  @Column("datetime")
  start_at: Date;

  @Column("datetime")
  end_at: Date;

  @Column("timestamp")
  created_at: Date;

  @Column("timestamp")
  updated_at: Date;
}
