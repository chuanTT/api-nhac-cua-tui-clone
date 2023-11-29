import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Theme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar")
  name: string;

  @Column("nvarchar")
  thumb: string;

  @Column("nvarchar")
  big_thumb: string;

  @Column("text")
  description: string;

  @Column("timestamp")
  created_at: Date;

  @Column("timestamp")
  updated_at: Date;
}
