import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationLog, NotificationLogSchema } from './schemas/notification-log.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: NotificationLog.name, schema: NotificationLogSchema }])],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}
