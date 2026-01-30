# Pharmacy Management System

## Overview

The Pharmacy Management System is a comprehensive solution for managing drug dispensing, inventory, safety features, and compliance requirements in a healthcare setting. This system meets all regulatory requirements including DEA controlled substance tracking, HIPAA compliance, and medication safety standards.

## Features

### ✅ Core Drug Management
- **Drug Entity with NDC Codes**: Complete drug information including National Drug Code (NDC), brand/generic names, manufacturer, dosage forms, strengths, and routes
- **Controlled Substance Classification**: Support for DEA schedules I-V with appropriate tracking and reporting
- **Drug Search and Lookup**: Fast search by NDC, brand name, generic name, or therapeutic class
- **Drug Interaction Database**: Comprehensive interaction checking with severity levels (minor, moderate, major, contraindicated)

### ✅ Pharmacy Inventory Management
- **Real-time Inventory Tracking**: Track quantities by lot number, expiration date, and location
- **FIFO Dispensing**: First Expired First Out inventory deduction to minimize waste
- **Automated Reorder Management**: Low stock alerts with automatic purchase order generation
- **Expiration Monitoring**: Track expired and expiring medications with configurable alert periods
- **Cost Analysis**: Unit cost, selling price, and total inventory value tracking
- **Recall Management**: FDA recall integration with inventory quarantine capabilities

### ✅ Prescription Verification and Filling Workflow
- **Complete Prescription Lifecycle**: pending → verified → filling → filled → dispensed
- **Pharmacist Verification**: Multi-step verification process with safety alert acknowledgment
- **Inventory Allocation**: Automatic inventory deduction with lot number tracking
- **Prescription Refill Management**: Automated refill eligibility checking with controlled substance restrictions
- **Patient Counseling Integration**: Required counseling tracking before dispensing

### ✅ Drug Interaction and Allergy Checking
- **Real-time Interaction Screening**: Check all drugs in prescription for interactions
- **Allergy Alert System**: Patient allergy checking against prescribed medications
- **Duplicate Therapy Detection**: Identify multiple drugs from same therapeutic class
- **Clinical Decision Support**: Age-based, renal/hepatic dosing alerts
- **Pregnancy/Breastfeeding Safety**: Category-based contraindication checking

### ✅ Medication Safety Alerts and Warnings
- **Multi-level Alert System**: Minor, moderate, major, and critical severity levels
- **Comprehensive Safety Checks**: Drug interactions, allergies, contraindications, age-related warnings
- **Alert Acknowledgment**: Pharmacist acknowledgment with notes before proceeding
- **Medication Error Reporting**: Complete error tracking and analysis system
- **Patient Counseling Documentation**: Required counseling topics and completion tracking

### ✅ Controlled Substance Tracking
- **DEA Compliance**: Complete audit trail for all controlled substance transactions
- **Running Balance Tracking**: Real-time inventory balance for each controlled substance
- **Waste Documentation**: Proper waste logging with witness requirements and DEA forms
- **Dispensing Logs**: Patient, prescriber, and pharmacist information for each transaction
- **Compliance Reporting**: Automated reports by schedule and date range

## API Endpoints

### Drug Management
```
GET    /pharmacy/drugs                    # Get all drugs
POST   /pharmacy/drugs                    # Create new drug
GET    /pharmacy/drugs/search?q={term}    # Search drugs
GET    /pharmacy/drugs/controlled        # Get controlled substances
GET    /pharmacy/drugs/{id}              # Get specific drug
```

### Inventory Management
```
GET    /pharmacy/inventory/drug/{drugId}           # Get inventory by drug
GET    /pharmacy/inventory/low-stock              # Get low stock items
GET    /pharmacy/inventory/expired                # Get expired items
GET    /pharmacy/inventory/expiring?days={n}      # Get expiring items
GET    /pharmacy/inventory/alerts                 # Get inventory alerts
PATCH  /pharmacy/inventory/{id}                   # Update inventory
POST   /pharmacy/inventory/auto-reorder           # Generate auto reorders
```

### Prescription Management
```
POST   /pharmacy/prescriptions                    # Create prescription
GET    /pharmacy/prescriptions/pending            # Get pending prescriptions
GET    /pharmacy/prescriptions/patient/{id}       # Get patient prescriptions
GET    /pharmacy/prescriptions/{id}               # Get specific prescription
POST   /pharmacy/prescriptions/{id}/verify        # Verify prescription
POST   /pharmacy/prescriptions/{id}/fill          # Fill prescription
POST   /pharmacy/prescriptions/{id}/dispense      # Dispense prescription
POST   /pharmacy/prescriptions/{id}/cancel        # Cancel prescription
```

