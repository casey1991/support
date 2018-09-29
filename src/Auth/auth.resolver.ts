import {
  Query,
  Resolver,
  ResolveProperty,
  Args,
  Parent,
  Mutation,
  Context,
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserService } from '../User/user.service';
@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}
  @Mutation('signup')
  async signup(@Args() args) {
    return await this.userService.create({ ...args });
  }
  @Mutation('createToken')
  async createToken(@Args('email') email, @Args('password') password) {
    return await this.authService.createToken(email, password);
  }
}
