import Prismic from "prismic-javascript";

const API_ENDPOINT = 'https://penguinone.cdn.prismic.io/api/v2';

export default () => {
    return Prismic.getApi(API_ENDPOINT);
};