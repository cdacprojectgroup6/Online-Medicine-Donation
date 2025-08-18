DROP DATABASE IF EXISTS `Med_Donation`;
CREATE DATABASE `Med_Donation`
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;
USE `Med_Donation`;

-- Table: admins
CREATE TABLE `admins` (
  `AdminId` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(100),
  `Role` VARCHAR(50),
  `Email` VARCHAR(255),
  `Password` VARCHAR(255),
  PRIMARY KEY (`AdminId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table: Donation
CREATE TABLE `Donation` (
  `DonationId` INT NOT NULL AUTO_INCREMENT,
  `MedicineId` INT,
  `DonorId` INT NOT NULL,
  `MedicineName` VARCHAR(255) NOT NULL,
  `Description` TEXT,
  `ExpiryDate` DATE NOT NULL,
  `Quantity` INT NOT NULL,
  `DonorNotes` TEXT,
  `AdminNotes` TEXT,
  `Status` VARCHAR(50) NOT NULL DEFAULT 'pending',
  `CreatedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `ApprovedAt` DATETIME(6),
  `UpdatedAt` DATETIME(6),
  PRIMARY KEY (`DonationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table: donations
CREATE TABLE `donations` (
  `DonationID` INT NOT NULL AUTO_INCREMENT,
  `MedicineID` INT,
  `DonorID` INT,
  `MedicineName` VARCHAR(100),
  `Description` VARCHAR(255),
  `ExpiryDate` DATE,
  `Quantity` INT,
  `DonorNotes` VARCHAR(500),
  `AdminNotes` VARCHAR(500),
  `Status` VARCHAR(50) DEFAULT 'pending',
  `CreatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `ApprovedAt` DATETIME,
  `UpdatedAt` DATETIME,
  PRIMARY KEY (`DonationID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table: hospitals
CREATE TABLE `hospitals` (
  `HospitalId` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(100),
  `Address` VARCHAR(255),
  `Phone` VARCHAR(20),
  `Email` VARCHAR(255),
  `Password` VARCHAR(255),
  PRIMARY KEY (`HospitalId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table: medicines
CREATE TABLE `medicines` (
  `MedicineID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(100),
  `Description` VARCHAR(255),
  `ExpiryDate` DATE,
  `Quantity` INT,
  `DonorID` INT,
  `Status` VARCHAR(50),
  `CreatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`MedicineID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table: ngos
CREATE TABLE `ngos` (
  `NgoId` INT NOT NULL AUTO_INCREMENT,
  `OrganizationName` VARCHAR(100),
  `ContactPerson` VARCHAR(100),
  `Phone` VARCHAR(20),
  `Address` VARCHAR(255),
  `Email` VARCHAR(255),
  `Password` VARCHAR(255),
  PRIMARY KEY (`NgoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table: requests
CREATE TABLE `requests` (
  `RequestID` INT NOT NULL AUTO_INCREMENT,
  `RequestedByHospitalId` INT,
  `RequestedByNgoId` INT,
  `MedicineName` VARCHAR(100),
  `Quantity` INT,
  `RequestDate` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `Status` VARCHAR(50),
  PRIMARY KEY (`RequestID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table: users
CREATE TABLE `users` (
  `UserId` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(100),
  `Phone` VARCHAR(20),
  `Address` VARCHAR(255),
  `Email` VARCHAR(255),
  `Password` VARCHAR(255),
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Foreign Key Constraints
ALTER TABLE `donations`
  ADD CONSTRAINT `fk_donations_donor_users`
    FOREIGN KEY (`DonorID`) REFERENCES `users` (`UserId`),
  ADD CONSTRAINT `fk_donations_medicines`
    FOREIGN KEY (`MedicineID`) REFERENCES `medicines` (`MedicineID`);

ALTER TABLE `medicines`
  ADD CONSTRAINT `fk_medicines_user`
    FOREIGN KEY (`DonorID`) REFERENCES `users` (`UserId`);

ALTER TABLE `requests`
  ADD CONSTRAINT `fk_requests_hospital`
    FOREIGN KEY (`RequestedByHospitalId`) REFERENCES `hospitals` (`HospitalId`),
  ADD CONSTRAINT `fk_requests_ngo`
    FOREIGN KEY (`RequestedByNgoId`) REFERENCES `ngos` (`NgoId`);