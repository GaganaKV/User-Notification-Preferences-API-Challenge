import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Preference } from './schemas/preference.schema';
import { CreatePreferenceDto } from './dto/create-preference.dto';
import { UpdatePreferenceDto } from './dto/update-preference.dto';

@Injectable()
export class PreferencesService {
  constructor(@InjectModel(Preference.name) private preferenceModel: Model<Preference>) {}

  async create(createPreferenceDto: CreatePreferenceDto) {
    const createdPreference = new this.preferenceModel(createPreferenceDto);
    return createdPreference.save();
  }

  async findOne(userId: string) {
    return this.preferenceModel.findOne({ userId });
  }

  async update(userId: string, updatePreferenceDto: UpdatePreferenceDto) {
    return this.preferenceModel.findOneAndUpdate({ userId }, updatePreferenceDto, { new: true });
  }

  async remove(userId: string) {
    return this.preferenceModel.findOneAndDelete({ userId });
  }
}
