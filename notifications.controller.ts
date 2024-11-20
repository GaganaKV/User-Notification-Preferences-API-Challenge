import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('api/notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send')
  sendNotification(@Body() sendNotificationDto: any) {
    return this.notificationsService.sendNotification(sendNotificationDto);
  }

  @Get(':userId/logs')
  getNotificationLogs(@Param('userId') userId: string) {
    return this.notificationsService.getNotificationLogs(userId);
  }

  @Get('stats')
  getStats() {
    return this.notificationsService.getStats();
  }
}