### Prescription Refills
```
POST   /pharmacy/refills                          # Create refill
GET    /pharmacy/refills/eligibility/{id}         # Check refill eligibility
GET    /pharmacy/refills/patient/{id}/refillable  # Get refillable prescriptions
GET    /pharmacy/refills/prescription/{id}/history # Get refill history
```

### Safety and Compliance
```
GET    /pharmacy/prescriptions/{id}/alerts        # Get prescription alerts
POST   /pharmacy/alerts/{id}/acknowledge          # Acknowledge alert
POST   /pharmacy/safety/counseling                # Log counseling session
POST   /pharmacy/safety/errors                    # Report medication error
POST   /pharmacy/safety/validation/prescription/{id} # Validate prescription
```

### Controlled Substances
```
GET    /pharmacy/controlled-substances/logs/{drugId}    # Get CS logs
GET    /pharmacy/controlled-substances/balance/{drugId} # Get CS balance
POST   /pharmacy/controlled-substances/waste           # Log CS waste
GET    /pharmacy/controlled-substances/report          # Generate CS report
```

## Data Models

### Core Entities

#### Drug
- NDC Code (National Drug Code)
- Brand and Generic Names
- Manufacturer Information
- Dosage Form and Strength
- Route of Administration
- Controlled Substance Schedule
- Therapeutic Classes
- Indications and Contraindications
- Safety Warnings

#### PharmacyInventory
- Drug Reference
- Lot Number and Expiration Date
- Quantity and Location
- Reorder Levels
- Cost Information
- Supplier Information
- Status (available, expired, recalled, etc.)

#### Prescription
- Patient and Prescriber Information
- Prescription Items
- Status Workflow
- Refill Information
- Verification and Dispensing Details

#### SafetyAlert
- Alert Type and Severity
- Prescription Reference
- Alert Message and Recommendations
- Acknowledgment Information

#### ControlledSubstanceLog
- Drug and Transaction Information
- Quantity and Running Balance
- Patient and Prescriber Details
- Pharmacist Information
- Transaction Type (dispensed, received, wasted)

### Enhanced Entities

#### PatientCounselingLog
- Counseling Session Details
- Topics Covered
- Patient Understanding
- Pharmacist Documentation

#### MedicationErrorLog
- Error Classification and Severity
- Contributing Factors
- Corrective and Preventive Actions
- Reporting Information

#### PrescriptionRefill
- Original and Refill Prescription Links
- Refill Number and History
- Pharmacist Information

## Safety Features

### Drug Interaction Checking
- **Severity Levels**: Minor, Moderate, Major, Contraindicated
- **Clinical Effects**: Detailed description of interaction effects
- **Management Recommendations**: Clinical guidance for managing interactions
- **Real-time Screening**: Automatic checking during prescription entry

### Allergy Screening
- **Patient Allergy History**: Comprehensive allergy documentation
- **Cross-reactivity Checking**: Related drug allergy screening
- **Critical Alerts**: Immediate notification of allergy conflicts

### Clinical Validation
- **Age-based Dosing**: Pediatric and geriatric considerations
- **Renal/Hepatic Impairment**: Dose adjustment recommendations
- **Pregnancy Safety**: Category-based contraindication checking
- **Medical Condition Screening**: Disease-specific contraindications

### Medication Error Prevention
- **Error Classification**: Comprehensive error type taxonomy
- **Root Cause Analysis**: Contributing factor identification
- **Trend Analysis**: Error pattern recognition
- **Preventive Measures**: Systematic error prevention

## Compliance Features

### DEA Controlled Substance Compliance
- **Schedule-based Tracking**: Different rules for each DEA schedule
- **Perpetual Inventory**: Real-time balance tracking
- **Waste Documentation**: Proper waste logging with witnesses
- **Audit Trail**: Complete transaction history
- **Regulatory Reporting**: Automated compliance reports

### HIPAA Compliance
- **Data Encryption**: Sensitive data protection
- **Access Controls**: Role-based access restrictions
- **Audit Logging**: Complete access audit trail
- **Data Minimization**: Only necessary data collection

### FDA Compliance
- **Recall Management**: FDA recall integration
- **Adverse Event Reporting**: MedWatch integration capability
- **Drug Shortage Tracking**: Supply chain monitoring

## Installation and Setup

### Prerequisites
- Node.js 18+
- PostgreSQL 13+
- TypeORM
- NestJS

### Database Setup
```bash
# Run migrations
npm run migration:run

# The system will create all necessary tables and seed basic drug interaction data
```

### Environment Variables
```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_DATABASE=healthy_stellar

# Security
JWT_SECRET=your-jwt-secret
ENCRYPTION_KEY=your-encryption-key

# External APIs (optional)
FDA_API_KEY=your-fda-api-key
```

