import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Staff{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    email:string;

    @Column()
    username:string;

    @Column()
    isActive:boolean;
}