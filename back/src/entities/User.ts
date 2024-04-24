import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Credential from "./Credential";
import Appointment from "./Appointment";

@Entity({ name: "users" })
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  birthdate: string;

  @Column({ unique: true })
  nDni: string;

  @OneToOne(() => Credential)
  @JoinColumn({ name: "credentialsId" })
  credentialsId: Credential;

  @OneToMany(() => Appointment, (appointment) => appointment.userId)
  appointments: Appointment[];
}
