import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Option } from "./Option";

@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar")
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Option, (Option) => Option.id, { eager: true })
  @JoinTable({
    name: "tag_option",
    joinColumn: {
      name: "option_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  options: Option[];
}
