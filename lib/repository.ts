const getKey = (key: string): string => `storage-mock--${key}`;
const getAll = () => {
    if (!localStorage.length) {
        return;
    }
    const response = [];
    for (var i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        response.push({ [key]: value });
    }
    return response;
};
export type MockData = { [K in string]: string };
export interface MockDataList {
    hits: MockData[];
}
export class MockRepository {
    private repository: Storage;
    static instance?: MockRepository;
    private constructor() {
        this.repository = localStorage;
    }

    find(key: string): Promise<string> {
        return Promise.resolve(this.repository.getItem(key));
    }
    create(value): Promise<MockData> {
        const key = getKey(String(this.repository.length));
        this.repository.setItem(key, value);
        return Promise.resolve({ [key]: value });
    }
    put(key: string, value): Promise<MockData> {
        this.repository.setItem(key, value);
        return Promise.resolve({ [key]: value });
    }
    delete(key): Promise<void> {
        this.repository.removeItem(key);
        return Promise.resolve();
    }
    getAll(): Promise<MockDataList> {
        return Promise.resolve({ hits: getAll() });
    }

    static create(): MockRepository {
        const instance = MockRepository.instance || new MockRepository();
        MockRepository.instance = instance;
        return instance;
    }
}
