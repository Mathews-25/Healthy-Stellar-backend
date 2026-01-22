import { IsNotEmpty, IsString, IsUrl, Matches } from 'class-validator';

export class UpdatePatientPhotoDto {
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  @Matches(/\.(jpg|jpeg|png)$/i, {
    message: 'Photo must be a JPG or PNG image',
  })
  photoUrl: string;
}
