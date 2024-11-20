import { Module } from '@nestjs/common';
import { PreferencesController } from './preferences.controller';
import { PreferencesService } from './preferences.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Preference, PreferenceSchema } from './schemas/preference.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Preference.name, schema: PreferenceSchema }])],
  controllers: [PreferencesController],
  providers: [PreferencesService],
})
export class PreferencesModule {}
