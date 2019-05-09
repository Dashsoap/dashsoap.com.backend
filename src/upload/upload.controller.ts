import { Controller, Get } from '@nestjs/common';
import { UploadService } from './upload.service';
import { Auth } from 'src/app.decorator';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {

    }
    @Get()
    genUploadToken() {
        return {
            token: this.uploadService.genUploadToken(),
            host: this.uploadService.getHost()
        }
    }
}
