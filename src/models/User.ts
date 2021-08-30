import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';


@Entity("users")//definindo o nome da tabela como entidade, habilitar o decorator no tsconfig.json, ctr+f: decorators
class User {
    @PrimaryColumn()
    readonly id: string;//não deixar mudar

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){//se não existe
            this.id = uuid();
        }
    }
}

export { User }