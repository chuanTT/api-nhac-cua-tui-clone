import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Type } from "./Type";

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

  @OneToMany(() => User, user => user.id)
  user: User

  @ManyToOne(() => Type)
  @JoinColumn()
  type: Type

  @Column('int')
  is_show: number

  @Column("datetime")
  start_at: Date;

  @Column("datetime")
  end_at: Date;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;
}
