import Fastify, {
    FastifyInstance,
    FastifyReply,
    RouteShorthandOptions,
} from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App';
import { Logger } from '../lib/logger';

const server: FastifyInstance = Fastify({});

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

server.get('/health-check', opts, async (request, reply) => {
    return { status: 'it worked!' };
});

server.get('/test', opts, async (request, reply: FastifyReply) => {
    const html = ReactDOMServer.renderToString(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
    reply.code(200).type('text/html').send(html);
});

const start = async () => {
    try {
        await server.listen(3000);
        Logger.info('started: http://localhost:3000');
        const address = server.server.address();
        const port = typeof address === 'string' ? address : address?.port;
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
