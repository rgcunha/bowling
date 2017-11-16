import React from 'react';
import { shallow } from 'enzyme';
import Scoring from './Scoring';
import FrameScoring from './frame-scoring';
import FrameScoringModel from '../../../test/factories/frame-scoring';

describe('<Scoring />', () => {
  let wrapper;
  const mockScoring = Array(10).fill(FrameScoringModel.build());

  beforeAll(() => {
    wrapper = shallow(<Scoring scoring={mockScoring} />);
  });

  test('renders <FrameScoring /> 10 times', () => {
    expect(wrapper.find(FrameScoring).length).toEqual(10);
  });

  test('renders <FrameScoring /> with the right props', () => {
    const { scoring } = wrapper.find(FrameScoring).first().props();
    expect(scoring).toEqual(mockScoring[0]);
  });

  test('renders the total score', () => {
    const text = wrapper.find('.scoring__total').text();
    expect(text).toEqual('Total: 300');
  });
});
