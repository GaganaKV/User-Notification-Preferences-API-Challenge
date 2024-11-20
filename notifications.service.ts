import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationLog } from './schemas/notification-log.schema';

@Injectable()
export class NotificationsService {
  constructor(@InjectModel(NotificationLog.name) private notificationLogModel: Model<NotificationLog>) {}

  async sendNotification(notificationData: any) {
    // Simulate sending a notification
    const notificationLog = new this.notificationLogModel({
      ...notificationData,
      status: 'sent',
      sentAt: new Date(),
    });
    return notificationLog.save();
  }

  async getNotificationLogs(userId: string) {
    return this.notificationLogModel.find({ userId });
  }

  async getStats() {
    return {
      totalNotificationsSent: await this.notificationLogModel.countDocuments({ status: 'sent' }),
      totalNotificationsFailed: await this.notificationLogModel.countDocuments({ status: 'failed' }),
    };
  }
}
