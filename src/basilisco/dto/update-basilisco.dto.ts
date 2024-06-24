import { PartialType } from '@nestjs/mapped-types';
import { CreateBasiliscoDto } from './create-basilisco.dto';

export class UpdateBasiliscoDto extends PartialType(CreateBasiliscoDto) {}
