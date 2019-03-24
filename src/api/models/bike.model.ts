import { Table, Column, Model, HasMany } from "sequelize-typescript";
console.log("__dirname", __dirname);

@Table({
  timestamps: true
})
export class Bike extends Model<Bike> {

  @Column
  name: string;

  @Column
  purchaseDate: Date;

  // @HasMany(() => Hobby)
  // hobbies: Hobby[];
}
