import { Entity,  PrimaryColumn } from "typeorm";

@Entity()
export class TagsOption {
  @PrimaryColumn()
  category_id: number;

  @PrimaryColumn()
  option_id: number;
}
