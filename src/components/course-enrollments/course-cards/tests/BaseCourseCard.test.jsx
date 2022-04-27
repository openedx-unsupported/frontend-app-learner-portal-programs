/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import * as analytics from '@edx/frontend-platform/analytics';
import { AppContext } from '@edx/frontend-platform/react';

import BaseCourseCard from '../BaseCourseCard';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  userAccount: {
    username: 'edx',
  },
});

describe('<BaseCourseCard />', () => {
  describe('email settings modal', () => {
    let wrapper;
    // eslint-disable-next-line no-import-assign
    analytics.sendTrackEvent = jest.fn();

    beforeEach(() => {
      const pageContext = {
        enterpriseName: 'test-enterprise-name',
      };
      wrapper = mount((
        <Provider store={store}>
          <AppContext.Provider value={{ pageContext }}>
            <BaseCourseCard
              type="completed"
              title="edX Demonstration Course"
              linkToCourse="https://edx.org"
              courseRunId="my+course+key"
              hasEmailsEnabled
            />
          </AppContext.Provider>
        </Provider>
      ));
      // open email settings modal
      wrapper.find('Dropdown').find('button.dropdown-toggle').simulate('click');
      wrapper.find('Dropdown').find('button.dropdown-item').simulate('click');
      expect(wrapper.find('BaseCourseCard').state('modals').emailSettings.open).toBeTruthy();
    });

    it('test modal close/cancel', () => {
      wrapper.find('EmailSettingsModal').find('.modal-footer .btn-link').first().simulate('click');
      expect(wrapper.find('BaseCourseCard').state('modals').emailSettings.open).toBeFalsy();
    });
  });
});
