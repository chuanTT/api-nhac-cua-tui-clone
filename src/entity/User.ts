import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", { unique: true })
  user_name: string;

  @Column("nvarchar", { length: 50 })
  full_name: string;

  @Column("datetime")
  birthday: Date;

  @Column('int')
  gender: number;

  @Column("nvarchar", { length: 20 })
  phone: string;

  @Column("nvarchar")
  address: string;

  @Column("nvarchar")
  introduce: string;

  @Column("nvarchar")
  view_profile: string;

  @Column("nvarchar")
  view_playlist: string;

  @Column("nvarchar")
  avatar: string;

  @Column("nvarchar")
  token: string;

  @Column("nvarchar", { length: 100 })
  password: string;

  @CreateDateColumn()
  created_at: Date;
}
