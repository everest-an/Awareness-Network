import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password, publicKey } = registerDto;
    
    // Check if user already exists
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }
    
    // Create new user
    const user = await this.usersService.create(email, password, publicKey);
    
    // Generate JWT token
    const token = this.jwtService.sign({
      sub: user.userId,
      email: user.email,
    });
    
    return {
      user: {
        userId: user.userId,
        email: user.email,
        publicKey: user.publicKey,
        createdAt: user.createdAt,
      },
      token,
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    
    // Find user
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    // Validate password
    const isValidPassword = await this.usersService.validatePassword(user, password);
    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    // Generate JWT token
    const token = this.jwtService.sign({
      sub: user.userId,
      email: user.email,
    });
    
    return {
      user: {
        userId: user.userId,
        email: user.email,
        publicKey: user.publicKey,
        createdAt: user.createdAt,
      },
      token,
    };
  }

  async validateUser(userId: string) {
    return this.usersService.findById(userId);
  }
}
