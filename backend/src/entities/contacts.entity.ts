import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Contacts{
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ length: 50 })
    name: string
    @Column({ length: 50})
    email: string
    @Column({length: 11})
    phone: string
    @Column({nullable: true})
    avatar: string
    @CreateDateColumn()
    createdAt: Date
    @ManyToOne(() => User, (user) => user.contacts,{onDelete: "CASCADE"})
    @JoinColumn()
    user: User;
}