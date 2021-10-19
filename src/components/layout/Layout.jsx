import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import SiteFooter from '@edx/frontend-component-footer-edx';
import NoticesProvider from '../notices-provider';

import { SiteHeader } from '../site-header';

import './styles/Layout.scss';

class Layout extends Component {
  getUserMenuItems = () => {
    const { header: { userMenu } = {} } = this.context;
    return userMenu || [];
  };

  getMainMenuItems = () => {
    const { header: { mainMenu } = {} } = this.context;
    return mainMenu || [];
  };

  render() {
    const {
      siteUrl, siteName, children, headerLogo,
    } = this.props;
    return (
      <IntlProvider locale="en">
        <NoticesProvider>
          <>
            <Helmet titleTemplate="%s - edX" defaultTitle="edX">
              <html lang="en" />
            </Helmet>
            <SiteHeader
              headerLogo={headerLogo}
              logoAltText={siteName}
              logoDestination={siteUrl}
              userMenu={this.getUserMenuItems()}
            />
            <main id="content">
              {children}
            </main>
            <SiteFooter />
          </>
        </NoticesProvider>
      </IntlProvider>
    );
  }
}

Layout.contextType = AppContext;

Layout.defaultProps = {
  children: [],
  siteName: 'edX',
  siteUrl: 'https://edx.org/',
  headerLogo: null,
};

Layout.propTypes = {
  children: PropTypes.node,
  siteName: PropTypes.string,
  siteUrl: PropTypes.string,
  headerLogo: PropTypes.string,
};

export default Layout;
