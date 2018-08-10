# Theming

Theming is accomplished via a combination of backend and frontend configurations. The end result will allow a site to have customized colors, logo, and header/footer links.

## Adding a new theme
To generate a new theme, simply create a new file in this folder {themename}.scss, similar to the base.scss theme.

Inside of this file, you can simply override variables `$primary = #ff0000`, and anywhere that Bootstrap using that primary color, the new color will be used. Any new variable added in a theme should also have a variable in the base.scss with `!default` so it has a fallback. Once the theme is ready, run the production build (see section below) and `/dist/` will now contain a `base-app.css` and `{themename}-app.css`. These are complete themes in the sense that they contain all necessary CSS for the site.

### Production builds
Due to how webpack is handling development build currently (hot reloading), theming is only available in the production build. In order to use the production build, you need to do the following:
  1.
  1. Allow a new site in the CORS_ORIGIN_WHITELIST setting of the backend: `CORS_ORIGIN_WHITELIST = ('localhost:1991','localhost:8000')`
  2. Restart backend: `docker-compose journals restart`
  3. Enter frontend container: `make shell`
  4. Run the production build with JOURNALS_BASE_URL
  4. Set the a JOURNALS_BASE_URL enviornment variable equal to the development backend host: `JOURNALS_BASE_URL='http://localhost:18606'`
  5. Run production build: `npm run build`
  6. Exit container: `exit`
  7. Enter `dist` directory and serve files `cd dist; python -m SimpleHttpServer` (or any other HTTP server)


## Using a new theme
In the journals backend application:
  1. Enter the CMS
  2. Click 'Settings' in the left panel
  3. Click 'Site branding'
  4. Enter the logo you want, and the {themename} from above.

The client will receive this info from the `/api/v1/siteinfo` endpoint, and load the CSS file named `{themename}-app.css`.

## Not yet implemented
- Custom header and footer links
- Development build theming
- Loading screen to prevent style/logo flash

