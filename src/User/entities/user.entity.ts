import {
  Entity,
  Column,
  ObjectID,
  ObjectIdColumn,
  BeforeInsert,
} from 'typeorm';

@Entity()
export class UserEntity {
  @ObjectIdColumn() _id: ObjectID;
  @Column() name: string;
  @Column() email: string;
  @Column() roles: string;
  @Column() createdAt: Date;
  @Column() password: string;
  @BeforeInsert()
  insertCreateAt() {
    this.createdAt = new Date();
  }
}
