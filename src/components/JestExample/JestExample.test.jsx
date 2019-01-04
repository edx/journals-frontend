import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link.react';
import MySum from '.';
import ImageViewer from '../ImageViewer';


it('Image viewer with valid img', () => {
  const tree = renderer
    .create(<ImageViewer url="http://foo.com/myimg.png" altText="My Test Image" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Image viewer with missing img', () => {
  const tree = renderer
    .create(<ImageViewer url="" altText="My Test Image" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Image viewer with missing image check DOM', () => {
  const wrapper = mount((<ImageViewer url="" altText="My Test Image" />));
  expect(wrapper.find('.alert-dialog').exists()).toBeTruthy();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Link href="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('adds 1 + 2 to equal 3', () => {
  expect(MySum(1, 2)).toBe(3);
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
