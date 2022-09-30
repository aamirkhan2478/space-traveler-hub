import renderer from 'react-test-renderer';
import MyRockets from './__mock__/MyRockets';

it('renders rockets correctly', () => {
  const tree = renderer.create(<MyRockets />).toJSON();
  expect(tree).toMatchSnapshot();
});
