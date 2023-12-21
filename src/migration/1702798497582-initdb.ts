import axios from "axios";
import { MigrationInterface, QueryRunner } from "typeorm";

import { AppDataSource } from "../data-source";
import { Type } from "./../entity/Type";
import { Country } from "../entity/Country";

const initDataType: Type[] = [
  { id: null, name: "Video" },
  { id: null, name: "Bài Hát" },
  { id: null, name: "Playlist" },
];

export class Initdb1702798497582 implements MigrationInterface {
  public async up(): Promise<void> {
    const typeRepo = AppDataSource.getRepository(Type);
    await typeRepo.insert(initDataType);
    
    //init data contry 
    const country = AppDataSource.getRepository(Country)
    const result = await axios.get("https://restcountries.com/v3.1/all");
    const newData = result.data.map((item: any) => {
      const date = new Date();
      return {
        id: null,
        name: item?.name?.nativeName?.vie?.common || item?.name?.common,
        created_at: date,
        updated_at: date,
      };
    });
    await country.insert(newData)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
