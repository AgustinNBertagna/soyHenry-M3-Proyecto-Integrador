import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "credentials" })
export default class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
}
