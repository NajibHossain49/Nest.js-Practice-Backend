import { forwardRef, Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants";
import { UserModule } from "src/user/user.module";
import { JwtModule } from '@nestjs/jwt';
import { RoleModule } from "src/role/role.module";

@Module({
    imports: [UserModule,RoleModule, JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '30m' },
    }),],
    controllers : [AuthController],
    providers : [AuthService],
    exports: [AuthService]
})
export class AuthModule{}