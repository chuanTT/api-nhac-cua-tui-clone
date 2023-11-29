import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar")
  name: string;

  @Column("timestamp")
  created_at: Date;

  @Column("timestamp")
  updated_at: Date;
}
