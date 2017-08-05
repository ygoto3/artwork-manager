# artwork-manager

A web service to manage artworks (in development)

## Requirement

- Node.js v8.1.3~
- MongoDB v3.4.6~
- GNU Make v3.82~
- gettext v0.19.8.1~

## Run

Set environment variables:

- `SSL_CERTIFICATE`
  - ex: /etc/letsencrypt/live/example.com/fullchain.pem
- `SSL_CERTIFICATE_KEY`
  - ex: /etc/letsencrypt/live/example.com/privkey.pem 

Optionally:

- `PORT`
  - A given port that the web application uses
- `MONGODB_URI`
  - default: `mongodb://localhost/mydb`

Then

```sh
$ yarn build
$ yarn start
```

## Development

### Server-side

```sh
$ yarn dev:server
```

Then

```sh
$ yarn start:dev
```

### Client-side

```sh
$ yarn dev:client
```

### UI Components

```sh
$ yarn storybook
```

Then

```sh
$ yarn dev:client
```

### Test

```sh
$ yarn test
```
