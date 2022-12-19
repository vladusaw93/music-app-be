import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Track, TrackDocument } from '../schema';

@Injectable()
export class TrackRepository {
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>) {}

    async findOne(FilterQuery: FilterQuery<Track>): Promise<Track> {
        return this.trackModel.findOne(FilterQuery);
    }

    async find(FilterQuery: FilterQuery<Track>): Promise<Track[]> {
        return this.trackModel.find(FilterQuery);
    }

    async findPagination(count = 20, offset = 0): Promise<Track[]> {
        return this.trackModel.find().skip(offset).limit(count);
    }

    async create(track: Track): Promise<Track> {
        const newTrack = new this.trackModel(track);
        return newTrack.save();
    }

    async findOneAndUpdate(
        FilterQuery: FilterQuery<Track>,
        track: Partial<Track>,
    ): Promise<Track> {
        return this.trackModel.findOneAndUpdate(FilterQuery, track, {
            new: true,
        });
    }

    async search(query: string){
        return this.trackModel.find({name: {$regex: new RegExp(query)}});
    }
}
