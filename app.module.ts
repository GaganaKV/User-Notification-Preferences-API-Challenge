import { Module } from '@nestjs/common';
import { PreferencesModule } from './preferences/preferences.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [PreferencesModule, NotificationsModule],
})
export class AppModule {}
