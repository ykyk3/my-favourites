import { FastifyPluginCallback, FastifyReply } from 'fastify';
import { PrayListRepository } from './repository';
import ReactDOMServer from 'react-dom/server';
import React, { FC } from 'react';
import { Top } from '../view/top';
import { View } from '../view';

export const PlayListRoute: FastifyPluginCallback = (fastify, opts, done) => {
    fastify.decorate('utility', () => {});

    fastify.get('/', opts, async (_, reply: FastifyReply) => {
        const apiKey = process?.env.YOUTUBE_API_KEY;
        if (!apiKey) {
            throw new Error('apiキーの取得に失敗しました。');
        }
        const playLists = await PrayListRepository.getAll({
            key: apiKey,
            channelId: 'UCCrcXTOvcb67zokLsfsYDEA',
            part: ['id', 'snippet', 'status'],
        });
        reply.code(200).send(playLists);
    });

    done();
};
