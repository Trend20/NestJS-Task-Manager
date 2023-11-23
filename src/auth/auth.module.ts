import { Global, Module } from '@nestjs/common';

// you can always make a module global by adding the @Global decorator.
// this make this module available everywhere out-of the box.
// Modules that will need to utilize the cat module will not need to import it in their imports array.
// global modules are only registered once.
@Global()
@Module({})
export class AuthModule {}
