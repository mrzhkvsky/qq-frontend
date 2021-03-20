# qq-frontend

## Project setup

### CLI setup
```
yarn global add @vue/cli
```
as `sudo` for linux

### Install dependencies
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Documentation

### Module export object
```
export default {
  router,
  locales?,
  store?
}
```

### Middleware example
```
export default function name(to, from, next) {
  if (conditional rule) {
    return next({ name: 'page-name' })
  } else {
    next()
  }
}

```
