 /**
 * Returns the users IP when possible
 * @method ip
 * @param  {Object} req http/express request object
 * @return {String}
 */
 function ip(req) {
   return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress || 'not available';
 }

/**
 * Export IP utils
 * @type {Object}
 */
 export { ip };
