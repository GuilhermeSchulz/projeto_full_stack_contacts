import { hashSync } from 'bcryptjs'
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Contacts } from './contacts.entity'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 50 })
    name: string

    @Column({ length: 50, unique: true })
    email: string

    @Column({length: 11, unique: true })
    phone: string

    @Column({ length: 120 })
    password: string

    @CreateDateColumn()
    createdAt: Date

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }
    @OneToMany(() => Contacts, (contact) => contact.user, { eager: true })
    contacts: Contacts[]
}
