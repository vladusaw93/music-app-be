import {Injectable} from '@nestjs/common';
import {TrackRepository} from "../repository";
import {CreateTrackDto} from "../dto";
import {Track} from "../schema";
import {Types} from "mongoose";
import {FileService} from "../../file/service";
import {FileEnums} from "../../file/enums";

@Injectable()
export class TrackService {
    constructor(private readonly trackRepository: TrackRepository,
                private readonly fileService: FileService) {
    }

    async create(dto: CreateTrackDto, user_id: Types.ObjectId, picture, audio): Promise<Track> {
        const audioPath = this.fileService.createFile(FileEnums.AUDIO, audio);
        const picturePath = this.fileService.createFile(FileEnums.IMAGE, picture);
        return this.trackRepository.create({...dto, user_id, audio: audioPath, picture: picturePath});
    }

    async findById(_id: Types.ObjectId): Promise<Track> {
        return this.trackRepository.findOne({_id});
    }

    async listen(_id: Types.ObjectId): Promise<Track> {
        const track = await this.findById(_id);
        return this.trackRepository.findOneAndUpdate({_id}, {listens: track.listens += 1});
    }

    async findAll(count = 20, offset = 0): Promise<Track[]> {
        return this.trackRepository.findPagination(count, offset);
    }

    async search(query: string): Promise<Track[]> {
        return this.trackRepository.search(query);
    }
}
