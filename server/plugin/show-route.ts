import { RouteOptions } from 'fastify';
import { Logger } from '../../lib/logger';

export const showRoute = (routeOptions: RouteOptions) => {
    //Some code
    Logger.info(`${routeOptions.method}: ${routeOptions.url}`);
};
