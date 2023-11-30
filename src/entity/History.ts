import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Type } from "./Type";

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, user => user.id)
  @JoinColumn()
  user: User;

  @Column('int')
  owner_id: number

  @OneToOne(() => Type)
  @JoinColumn()
  type: Type

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
