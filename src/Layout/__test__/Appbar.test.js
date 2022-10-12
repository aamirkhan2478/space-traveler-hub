import renderer from 'react-test-renderer';
import Appbar from './__mock__/Appbar';

it('renders navbar correctly', () => {
  const tree = renderer.create(<Appbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
