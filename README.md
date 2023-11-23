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

Nest comes with built in exception layers which is responsible for processing unhandled exceptions across an application.
When an exception is not handled by your application code, it is caught by this layer which then sends a response message to the user.

Out of the box, this functionality is handled by the `global exception filter`  which handles exception of type `HttpException`.

## Throwing standard exceptions

Nest provides `HttpException` which is exposed from the `@nestjs/common` package.
For typical HTTP REST/GraphQL API based applications, it's best practice to send standard Http response object when certain error occurs.

## Custom Exceptions
In most cases, you will not need to write your own exceptions and just use the built in one but you have the flexibility to write your own `custom exceptions`.
Custom exceptions inherits from the base `HttpException` class.

## Built In HTTP-Exception

Nest provides a set of in-built exceptions that inherits the base  HttpExceptions. These exceptions are exposed through the `@nestjs/common` package.

    BadRequestException
    UnauthorizedException
    NotFoundException
    ForbiddenException
    NotAcceptableException
    RequestTimeoutException
    ConflictException
    GoneException
    HttpVersionNotSupportedException
    PayloadTooLargeException
    UnsupportedMediaTypeException
    UnprocessableEntityException
    InternalServerErrorException
    NotImplementedException
    ImATeapotException
    MethodNotAllowedException
    BadGatewayException
    ServiceUnavailableException
    GatewayTimeoutException
    PreconditionFailedException

### Exception filters

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