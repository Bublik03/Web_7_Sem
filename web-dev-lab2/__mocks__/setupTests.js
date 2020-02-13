import { configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter(),
    disableLifecycleMethods: true
});

const mockGeolocation = {
    getCurrentPosition: jest.fn()
        .mockImplementationOnce((success, error) => error())
};

global.navigator.geolocation = mockGeolocation;

