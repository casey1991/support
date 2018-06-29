import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { HttpModule } from '@nestjs/common';

@EventSubscriber()
export class UserEntitySubscriber
  implements EntitySubscriberInterface<UserEntity> {
  private httpModel;
  constructor() {
    this.httpModel = new HttpModule();
  }
  /**
   * Indicates that this subscriber only listen to Post events.
   */
  listenTo() {
    return UserEntity;
  }

  /**
   * Called before post insertion.
   */
  afterInsert(event: InsertEvent<UserEntity>) {
    console.log(this.httpModel);
    // console.log(event);
    console.log(`BEFORE POST INSERTED: `, event.entity);
  }
}
