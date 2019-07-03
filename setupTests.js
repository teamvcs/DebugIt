import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// this is where we reference the adapter package we installed
// earlier


configure({ adapter: new Adapter() });
