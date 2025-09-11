import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './feature/usuarios/usuarios.module';
import { ProductosModule } from './feature/productos/productos.module';
import { DominiosModule } from './feature/dominios/dominios.module';

@Module({
  imports: [UsuariosModule, ProductosModule, DominiosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
