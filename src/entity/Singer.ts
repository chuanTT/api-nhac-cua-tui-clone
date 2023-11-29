import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Singer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar")
  name: number;

  @Column('int')
  gender: number;

  @Column('int')
  country_id: number

  @Column('nvarchar')
  avatar: string

  @Column('datetime')
  birthday: Date

  @Column('text')
  story: string

  @Column('nvarchar')
  cover_image: string

  @Column("timestamp")
  created_at: Date;

  @Column("timestamp")
  updated_at: Date;
}
