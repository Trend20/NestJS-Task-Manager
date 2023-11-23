# Task Manager


## Description
Task Manager Application built using [Nest](http://nestjs.com/).

## Middleware

This is a function that is called before the route handler.
It has access to the `request`, `response` and the `next` middleware function.

`Nest` middlewares are by default the same as `express` middlewares and can perform the following tasks:
    execute any code.
    make changes to the request and the response objects.
    end the request-response cycle.
    call the next middleware function in the stack.
    if the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

You can implement a custom Nest middleware using a function or a class with the `@Injectable` decorator. The class should implement the `NestMiddleware` interface while the function does not have any specification.

## Exception filters



## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```