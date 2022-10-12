import renderer from 'react-test-renderer';
import MyMission from './__mock__/MyMissions';

it('renders missions correctly', () => {
  const tree = renderer.create(<MyMission />).toJSON();
  expect(tree).toMatchSnapshot();
});
