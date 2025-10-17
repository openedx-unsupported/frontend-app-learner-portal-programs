🛑🛑🛑 This repository is no longer maintained.  If you still need it, feel free to fork the repository. 🛑🛑🛑

Archived as a part of https://github.com/openedx/public-engineering/issues/432

# frontend-app-learner-portal-programs

# Purpose
The edX learning platform's frontend for program-affiliated learners.

# Getting started

## Requirements for all methods

- OpenedX Docker Devstack up and running for Authentication
- Clone this repository locally with `git clone <repo URL>`

### With Docker

1. Run `make build`
2. Run `make up`
3. Access the local server at `http://localhost:8734`

### Without Docker

##### How to set up the dev environment
To run the project, first install dependencies

`$ npm i`

then, start the dev server:

`$ npm start`

## Where is it running?
The project itself will run on  `http://localhost:8734`

you can test your graphql queries with the playground, found here:  `http://localhost:8734/___graphql`

### How to run/serve a production build locally

```
npm run build   # Builds to dist folder
rm -rf public   # If you already have a public folder there
mv dist public  # Rename dist folder
npm run serve   # Run server. This command will automatically look at public/ directory
```

## Testing

Testing is supported with Jest and Enzyme. To run tests, use:

`npm test`

to use mock branding data, add `USE_MOCK_DATA` to the `.env.development` file

```
...
DESIGNER_BASE_URL='http://localhost:18808'
HOSTNAME='example.com'
UNBRANDED_LANDING_PAGE=''
USE_MOCK_DATA='true'

```

`.env` forces all variables to be strings, so in order to turn the mock data off again, set `USE_MOCK_DATA` to either an empty string, or delete the variable.

## Other useful commands

`$ npm clean`

This will remove the current gatsby cache and public folder. Can be useful if you run into plugin/dependency issues, or a graphql error that doesn't make sense.

`$ npm shell`

This can be used to get into the gatsby instance and see important information, such as the babel config, your static queries, the graphql schema, etc.


## License

The code in this repository is licensed under the AGPLv3 unless otherwise
noted.

Please see `LICENSE <LICENSE>`_ for details.

## Contributing

Contributions are very welcome.  Please read `How To Contribute`_ for details.

.. _How To Contribute: https://openedx.org/r/how-to-contribute

This project is currently accepting all types of contributions, bug fixes,
security fixes, maintenance work, or new features.  However, please make sure
to have a discussion about your new feature idea with the maintainers prior to
beginning development to maximize the chances of your change being accepted.
You can start a conversation by creating a new issue on this repo summarizing
your idea.

## Getting Help

If you're having trouble, we have discussion forums at
https://discuss.openedx.org where you can connect with others in the community.

Our real-time conversations are on Slack. You can request a `Slack
invitation`_, then join our `community Slack workspace`_.  Because this is a
frontend repository, the best place to discuss it would be in the `#wg-frontend
channel`_.

For anything non-trivial, the best path is to open an issue in this repository
with as many details about the issue you are facing as you can provide.

https://github.com/openedx/frontend-app-learner-portal-programs/issues

For more information about these options, see the `Getting Help`_ page.

.. _Slack invitation: https://openedx.org/slack
.. _community Slack workspace: https://openedx.slack.com/
.. _#wg-frontend channel: https://openedx.slack.com/archives/C04BM6YC7A6
.. _Getting Help: https://openedx.org/community/connect

##  The Open edX Code of Conduct

All community members are expected to follow the `Open edX Code of Conduct`_.

.. _Open edX Code of Conduct: https://openedx.org/code-of-conduct/

## Reporting Security Issues

Please do not report security issues in public. Please email security@openedx.org.
