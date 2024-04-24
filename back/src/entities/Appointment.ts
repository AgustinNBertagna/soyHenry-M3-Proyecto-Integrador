import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import User from "./User";

@Entity({ name: "appointments" })
export default class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "userId" })
  userId: User;

  @Column()
  description: string;

  @Column()
  status: "active" | "cancelled";
}
