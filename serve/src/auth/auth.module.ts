import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/prisma/database.module';
import { UserRepository } from 'src/user/service/user.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthStrategy } from './auth.strategy';

@Module({
   imports: [
      PassportModule.register({ defaultStrategy: 'jwt' }),
      JwtModule.register({
         secret: process.env.SECRET_KEY,
         signOptions: { expiresIn: '12h' },
      }),
      ConfigModule.forRoot(),
      DatabaseModule,
   ],
   controllers: [AuthController],
   providers: [AuthService, UserRepository, AuthStrategy],
   exports: [AuthService, AuthStrategy],
})
export class AuthModule {}
