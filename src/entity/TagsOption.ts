import { Entity,  PrimaryColumn } from "typeorm";

@Entity()
export class TagsOption {
  @PrimaryColumn()
  tag_id: number;

  @PrimaryColumn()
  option_id: number;
}
