import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Type } from "./Type";

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn()
  user: User;

  @Column('int')
  owner_id: number

  @ManyToOne(() => Type)
  @JoinColumn()
  type: Type

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;
}
