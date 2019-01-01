import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import TOCViewer from '.';
import mockJournalAbout from './../JournalAboutPage/JournalAbout.mock';

const TOCViewerWrapper = props => (
  <MemoryRouter>
    <TOCViewer
      {...props}
    />
  </MemoryRouter>
);

describe('TOCViewer', () => {
  it('renders correctly on journal about page and nav panel closed', () => {
    const tree = renderer
      .create((
        <TOCViewerWrapper
          journal={mockJournalAbout}
          navPanelOpen={false}
        />
      ))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly on journal about page and nav panel opened', () => {
    const tree = renderer
      .create((
        <TOCViewerWrapper
          journal={mockJournalAbout}
          navPanelOpen
        />
      ))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly on journal page and nav panel closed', () => {
    const tree = renderer
      .create((
        <TOCViewerWrapper
          journal={mockJournalAbout}
          currentPageId={6}
          navPanelOpen={false}
        />
      ))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly on journal page and nav panel opened', () => {
    const tree = renderer
      .create((
        <TOCViewerWrapper
          journal={mockJournalAbout}
          currentPageId={6}
          navPanelOpen
        />
      ))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders in expanded mode, clicks to collapse and re-renders with different current page', () => {
    const wrapper = mount((
      <TOCViewerWrapper
        journal={mockJournalAbout}
        currentPageId={8}
        navPanelOpen
      />
    ));

    let linkSelector = 'a [href="/5/pages/8"]';
    expect(wrapper.find(linkSelector).closest('span').find('span.fa-angle-down').length).toBe(1);
    wrapper.find(linkSelector).closest('span').find('button').simulate('click');
    expect(wrapper.find(linkSelector).closest('span').find('span.fa-angle-down').length).toBe(0);

    wrapper.setProps({
      journal: mockJournalAbout,
      currentPageId: 9,
      navPanelOpen: true,
    });
    linkSelector = 'a [href="/5/pages/9"]';
    expect(wrapper.find(linkSelector).closest('span').find('span.bullet').length).toBe(1);
  });
});
