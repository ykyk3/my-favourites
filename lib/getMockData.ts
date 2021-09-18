import { MockRepository, MockDataList } from './repository';

export const getMockData = (): Promise<MockDataList> => {
    const repository = MockRepository.create();
    return repository.getAll();
};
