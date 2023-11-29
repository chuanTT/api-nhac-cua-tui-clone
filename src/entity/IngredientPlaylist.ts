import { Entity,  PrimaryColumn } from "typeorm";

@Entity()
export class IngredientPlaylist {
  @PrimaryColumn()
  ingredient_id: number;

  @PrimaryColumn()
  playlist_id: number;
}