## Usage Examples

### Creating a Prescription
```typescript
const prescription = await prescriptionService.create({
  prescriptionNumber: 'RX-2024-001',
  patientId: 'patient-123',
  patientName: 'John Doe',
  patientDOB: '1980-01-01',
  patientAllergies: ['penicillin', 'sulfa'],
  prescriberId: 'prescriber-456',
  prescriberName: 'Dr. Smith',
  prescriberLicense: 'MD12345',
  prescriberDEA: 'AS1234567',
  prescriptionDate: new Date(),
  refillsAllowed: 5,
  items: [{
    drugId: 'drug-789',
    quantityPrescribed: 30,
    dosageInstructions: 'Take 1 tablet by mouth twice daily',
    daySupply: 30
  }]
});
```

### Checking Drug Interactions
```typescript
const interactionCheck = await drugInteractionService.checkInteractions([
  'drug-id-1', 'drug-id-2', 'drug-id-3'
]);

if (interactionCheck.hasInteractions) {
  console.log(`Found ${interactionCheck.interactions.length} interactions`);
  console.log(`Highest severity: ${interactionCheck.severity}`);
}
```

### Verifying a Prescription
```typescript
const verifiedPrescription = await prescriptionService.verifyPrescription(
  prescriptionId, 
  {
    pharmacistId: 'pharmacist-123',
    pharmacistName: 'Jane Pharmacist',
    pharmacistLicense: 'RPH12345',
    acknowledgedAlertIds: ['alert-1', 'alert-2'],
    verificationNotes: 'Verified dosing and interactions',
    requiresCounseling: true
  }
);
```

### Logging Controlled Substance Dispensing
```typescript
await controlledSubstanceService.logDispensing(
  drugId,
  prescriptionId,
  quantityDispensed,
  patientName,
  prescriberName,
  prescriberDEA,
  pharmacistLicense,
  pharmacistName
);
```

## Testing

### Unit Tests
```bash
npm run test
```

### Integration Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:cov
```

## Security Considerations

### Data Protection
- All PHI is encrypted at rest and in transit
- Controlled substance data has additional encryption layers
- Access logging for all sensitive operations

### Authentication and Authorization
- JWT-based authentication
- Role-based access control (RBAC)
- Multi-factor authentication support

### Audit Trail
- Complete audit trail for all operations
- Immutable log entries
- Regulatory compliance reporting

## Performance Optimization

### Database Optimization
- Proper indexing on frequently queried fields
- Query optimization for large datasets
- Connection pooling

### Caching Strategy
- Redis caching for frequently accessed data
- Drug interaction cache
- Inventory status cache

### Monitoring
- Application performance monitoring
- Database query monitoring
- Error tracking and alerting

## Regulatory Compliance

### DEA Requirements
- ✅ Controlled substance perpetual inventory
- ✅ Biennial inventory reconciliation
- ✅ Theft and loss reporting
- ✅ Prescription monitoring program (PMP) integration ready

### State Board of Pharmacy
- ✅ Pharmacist verification requirements
- ✅ Patient counseling documentation
- ✅ Prescription transfer capabilities
- ✅ Quality assurance programs

### FDA Requirements
- ✅ Drug recall management
- ✅ Adverse event reporting capability
- ✅ Drug shortage monitoring
- ✅ Serialization and traceability ready

## Future Enhancements

### Planned Features
- [ ] Barcode scanning integration
- [ ] Electronic prescribing (e-Rx) integration
- [ ] Insurance real-time adjudication
- [ ] Medication therapy management (MTM)
- [ ] Clinical decision support rules engine
- [ ] Mobile application for pharmacists
- [ ] Patient portal integration
- [ ] Automated dispensing cabinet integration

### Integration Capabilities
- [ ] EHR/EMR systems
- [ ] Insurance networks
- [ ] Prescription benefit managers (PBMs)
- [ ] Wholesaler ordering systems
- [ ] State prescription monitoring programs

## Support and Documentation

### API Documentation
- Swagger/OpenAPI documentation available at `/api/docs`
- Postman collection for testing
- Integration examples and SDKs

### Training Materials
- User manuals for pharmacists and technicians
- Video tutorials for common workflows
- Compliance training materials

### Support Channels
- Technical support documentation
- Issue tracking and bug reports
- Feature request process

## License

This pharmacy management system is proprietary software designed for healthcare organizations. Please contact the development team for licensing information and compliance requirements.

## Contributing

Please read the contributing guidelines and code of conduct before submitting pull requests. All contributions must maintain HIPAA compliance and follow healthcare software development best practices.