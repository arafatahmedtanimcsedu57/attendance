import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class PingResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello from API';
  }
}
