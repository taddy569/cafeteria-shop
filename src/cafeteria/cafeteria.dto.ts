import { IsNotEmpty } from 'class-validator';

export class CafeteriaDTO {
    @IsNotEmpty()
    name: string
}