import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Collaboration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar")
  name: string;

  @Column("nvarchar")
  thumb: string;

  @Column('nvarchar')
  link: string

  @Column("int")
  is_show: number;

  @CreateDateColumn()
  created_at: Date;
}
