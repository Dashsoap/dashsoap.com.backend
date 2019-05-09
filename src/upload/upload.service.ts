import { Injectable } from '@nestjs/common';
import * as qiniu from 'qiniu';

const AK = 'WqbY637V6AagcAgn0DykMUSPmYRVe3PaQ8Q_ccNx';
const SK = 'q_PEAmfC1UboCG6MumMomNHVTxblyo6qAVWBrasG';
const HOST = 'http://pr2xg32u8.bkt.clouddn.com';

@Injectable()
export class UploadService {
    genUploadToken() {
        const mac = new qiniu.auth.digest.Mac(AK, SK);
        const pubPolicy = new qiniu.rs.PutPolicy({
            scope: 'bakery'
        })
        return pubPolicy.uploadToken(mac);
    }
    getHost() {
        return HOST;
    }
}
