import Prismic from "prismic-javascript";

const API_ENDPOINT = 'https://penguinone.cdn.prismic.io/api/v2';

/**
 * Fetch API of Prismic Headless CMS.
 * @returns {Promise<ResolvedApi>}
 */
const getPrismicApi = () => {
    return Prismic.getApi(API_ENDPOINT);
};

/**
 * Fetch single page.
 * @param type {string} type definition code
 * @returns {Promise<Document>}
 */
const getSinglePage = async (type) => {
    const api = await getPrismicApi();
    return api.getSingle(type);
};

/**
 * Fetch pages in a category.
 * @param type {string} type definition code
 * @param options {QueryOptions} options
 * @returns {Promise<Document>}
 */
const getPagesInCategory = async (type, options = {}) => {
    return new Promise(async (resolve) => {
        const client = await getPrismicApi();
        client.query(
            Prismic.Predicates.at('document.type', type),
            options
        ).then(res => {
            resolve(res.results);
        });
    });
};

/**
 * Fetch a categorized page.
 * @param id {string} Page ID
 * @returns {Promise<Document>}
 */
const getSinglePageInCategory = async (id) => {
    const api = await getPrismicApi();
    return api.getByID(id);
};

export {
    getPrismicApi as default,
    getSinglePage,
    getPagesInCategory,
    getSinglePageInCategory,
};