import { Login } from '@ecommerce/models';
import { AuthenticationIRepository } from '../domain/authentication.i.repository';

export class Authenticate {
  constructor(private authenticationRepository: AuthenticationIRepository) {}
  async run(login: Login) {
    return this.authenticationRepository.authenticate(login);
  }
}
