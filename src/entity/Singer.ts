import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Country } from "./Country";

@Entity()
export class Singer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar")
  name: number;

  @Column('int')
  gender: number;

  @ManyToOne(() => Country, country => country.id)
  @JoinColumn()
  country: Country

  @Column('nvarchar')
  avatar: string

  @Column('datetime')
  birthday: Date

  @Column('text')
  story: string

  @Column('nvarchar')
  cover_image: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
