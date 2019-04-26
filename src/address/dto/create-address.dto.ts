import {
    MaxLength,
    IsUrl,
    IsBoolean,
    IsArray,
    IsNotEmpty,
    IsOptional,
    Validate,
    IsNumber,
    IsPhoneNumber,
} from 'class-validator';
export class CreateAddressDto {
    @MaxLength(10)
    @IsNotEmpty()
    name: string

    @IsPhoneNumber('zh-Cn')
    phone: number

    @IsNotEmpty()
    province: string

    @IsNotEmpty()
    city: string

    @IsNotEmpty()
    area: string

    @MaxLength(80)
    @IsNotEmpty()
    detail: string
}