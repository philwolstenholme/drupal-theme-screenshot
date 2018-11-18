# drupal-theme-screenshot

Grab a screenshot from a URL and save it with the right dimensions for a Drupal theme's screenshot

## Usage

Run the script from your theme's root directory. `drupal-theme-screenshot` will output a file called `drupal-theme-screenshot` to whatever directory it is run from.

```
npx @philw_/drupal-theme-screenshot --url="https://example.com"
```

## Contributing

Webshot provides a ton of options which aren't currently usable with this module. PRs are welcome to allow configuration to be passed to the script.

### Releasing

Run `npm run release`
