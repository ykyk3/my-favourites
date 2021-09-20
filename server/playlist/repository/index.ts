import { Logger } from '../../../lib/logger';
import { SendRequest } from '../../../lib/sendRequest';
import { PlayList, PlayListRaw } from '../model';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const EndPoints = {
    PlayLists: '/playlists',
} as const;
type Part = 'id' | 'snippet' | 'status';
type Options = {
    key: string;
    part: Part; // FIXME: どれか一つを必須にしたい。<T,...T> 的な書き方でうまく作りたい
    channelId?: string;
    id?: string;
    mine?: boolean;
};

export async function getAll(options: Options): Promise<PlayList> {
    const { channelId, id, mine } = options;

    const isConditionally = [channelId, id, mine].some(Boolean);
    if (!isConditionally) {
        return Promise.reject(
            '次のどれかを指定してください: channelId, id, mine。\nSee: https://developers.google.com/youtube/v3/docs/playlists/list'
        );
    }
    return await SendRequest.get(`${BASE_URL}${EndPoints.PlayLists}`, options)
        .then((res) =>
            res.ok
                ? res.json()
                : Promise.reject('プレイリストの取得に失敗しました。')
        )
        .then((json: PlayListRaw) => new PlayList(json));
}