import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar")
  name: string;

  @Column("int")
  is_show: number;

  @Column("datetime")
  start_at: Date;

  @Column("datetime")
  end_at: Date;

  @Column("timestamp")
  created_at: Date;

  @Column("timestamp")
  updated_at: Date;
}
