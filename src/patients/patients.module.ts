import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { Patient } from './entities/patient.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { PatientPrivacyGuard } from './guards/patient-privacy.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([Patient]), // register Patient entity
  ],
  controllers: [PatientsController],
  providers: [
    PatientsService,
    JwtAuthGuard,
    RolesGuard,
    PatientPrivacyGuard,
  ],
  exports: [PatientsService], // so other modules can inject the service
})
export class PatientModule {}
