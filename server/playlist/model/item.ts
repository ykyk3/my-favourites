interface Thumbnail {
    url: string;
    width: number;
    height: number;
}
type ThumbnailSize = ['default', 'medium', 'high', 'standard', 'maxres'];
interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Record<ThumbnailSize[number], Thumbnail>;
    channelTitle: string;
    localized: {
        title: string;
        description: string;
    };
}
interface Status {
    privacyStatus: string;
}
export interface PlayListItemRaw {
    kind: string;
    etag: string;
    id?: string;
    snippet?: Snippet;
    status?: Status;
}

export interface PlayListItem {
    id?: string;
    snippet?: Snippet;
    status?: Status;
    title: string;
    description?: string;
    url?: string;
    ogImage?: string;
}

export class PlayListItem implements PlayListItem {
    id?: string;
    title: string;
    description?: string;
    publishedAt?: string;
    thumbnails?: Record<ThumbnailSize[number], Thumbnail>;

    constructor(raw: PlayListItemRaw) {
        this.id = raw.id;

        const {
            title = 'タイトルが設定されていません',
            publishedAt,
            description,
            thumbnails,
        } = raw.snippet || {};
        this.title = title;
        this.description = description;
        this.thumbnails = thumbnails;
        this.publishedAt = publishedAt;
    }
}
