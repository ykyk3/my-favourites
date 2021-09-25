import Fastify, { RouteShorthandOptions } from 'fastify';
import { Logger } from '../lib/logger';
import { PlayListRoute } from './playlist/route';
require('dotenv').config();

const fastify = Fastify({ logger: true });

Logger.info('boot server');
const opts: RouteShorthandOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    pong: {
                        type: 'string',
                    },
                },
            },
        },
    },
};

// FIXME(#12): api用のrouterファイルに移す（いつか）
fastify.register(PlayListRoute, { prefix: '/api/playlist' });

fastify.get('/health-check', opts, async (_, reply) =>
    reply.code(200).send({ status: 'it worked!' })
);

const start = async () => {
    try {
        const port = process?.env.PORT || 3000;
        await fastify.listen(port);
        const address = fastify.server.address();
        if (address && typeof address !== 'string') {
            Logger.info(
                `started: ${address.address}:${address.port}/${address.family}`
            );
        }
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
