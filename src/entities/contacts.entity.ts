import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Contacts{
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ length: 50 })
    name: string
    @Column({ length: 50, unique: true })
    email: string
    @Column({length: 11, unique: true })
    phone: string
    @CreateDateColumn()
    createdAt: Date
    @ManyToOne(() => User, (user) => user.contacts, { eager: true })
    @JoinColumn()
    user: User;
}