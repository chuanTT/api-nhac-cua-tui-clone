import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Option } from "./Option";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar")
  name: string;

  @ManyToMany(() => Option, (Option) => Option.id, { eager: true })
  @JoinTable({
    name: "category_option",
    joinColumn: {
      name: "option_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
    },
  })
  options: Option[];

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;
}
