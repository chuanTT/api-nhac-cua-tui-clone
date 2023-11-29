import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", {
    length: 40,
  })
  name: string;

  @Column("timestamp")
  created_at: Date;

  @Column("timestamp")
  updated_at: Date;
}
