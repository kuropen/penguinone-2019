import {Storage} from 'aws-amplify';

import * as TextEncoding from 'text-encoding';
const TextDecoder = TextEncoding.TextDecoder;

const superagent = require('superagent');

const TextDataUtil = {
    /**
     * Get accessible URL for  Markdown content on S3.
     * @param {string} fileName
     * @returns {Promise<string>}
     */
    getS3TextUrl: (fileName) => {
        return Storage.get(`${fileName}.md`);
    },
    /**
     * Get Markdown content on S3.
     * @param {string} fileName
     * @returns {Promise<string>}
     */
    getS3Text: async (fileName) => {
        const s3TextUrl = await TextDataUtil.getS3TextUrl(fileName);
        const result = await superagent
            .get(s3TextUrl)
            .responseType('arraybuffer');

        const decoder = new TextDecoder('utf-8');
        return decoder.decode(new Uint8Array(result.body));
    }
};

export default TextDataUtil;
