import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", {
    length: 40,
  })
  name: string;
}
