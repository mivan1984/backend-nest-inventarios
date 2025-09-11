import { PartialType } from '@nestjs/swagger';
import { CreateDominioDto } from './create-dominio.dto';

export class UpdateDominioDto extends PartialType(CreateDominioDto) {}
