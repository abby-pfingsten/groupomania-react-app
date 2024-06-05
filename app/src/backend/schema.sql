-- Creating the Users DB
CREATE TABLE IF NOT EXISTS `Users` 
(`id` INTEGER NOT NULL auto_increment , 
`name` VARCHAR(255),
 `email` VARCHAR(255) UNIQUE, 
 `password` VARCHAR(255), 
 `accountActive` VARCHAR(255), 
 `createdAt` DATETIME NOT NULL, 
 `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)
 ) ENGINE=InnoDB;

-- Creating the Posts DB
CREATE TABLE IF NOT EXISTS `Posts` 
(`id` INTEGER NOT NULL auto_increment ,
 `title` VARCHAR(255), 
 `body` VARCHAR(255), 
 `media` VARCHAR(255), 
 `usersRead` JSON, 
 `createdAt` DATETIME NOT NULL, 
 `updatedAt` DATETIME NOT NULL, 
 `UserId` INTEGER NOT NULL, PRIMARY KEY (`id`), 
 FOREIGN KEY (`UserId`) 
 REFERENCES `Users` (`id`) 
 ON DELETE NO ACTION ON UPDATE CASCADE
 ) ENGINE=InnoDB;