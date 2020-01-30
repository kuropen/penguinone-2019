import * as AutoKana from 'vanilla-autokana';

/*
 * This file exists because this is a Next.js SSR project.
 *
 * AutoKana refers Window global object but this is not available when SSR.
 * So AutoKana is not importable on top-level code of Next.js SSR page.
 * This problem is solved using RequireJS and this script enables that.
 */

module.exports = {
    bind: AutoKana.bind,
};
