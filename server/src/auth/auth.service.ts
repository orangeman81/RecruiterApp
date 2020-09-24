import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserS } from 'src/schemas/user.schema';
import { CredentialsDTO, UserDTO } from '../../../models/auth';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserS.name) private userModel: Model<UserS>,
    private jwt: JwtService,
  ) {}

  async signup(user: UserDTO): Promise<unknown> {
    const { username, password, email, admin } = user;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await this.hashPassword(password, salt);
    const createdUser = new this.userModel({
      username,
      password: hashedPassword,
      salt,
      email,
      admin,
    });
    await createdUser.save();
    return { username, email, admin };
  }

  async signin(credentials: CredentialsDTO) {
    const user = await this.validateUser(credentials);

    if (!user) {
      throw new UnauthorizedException();
    }

    const accessToken = await this.jwt.sign(credentials);
    return { user, accessToken };
  }

  async findUser(): Promise<UserDTO[]> {
    return this.userModel.find().exec();
  }

  async validateUser(credentials: CredentialsDTO): Promise<any> {
    const { username, password } = credentials;
    const user: UserDTO = await this.userModel.findOne({ username });
    const hashedPass = await this.hashPassword(password, user.salt);
    if (user && user.password === hashedPass) {
      const { username, email, admin } = user;
      return { username, email, admin };
    }
    return null;
  }

  private async hashPassword(password, salt) {
    return bcrypt.hash(password, salt);
  }
}
