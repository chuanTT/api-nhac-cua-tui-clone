import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
} from "typeorm";
import { bcryptPass } from "../common/bcryptFuc";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", { unique: true })
  user_name: string;

  @Column("nvarchar", { unique: true })
  email: string;

  @Column("nvarchar", { length: 50, nullable: true })
  full_name: string;

  @Column("datetime", { nullable: true })
  birthday: Date;

  @Column("int", { nullable: true })
  gender: number;

  @Column("nvarchar", { length: 20, nullable: true })
  phone: string;

  @Column("nvarchar", { nullable: true })
  address: string;

  @Column("nvarchar", { nullable: true })
  introduce: string;

  @Column("nvarchar", { default: "0" })
  view_profile: string;

  @Column("nvarchar", { default: "0" })
  view_playlist: string;

  @Column("nvarchar", { nullable: true })
  avatar: string;

  @Column("nvarchar", { nullable: true })
  token: string;

  @Column("nvarchar", { length: 100 })
  password: string;

  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @BeforeInsert()
  setId() {
    this.password = bcryptPass(this.password)
  }
}
