import { PlayListItem, PlayListItemRaw } from './item';

interface Page {
    totalResults: number;
    resultsPerPage: number;
}

export interface PlayListRaw {
    kind: string;
    etag: string;
    nextPageToken: string;
    pageInfo: Page;
    items: PlayListItemRaw[];
}

export interface PlayList {
    next: string;
    total: number;
    page: number;
    items: PlayListItem[];
}
export class PlayList implements PlayList {
    next: string;
    total: number;
    page: number;
    items: PlayListItem[];
    constructor(raw: PlayListRaw) {
        this.next = raw.nextPageToken;
        const { totalResults: total = 0, resultsPerPage = 0 } = raw.pageInfo;
        this.total = total;
        this.page = resultsPerPage;
        this.items = raw.items.map((item) => new PlayListItem(item));
    }
}
