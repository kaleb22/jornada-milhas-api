import { TipoPassagem } from '../entities/passagem.entity';
import { ApiProperty } from '@nestjs/swagger';
import { CompanhiaDto } from '../../companhias/dto/companhia.dto';
import { EstadoDto } from '../../estados/dto/estado.dto';

export class OrcamentoDto {
  @ApiProperty()
  descricao: string;
  @ApiProperty()
  preco: number;
  @ApiProperty()
  taxaEmbarque: number;
  @ApiProperty()
  total: number;
}

export class PassagemDto {
  @ApiProperty()
  tipo: TipoPassagem;
  @ApiProperty()
  precoIda: number;
  @ApiProperty()
  precoVolta: number;
  @ApiProperty()
  taxaEmbarque: number;
  @ApiProperty()
  conexoes: number;
  @ApiProperty()
  tempoVoo: number;
  @ApiProperty()
  origem: EstadoDto;
  @ApiProperty()
  destino: EstadoDto;
  @ApiProperty()
  companhia: CompanhiaDto;
  @ApiProperty()
  dataIda: Date;
  @ApiProperty()
  dataVolta: Date;
  @ApiProperty()
  total: number;
  @ApiProperty({ type: [OrcamentoDto] })
  orcamento: OrcamentoDto[];
}
