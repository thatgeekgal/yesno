import ask from './Api';

describe('API caller', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should call YesNo API', () => {
        const fetchSpy = jest.spyOn(global, 'fetch')
            .mockImplementation(() => Promise.resolve({
                json: () => {},
            }));

        return ask()
            .then(() => {
                expect(fetchSpy).toHaveBeenCalledWith('https://yesno.wtf/api/');
            });
    });

    it('should return YesNo reponse in JSON format', () => {
        const fetchSpy = jest.spyOn(global, 'fetch')
            .mockImplementation(() => Promise.resolve({
                json: () => ({ foo: 'bar'}),
            }));

        console.log(fetchSpy.mock.calls);

        return ask()
            .then(response => {
                expect(response).toEqual({ foo: 'bar'})
            });
    });
});