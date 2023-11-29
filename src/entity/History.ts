import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  user_id: number;

  @Column('int')
  owner_id: number

  @Column('int')
  type_id: number

  @Column("timestamp")
  created_at: Date;

  @Column("timestamp")
  updated_at: Date;
}
