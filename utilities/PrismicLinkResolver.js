export default (doc) => {
    if (doc.type === 'social_policy' || doc.type === 'social_accounts') {
        return '/social';
    }
    if (doc.type === 'about_me') {
        return '/profile';
    }
    if (doc.type === 'copyright') {
        return '/copyright';
    }
    if (doc.type === 'blog') {
        return `/blog/${doc.id}`;
    }
    return '/';
};

