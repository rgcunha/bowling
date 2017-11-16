import React from 'react';
import { shallow } from 'enzyme';
import Actions from './Actions';
import RandomRoll from '../../containers/actions/random-roll';
import ManualRoll from '../../containers/actions/manual-roll';

describe('<Actions />', () => {
  let wrapper;
  let mockGameInProgress = true;
  let mockTurnInProgress = false;

  beforeAll(() => {
    wrapper = shallow(<Actions turnInProgress={mockTurnInProgress} gameInProgress={mockGameInProgress} />);
  });

  test('renders 1 <ManualRoll /> and 1 <RandomRoll />', () => {
    expect(wrapper.find(ManualRoll).length).toEqual(1);
    expect(wrapper.find(RandomRoll).length).toEqual(1);
  });

  test('renders <ManualRoll /> with the right props', () => {
    const { disabled } = wrapper.find(ManualRoll).first().props();
    expect(disabled).toBeFalsy();
  });

  test('renders <RandomRoll /> with the right props', () => {
    const { disabled } = wrapper.find(RandomRoll).first().props();
    expect(disabled).toBeFalsy();
  });

  describe('when game is over', () => {
    beforeAll(() => {
      mockGameInProgress = false;
      wrapper = shallow(<Actions turnInProgress={mockTurnInProgress} gameInProgress={mockGameInProgress} />);
    });

    test('renders <ManualRoll /> with the right props', () => {
      const { disabled } = wrapper.find(ManualRoll).first().props();
      expect(disabled).toBeTruthy();
    });

    test('renders <RandomRoll /> with the right props', () => {
      const { disabled } = wrapper.find(RandomRoll).first().props();
      expect(disabled).toBeTruthy();
    });
  });

  describe('when turn is in progress', () => {
    beforeAll(() => {
      mockTurnInProgress = true;
      wrapper = shallow(<Actions turnInProgress={mockTurnInProgress} gameInProgress={mockGameInProgress} />);
    });

    test('renders <ManualRoll /> with the right props', () => {
      const { disabled } = wrapper.find(ManualRoll).first().props();
      expect(disabled).toBeTruthy();
    });

    test('renders <RandomRoll /> with the right props', () => {
      const { disabled } = wrapper.find(RandomRoll).first().props();
      expect(disabled).toBeTruthy();
    });
  });
});
