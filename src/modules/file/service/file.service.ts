import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {FileEnums} from "../enums";
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FileService {

    createFile(type: FileEnums, file: Express.Multer.File): string {
        try {
            const fileExention = file.originalname.split('.').pop();
            const fileName = uuid.v4() + '.' + fileExention;
            const filePath = path.join(process.cwd(), 'static', type);

            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true});
            }
            const fullFilePath = path.join(filePath, fileName);
            fs.writeFileSync(fullFilePath, file.buffer);
            return  type + '/' + fileName

        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
