import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import SearchBar from './index';

import history from '../../data/history';

const props = {
  history,
};

function search(input, searchQuery) {
  input.simulate('change', { target: { value: searchQuery } });
  input.simulate('keypress', { key: 'Enter' });
}

describe('<SearchBar />', () => {
  describe('renders', () => {
    it('correctly', () => {
      const tree = renderer
        .create(<SearchBar {...props} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('search', () => {
    const wrapper = mount(<SearchBar {...props} />);
    const input = wrapper.find('input');
    const searchQuery = 'foo';

    it('updates input', () => {
      expect(wrapper.find('input').prop('value')).toBe('');
      search(input, searchQuery);
      expect(wrapper.find('input').prop('value')).toBe(searchQuery);
    });

    it('with null journal', () => {
      wrapper.setProps({ journalId: null });
      expect(wrapper.find('input').prop('value')).toBe(searchQuery);
      const newQuery = 'bar';
      search(input, newQuery);
      expect(wrapper.find('input').prop('value')).toBe(newQuery);
    });

    it('with OR operator', () => {
      search(input, searchQuery);
      expect(wrapper.prop('history').location.search).toMatch(`query=${searchQuery}`);
      expect(wrapper.prop('history').location.search).toMatch('operator=or');
    });

    it('with AND operator', () => {
      search(input, `"${searchQuery}"`);
      expect(wrapper.prop('history').location.search).toMatch(`query=${searchQuery}`);
      expect(wrapper.prop('history').location.search).toMatch('operator=and');
    });
  });
});
