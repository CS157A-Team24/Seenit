-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: seenit-0.cxolnqt4sckz.us-west-1.rds.amazonaws.com    Database: seenit_v0
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

/*SET @@GLOBAL.GTID_PURGED='';*/

--
-- Table structure for table `Channels`
--

DROP TABLE IF EXISTS `Channels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Channels` (
  `id` varchar(64) NOT NULL,
  `name` varchar(128) NOT NULL,
  `banner_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Channels`
--

LOCK TABLES `Channels` WRITE;
/*!40000 ALTER TABLE `Channels` DISABLE KEYS */;
INSERT INTO `Channels` VALUES ('1','programming','www.banner1.com'),('10','myChannel10','www.banner10.com'),('11','myChannel11','www.banner11.com'),('12','myChannel12','www.banner12.com'),('13','myChannel13','www.banner13.com'),('14','myChannel14','www.banner14.com'),('15','myChannel15','www.banner15.com'),('16','myChannel16','www.banner16.com'),('2','science','www.banner2.com'),('3','cs157A','www.banner3.com'),('4','cs157B','www.banner4.com'),('5','cs157C','www.banner5.com'),('6','myChannel6','www.banner6.com'),('6ca294f4-2c66-4524-afde-4a30aed2f254','cs9001','www.bannertest.com'),('7','myChannel7','www.banner7.com'),('8','myChannel8','www.banner8.com'),('9','myChannel9','www.banner9.com');
/*!40000 ALTER TABLE `Channels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comments`
--

DROP TABLE IF EXISTS `Comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comments` (
  `id` varchar(64) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments`
--

LOCK TABLES `Comments` WRITE;
/*!40000 ALTER TABLE `Comments` DISABLE KEYS */;
INSERT INTO `Comments` VALUES ('089ae706-4a0a-47ca-ae38-707357691ea3','be careful!','2019-12-06 11:01:03','2019-12-06 11:01:03'),('09b321f8-9759-443d-adf1-932a86794f98','comment reply','2019-12-03 21:54:40','2019-12-03 21:54:40'),('0fc3dca1-3b2d-451b-bfad-b0c3bc74167b','comment logged in','2019-12-03 21:29:29','2019-12-03 21:29:29'),('1','same here','2019-10-12 02:10:00','2019-10-12 02:35:00'),('10','I want some','2019-10-05 03:05:00','2019-10-05 03:25:00'),('11','Good Luck!!!','2019-08-02 04:30:00','2019-08-02 04:40:00'),('12','Yup, it\'s the best','2019-09-14 02:02:00','2019-09-14 02:12:00'),('13','My kids are waiting for that!','2019-08-02 03:30:00','2019-08-02 03:50:00'),('14','I also have two midterms','2019-10-10 05:40:00','2019-10-10 05:50:00'),('15','I just got out from there','2019-09-20 07:05:00','2019-09-20 07:20:00'),('16','I am completly unknown to such stuff. Whom would you recommend this book and why?','2019-10-15 02:29:36','2019-10-15 02:29:36'),('17','It really covers all aspects of computer science. I got this a few years ago when I was beginning to self teach myself. Admittedly I never touched it much and it got lost in my closest. But now that I am in college that will be a different story. I could post the table of contents if you’d like to see them?','2019-10-15 05:29:36','2019-10-15 05:29:36'),('18','Please do','2019-10-15 08:29:36','2019-10-15 08:29:36'),('19','TABLE OF CONTENTS: ...','2019-10-15 09:29:36','2019-10-15 09:29:36'),('2','Why???','2019-10-10 01:20:00','2019-10-10 02:00:00'),('20','Thanks !','2019-10-15 09:45:36','2019-10-15 09:45:36'),('21','The head jerk gets me everytime','2019-10-14 05:29:36','2019-10-14 05:29:36'),('22','Back... and to the left','2019-10-14 06:29:36','2019-10-14 06:29:36'),('23','“Never mind, I figured it out”','2019-10-10 08:29:36','2019-10-10 08:29:36'),('24','How many SO users does it take to change a lightbulb? Nevermind, figured it out myself.','2019-10-10 08:35:36','2019-10-10 08:35:36'),('25','Lol','2019-10-10 09:45:36','2019-10-10 09:45:36'),('26','Artificial Intelligence','2019-10-15 09:46:36','2019-10-15 09:46:36'),('27','Networks','2019-10-15 09:47:36','2019-10-15 09:47:36'),('28','Database','2019-10-15 09:48:36','2019-10-15 09:48:36'),('29','Comp Architecture','2019-10-15 09:49:36','2019-10-15 09:49:36'),('3','Congratulation!','2019-08-14 05:05:00','2019-08-14 05:10:00'),('30','Formal Languages','2019-10-15 09:50:36','2019-10-15 09:50:36'),('31','Data Structures and Algorithms','2019-08-06 01:35:00','2019-08-06 01:35:00'),('32','Python','2019-08-06 01:35:00','2019-08-06 01:35:00'),('33','Discrete Math','2019-08-06 01:35:00','2019-08-06 01:35:00'),('34','Game Design','2019-08-06 01:35:00','2019-08-06 01:35:00'),('35','Operating Systems','2019-08-06 01:35:00','2019-08-06 01:35:00'),('3e98ed07-923a-4cb2-827a-c247852ade4a','hi','2019-12-06 21:53:36','2019-12-06 21:53:36'),('4','wow, busy weekend','2019-08-10 07:00:05','2019-08-10 07:10:05'),('4f58585b-77e9-462f-ab1f-7ac53bba2d9b','test','2019-12-03 20:58:25','2019-12-03 20:58:25'),('5','take care','2019-07-30 03:10:00','2019-07-30 03:35:00'),('6','yeah, I am excited, too','2019-09-20 05:02:00','2019-09-20 05:12:00'),('6557931a-1065-4f42-b5e7-e105e83a2c3b','Another one','2019-12-03 21:03:48','2019-12-03 21:03:48'),('7','Aww, it\'s so adorable!','2019-09-14 06:02:00','2019-09-14 06:08:00'),('8','Who did you go with?','2019-09-07 01:20:00','2019-09-07 01:30:00'),('8cbfedda-263a-452d-b424-795c0855bb51','test add comment','2019-12-03 20:59:37','2019-12-03 20:59:37'),('9','Have a nice day!','2019-08-06 01:35:00','2019-08-06 02:05:00'),('b1af5b67-457b-4bd4-b706-0543acf87ec5','Same here, busy with project!','2019-12-03 22:36:24','2019-12-03 22:36:24'),('bbbe7519-ba1f-49b7-8c0e-2c0a6d3e8802','Test comment ','2019-12-05 04:48:34','2019-12-05 04:48:34'),('ff55b16c-a454-4873-8d17-a1022dcbf7cd','logged in comment reply','2019-12-03 21:38:24','2019-12-03 21:38:24');
/*!40000 ALTER TABLE `Comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contain`
--

DROP TABLE IF EXISTS `Contain`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contain` (
  `channel_id` varchar(64) DEFAULT NULL,
  `post_id` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contain`
--

LOCK TABLES `Contain` WRITE;
/*!40000 ALTER TABLE `Contain` DISABLE KEYS */;
INSERT INTO `Contain` VALUES ('1','2'),('1','4'),('1','5'),('2','3'),('2','6'),('4','1'),('5','7'),('7','8'),('8','9'),('10','10'),('11','11'),('12','12'),('7','13'),('13','14'),('7','15'),('3','57dc38f2-cf48-426f-afa2-f683c1c75c7d'),('1','587b33ca-ad10-403f-abd5-571e386d876a'),('2','a6f93f27-28e7-40b6-a87d-6730e1265ef3'),('2','22d8c759-ba39-457e-8ec7-f93d0f39f0b5'),('2','801887ac-2856-400b-b94b-d78da19c4298'),('2','755787b9-1729-4521-81cc-ebaee99b5f97'),('2','ee5e26ff-f87b-444e-91df-56f04d1dab32'),('2','debfdde0-96c5-462a-b4bc-e09dc4b0eaf1'),('1','503279c8-72e0-4279-882b-01ea7608e518'),('1','2484ac1b-0aa4-4948-b053-f62d96d08182'),('7','850d15f0-45e9-4c82-b7b0-4b95f8af3458'),('7','b075066c-6644-441c-8968-e4fccb97b040'),('7','a2db7f6f-b67c-47ba-89e2-ad4dafff134f'),('7','b15744a1-7bcf-4f2f-b896-ecd0398df336'),('7','34c15968-6b29-474e-ac5d-b688603aae3a'),('7','0216a66e-2cb9-4977-ab2a-9b74af824d92'),('7','36a04a2e-f517-4726-863f-9a381505769f'),('7','9b558ee6-c04e-4ccb-9070-5f8af4be84ef'),('7','7822d835-b0de-418f-a1f9-7876c39c80ef'),('7','09c33eed-13b0-46db-941b-509fec766068'),('2','88241fb9-35c8-4113-9f65-b5f300ef3486'),('7','4028c265-d54b-4026-9342-88327a6dc7bd'),('7','da4bcd19-8810-43d3-a3c6-44b42fbd0c67'),('7','b92d47e4-17e7-44cb-9e59-d03a167e40a6'),('2','9e5816ad-0cb0-4f52-af90-96ca5992449a'),('2','2874ae82-c883-45dc-ba50-4a3101bbc69f'),('10','cdda7357-8d22-456f-940e-d91521f90246'),('2','0bfee067-c727-4970-b896-e299da229efe'),('2','8ee4806d-65f8-44a4-967a-61b0ff7d254a'),('2','049f815c-5108-4418-ac5b-bf40b69b2981'),('2','f2f1f7a9-87d1-4423-b2ba-be19d2a9a75b');
/*!40000 ALTER TABLE `Contain` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Create_Com`
--

DROP TABLE IF EXISTS `Create_Com`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Create_Com` (
  `user_id` varchar(64) NOT NULL,
  `com_id` varchar(64) NOT NULL,
  `points` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`com_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Create_Com`
--

LOCK TABLES `Create_Com` WRITE;
/*!40000 ALTER TABLE `Create_Com` DISABLE KEYS */;
INSERT INTO `Create_Com` VALUES ('1','1',0),('1','2',-5),('1','3',10),('1','4',-15),('10','13',-10),('11','14',-15),('12','15',-20),('13','16',1),('13','17',2),('13','18',3),('13','19',4),('13','20',5),('13','21',6),('13','22',7),('14','23',8),('14','24',9),('14','25',10),('14','26',11),('15','27',12),('15','28',13),('15','29',14),('15','30',15),('15','32',16),('15','33',17),('16','34',18),('16','35',19),('2','31',2),('3','5',20),('3','6',0),('3','7',5),('4','8',10),('5','4f58585b-77e9-462f-ab1f-7ac53bba2d9b',0),('5','9',15),('6e594773-f28f-4efe-9e8b-f211af0d0851','b1af5b67-457b-4bd4-b706-0543acf87ec5',0),('7','10',20),('8','11',0),('9','12',-5),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','3e98ed07-923a-4cb2-827a-c247852ade4a',0),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','6557931a-1065-4f42-b5e7-e105e83a2c3b',0),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','8cbfedda-263a-452d-b424-795c0855bb51',0),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','bbbe7519-ba1f-49b7-8c0e-2c0a6d3e8802',0),('da7e8692-839f-4001-87a3-c4676fe5110b','089ae706-4a0a-47ca-ae38-707357691ea3',0),('f26a12e1-5c58-4a69-922e-480a132835d2','09b321f8-9759-443d-adf1-932a86794f98',0),('f26a12e1-5c58-4a69-922e-480a132835d2','0fc3dca1-3b2d-451b-bfad-b0c3bc74167b',0),('f26a12e1-5c58-4a69-922e-480a132835d2','ff55b16c-a454-4873-8d17-a1022dcbf7cd',0);
/*!40000 ALTER TABLE `Create_Com` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Create_Post`
--

DROP TABLE IF EXISTS `Create_Post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Create_Post` (
  `user_id` varchar(64) NOT NULL,
  `post_id` varchar(64) NOT NULL,
  `points` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Create_Post`
--

LOCK TABLES `Create_Post` WRITE;
/*!40000 ALTER TABLE `Create_Post` DISABLE KEYS */;
INSERT INTO `Create_Post` VALUES ('','0bfee067-c727-4970-b896-e299da229efe',0),('','8ee4806d-65f8-44a4-967a-61b0ff7d254a',0),('1','5',11),('1','8',6),('10','15',51),('2','10',20),('2','9',10),('3','11',25),('3','12',5),('4','3',30),('5','2',2),('5f10681b-8a9e-4299-83f2-a66134f18c2f','049f815c-5108-4418-ac5b-bf40b69b2981',0),('6','1',2),('6','22d8c759-ba39-457e-8ec7-f93d0f39f0b5',0),('6','2484ac1b-0aa4-4948-b053-f62d96d08182',0),('6','503279c8-72e0-4279-882b-01ea7608e518',0),('6','57dc38f2-cf48-426f-afa2-f683c1c75c7d',0),('6','755787b9-1729-4521-81cc-ebaee99b5f97',0),('6','801887ac-2856-400b-b94b-d78da19c4298',0),('6','debfdde0-96c5-462a-b4bc-e09dc4b0eaf1',0),('6','ee5e26ff-f87b-444e-91df-56f04d1dab32',0),('6e594773-f28f-4efe-9e8b-f211af0d0851','4028c265-d54b-4026-9342-88327a6dc7bd',0),('6e594773-f28f-4efe-9e8b-f211af0d0851','b92d47e4-17e7-44cb-9e59-d03a167e40a6',0),('6e594773-f28f-4efe-9e8b-f211af0d0851','cdda7357-8d22-456f-940e-d91521f90246',1),('6e594773-f28f-4efe-9e8b-f211af0d0851','da4bcd19-8810-43d3-a3c6-44b42fbd0c67',0),('6e594773-f28f-4efe-9e8b-f211af0d0851','f2f1f7a9-87d1-4423-b2ba-be19d2a9a75b',0),('7','14',10),('8','13',20),('8','4',50),('9','6',35),('9','7',20),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','0216a66e-2cb9-4977-ab2a-9b74af824d92',0),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','2874ae82-c883-45dc-ba50-4a3101bbc69f',1),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','34c15968-6b29-474e-ac5d-b688603aae3a',0),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','36a04a2e-f517-4726-863f-9a381505769f',0),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','587b33ca-ad10-403f-abd5-571e386d876a',0),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','7822d835-b0de-418f-a1f9-7876c39c80ef',0),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','850d15f0-45e9-4c82-b7b0-4b95f8af3458',0),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','9b558ee6-c04e-4ccb-9070-5f8af4be84ef',0),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','a2db7f6f-b67c-47ba-89e2-ad4dafff134f',0),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','a6f93f27-28e7-40b6-a87d-6730e1265ef3',0),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','b075066c-6644-441c-8968-e4fccb97b040',0),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','b15744a1-7bcf-4f2f-b896-ecd0398df336',0),('da7e8692-839f-4001-87a3-c4676fe5110b','9e5816ad-0cb0-4f52-af90-96ca5992449a',-1),('f26a12e1-5c58-4a69-922e-480a132835d2','09c33eed-13b0-46db-941b-509fec766068',0),('f26a12e1-5c58-4a69-922e-480a132835d2','88241fb9-35c8-4113-9f65-b5f300ef3486',0);
/*!40000 ALTER TABLE `Create_Post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Create_Post_Test`
--

DROP TABLE IF EXISTS `Create_Post_Test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Create_Post_Test` (
  `user_id` varchar(64) NOT NULL,
  `post_id` varchar(64) NOT NULL,
  `points` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Create_Post_Test`
--

LOCK TABLES `Create_Post_Test` WRITE;
/*!40000 ALTER TABLE `Create_Post_Test` DISABLE KEYS */;
INSERT INTO `Create_Post_Test` VALUES ('1','5',10),('1','8',5),('10','15',50),('2','10',20),('2','9',10),('3','11',25),('3','12',5),('4','3',30),('5','2',1),('6','1',2),('7','14',10),('8','13',20),('8','4',50),('9','6',35),('9','7',20);
/*!40000 ALTER TABLE `Create_Post_Test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Have`
--

DROP TABLE IF EXISTS `Have`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Have` (
  `post_id` varchar(64) NOT NULL,
  `com_id` varchar(64) NOT NULL,
  PRIMARY KEY (`post_id`,`com_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Have`
--

LOCK TABLES `Have` WRITE;
/*!40000 ALTER TABLE `Have` DISABLE KEYS */;
INSERT INTO `Have` VALUES ('09c33eed-13b0-46db-941b-509fec766068','ff55b16c-a454-4873-8d17-a1022dcbf7cd'),('1','1'),('1','2'),('1','3'),('2','4'),('2','5'),('2','6'),('22d8c759-ba39-457e-8ec7-f93d0f39f0b5','b1af5b67-457b-4bd4-b706-0543acf87ec5'),('2874ae82-c883-45dc-ba50-4a3101bbc69f','3e98ed07-923a-4cb2-827a-c247852ade4a'),('3','7'),('3','8'),('3','9'),('4','10'),('4','11'),('4','12'),('5','089ae706-4a0a-47ca-ae38-707357691ea3'),('5','0fc3dca1-3b2d-451b-bfad-b0c3bc74167b'),('5','4f58585b-77e9-462f-ab1f-7ac53bba2d9b'),('587b33ca-ad10-403f-abd5-571e386d876a','bbbe7519-ba1f-49b7-8c0e-2c0a6d3e8802'),('6','13'),('6','14'),('6','15'),('8','6557931a-1065-4f42-b5e7-e105e83a2c3b'),('8','8cbfedda-263a-452d-b424-795c0855bb51'),('88241fb9-35c8-4113-9f65-b5f300ef3486','09b321f8-9759-443d-adf1-932a86794f98');
/*!40000 ALTER TABLE `Have` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Have_Com`
--

DROP TABLE IF EXISTS `Have_Com`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Have_Com` (
  `parent_id` varchar(64) DEFAULT NULL,
  `child_id` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Have_Com`
--

LOCK TABLES `Have_Com` WRITE;
/*!40000 ALTER TABLE `Have_Com` DISABLE KEYS */;
INSERT INTO `Have_Com` VALUES ('16','17'),('17','18'),('18','19'),('21','22'),('23','24'),('23','25'),('26','27'),('26','28'),('29','30'),('10','26'),('11','29'),('1','31'),('2','32'),('3','33'),('4','34');
/*!40000 ALTER TABLE `Have_Com` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Moderate`
--

DROP TABLE IF EXISTS `Moderate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Moderate` (
  `user_id` varchar(64) DEFAULT NULL,
  `channel_id` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Moderate`
--

LOCK TABLES `Moderate` WRITE;
/*!40000 ALTER TABLE `Moderate` DISABLE KEYS */;
INSERT INTO `Moderate` VALUES ('1','2'),('1','3'),('2','2'),('2','3'),('3','6'),('4','6'),('7','5'),('5','7'),('7','7'),('8','10'),('11','10'),('11','12'),('9','11'),('14','15'),('15','15');
/*!40000 ALTER TABLE `Moderate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Own`
--

DROP TABLE IF EXISTS `Own`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Own` (
  `user_id` varchar(64) DEFAULT NULL,
  `channel_id` varchar(64) NOT NULL,
  PRIMARY KEY (`channel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Own`
--

LOCK TABLES `Own` WRITE;
/*!40000 ALTER TABLE `Own` DISABLE KEYS */;
INSERT INTO `Own` VALUES ('5','1'),('7','10'),('8','11'),('10','12'),('11','13'),('12','14'),('14','15'),('2','2'),('4','3'),('2','4'),('3','5'),('1','6'),('1','6ca294f4-2c66-4524-afde-4a30aed2f254'),('6','7'),('6','8'),('7','9');
/*!40000 ALTER TABLE `Own` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Posts`
--

DROP TABLE IF EXISTS `Posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Posts` (
  `id` varchar(64) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Posts`
--

LOCK TABLES `Posts` WRITE;
/*!40000 ALTER TABLE `Posts` DISABLE KEYS */;
INSERT INTO `Posts` VALUES ('0216a66e-2cb9-4977-ab2a-9b74af824d92','b','b','2019-12-03 16:53:03','2019-12-03 16:53:03'),('049f815c-5108-4418-ac5b-bf40b69b2981','post title','comment test','2019-12-09 21:49:17','2019-12-09 21:49:17'),('09c33eed-13b0-46db-941b-509fec766068','post logged in','comment','2019-12-03 21:30:49','2019-12-03 21:30:49'),('0bfee067-c727-4970-b896-e299da229efe','bjb','nmkjk','2019-12-09 09:41:56','2019-12-09 09:41:56'),('1','school','Class starts at 8am','2019-09-14 02:02:00','2019-11-21 20:50:37'),('10','midterm','studying for midterm next week. Fighting!','2019-10-10 05:40:00','2019-10-10 05:50:00'),('11','dinner time','In and out. Yay!!!!','2019-10-10 01:20:00','2019-10-10 02:00:00'),('12','Test post 1','In lacinia ante sed sapien dignissim, id luctus orci lobortis.','2019-11-21 20:53:11','2019-11-21 20:53:11'),('13','cool me down','orange just, please!','2019-10-12 02:10:00','2019-10-12 02:35:00'),('14','autumn','The scenery is pretty today','2019-08-06 01:35:00','2019-08-06 02:05:00'),('15','3:am','cannot sleep at all','2019-09-07 01:20:00','2019-09-07 01:30:00'),('2','food again!','I love Korean food','2019-09-14 06:02:00','2019-09-14 06:08:00'),('22d8c759-ba39-457e-8ec7-f93d0f39f0b5','Project','CS157A','2019-12-03 06:29:02','2019-12-03 06:29:02'),('2484ac1b-0aa4-4948-b053-f62d96d08182','Project','CS157A','2019-12-03 06:29:25','2019-12-03 06:29:25'),('2874ae82-c883-45dc-ba50-4a3101bbc69f','Cs157','Great','2019-12-06 21:52:08','2019-12-06 21:52:08'),('3','last vacation','I went to Disneyland','2019-08-02 03:30:00','2019-08-02 03:50:00'),('34c15968-6b29-474e-ac5d-b688603aae3a','a','a','2019-12-03 16:46:43','2019-12-03 16:46:43'),('36a04a2e-f517-4726-863f-9a381505769f','c','c','2019-12-03 16:54:36','2019-12-03 16:54:36'),('4','favorite season','Fall is here!','2019-07-30 03:10:00','2019-07-30 03:35:00'),('4028c265-d54b-4026-9342-88327a6dc7bd','test2','it\'s a test!','2019-12-03 22:34:28','2019-12-03 22:34:28'),('5','on the way','It\'s raining, taking bus home','2019-10-11 01:20:00','2019-11-10 01:25:00'),('503279c8-72e0-4279-882b-01ea7608e518','Project','CS157A','2019-12-03 06:29:23','2019-12-03 06:29:23'),('57dc38f2-cf48-426f-afa2-f683c1c75c7d','This is Teestdsf','tplase wrokkf ','2019-12-02 07:35:58','2019-12-02 07:35:58'),('587b33ca-ad10-403f-abd5-571e386d876a',' tester 1 post','Post Test','2019-12-03 04:23:30','2019-12-03 04:23:30'),('6','cousin\'s pet','The cat is so cute!','2019-07-10 01:00:00','2019-07-10 01:20:00'),('7','Noodle time','Eating ramen is the best for cold day','2019-09-14 02:02:00','2019-09-14 02:12:00'),('755787b9-1729-4521-81cc-ebaee99b5f97','Project','CS157A','2019-12-03 06:29:05','2019-12-03 06:29:05'),('7822d835-b0de-418f-a1f9-7876c39c80ef','dfad','asdf','2019-12-03 16:57:21','2019-12-03 16:57:21'),('8','Good morning','Startbuck, starting a good day','2019-08-14 05:05:00','2019-08-14 05:10:00'),('801887ac-2856-400b-b94b-d78da19c4298','Project','CS157A','2019-12-03 06:29:03','2019-12-03 06:29:03'),('850d15f0-45e9-4c82-b7b0-4b95f8af3458','teste','wwer','2019-12-03 09:17:21','2019-12-03 09:17:21'),('88241fb9-35c8-4113-9f65-b5f300ef3486','post science channel','comment test','2019-12-03 21:54:28','2019-12-03 21:54:28'),('8ee4806d-65f8-44a4-967a-61b0ff7d254a','bjb','nmkjk','2019-12-09 09:41:56','2019-12-09 09:41:56'),('9','Halloween','let\'s go trick or treat','2019-09-20 08:02:00','2019-09-20 08:15:00'),('9b558ee6-c04e-4ccb-9070-5f8af4be84ef','d','d','2019-12-03 16:56:17','2019-12-03 16:56:17'),('9e5816ad-0cb0-4f52-af90-96ca5992449a','final week','so stressful!','2019-12-06 11:02:49','2019-12-06 11:02:49'),('a2db7f6f-b67c-47ba-89e2-ad4dafff134f','Test','test','2019-12-03 16:36:10','2019-12-03 16:36:10'),('a6f93f27-28e7-40b6-a87d-6730e1265ef3','This is created by test1 user','Delete this!','2019-12-03 05:11:33','2019-12-03 05:11:33'),('b075066c-6644-441c-8968-e4fccb97b040','Test','test an','2019-12-03 09:19:28','2019-12-03 09:19:28'),('b15744a1-7bcf-4f2f-b896-ecd0398df336','adf','weewr','2019-12-03 16:41:37','2019-12-03 16:41:37'),('b92d47e4-17e7-44cb-9e59-d03a167e40a6','test2','just a test!','2019-12-05 10:20:14','2019-12-05 10:20:14'),('cdda7357-8d22-456f-940e-d91521f90246','1234','yes','2019-12-09 09:41:10','2019-12-09 09:41:10'),('da4bcd19-8810-43d3-a3c6-44b42fbd0c67','in class','presentation!','2019-12-03 22:39:37','2019-12-03 22:39:37'),('debfdde0-96c5-462a-b4bc-e09dc4b0eaf1','Project','CS157A','2019-12-03 06:29:08','2019-12-03 06:29:08'),('ee5e26ff-f87b-444e-91df-56f04d1dab32','Project','CS157A','2019-12-03 06:29:07','2019-12-03 06:29:07'),('f2f1f7a9-87d1-4423-b2ba-be19d2a9a75b','science','it works!','2019-12-11 04:00:33','2019-12-11 04:00:33');
/*!40000 ALTER TABLE `Posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Save`
--

DROP TABLE IF EXISTS `Save`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Save` (
  `user_id` varchar(64) NOT NULL,
  `post_id` varchar(64) NOT NULL,
  PRIMARY KEY (`user_id`,`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Save`
--

LOCK TABLES `Save` WRITE;
/*!40000 ALTER TABLE `Save` DISABLE KEYS */;
INSERT INTO `Save` VALUES ('1','1'),('1','2'),('1','3'),('2','1'),('2','2'),('2','3'),('3','10'),('3','11'),('3','12'),('4','14'),('4','8'),('4','9'),('5','1'),('5','2'),('5','3'),('6e594773-f28f-4efe-9e8b-f211af0d0851','3'),('da7e8692-839f-4001-87a3-c4676fe5110b','8'),('f26a12e1-5c58-4a69-922e-480a132835d2','2');
/*!40000 ALTER TABLE `Save` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Subscribe`
--

DROP TABLE IF EXISTS `Subscribe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Subscribe` (
  `user_id` varchar(64) DEFAULT NULL,
  `channel_id` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Subscribe`
--

LOCK TABLES `Subscribe` WRITE;
/*!40000 ALTER TABLE `Subscribe` DISABLE KEYS */;
INSERT INTO `Subscribe` VALUES ('6','2'),('6','3'),('7','2'),('7','3'),('8','6'),('9','6'),('12','5'),('10','7'),('12','7'),('13','10'),('1','10'),('1','12'),('14','11'),('2','15'),('3','15'),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','7'),('f26a12e1-5c58-4a69-922e-480a132835d2','7'),('6e594773-f28f-4efe-9e8b-f211af0d0851','7'),('da7e8692-839f-4001-87a3-c4676fe5110b','2'),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','2'),('6e594773-f28f-4efe-9e8b-f211af0d0851','10'),('6e594773-f28f-4efe-9e8b-f211af0d0851','15'),('5f10681b-8a9e-4299-83f2-a66134f18c2f','2'),('6e594773-f28f-4efe-9e8b-f211af0d0851','6'),('6e594773-f28f-4efe-9e8b-f211af0d0851','2');
/*!40000 ALTER TABLE `Subscribe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` varchar(64) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES ('1','email1@sjsu.edu','blue01sky02','password2','2019-10-13 02:00:00','www.url1.com'),('10','email10@sjsu.edu','army83','password11','2019-09-01 01:30:00','www.url10.com'),('11','email11@yahoo.com','roseGarden','password12','2019-08-14 10:05:00','www.url11.com'),('12','email12@gmail.com','wisdom11','password13','2019-08-10 09:00:00','www.url12.com'),('13','email13@sjsu.edu','purpleSea','password14','2019-08-06 01:35:00','www.url13.com'),('14','email14@gmail.com','ocean94','password15','2019-08-02 04:30:00','www.url14.com'),('15','email15@gmail.com','paradiseblue3','password16','2019-07-31 03:10:00','www.url15.com'),('16','email16@gmail.com','minimouse','password16','2019-10-03 06:50:00','www.url16.com'),('2','email2@yahoo.com','cookie-09','password3','2019-10-05 03:05:00','www.url2.com'),('2090d5b1-92f4-42d9-9f92-d8e1a8be6c5c','mom@gmail.com','mom','$2a$10$fNGv7AmOgMEuxt6yjKfd8eBTci0euk.qH96DaKcE3n08kHFKExF5e','2019-12-11 04:31:49',NULL),('23f64303-e85e-4b89-8030-1c8fc8648ea9','abc@gmai.com','annguyen','$2a$10$6pw6.QZ9Bvl3QIgi29fq7u01PSgoW9eFhU26hOaHjlHgFTo.DjT.G','2019-12-03 02:32:56',NULL),('247d997e-3081-4ed5-85e3-efdd61172657','gdsf@gmail.com','newTester','$2a$10$O6MZ1LxgLSIwehWlJXFl3Ots6EyuwtDChW8LA4H9W.CAAQYUXyo52','2019-12-11 03:35:58',NULL),('3','email3@sjsu.edu','angnguyen123','password4','2019-10-01 04:01:00','www.url3.com'),('35193b63-17a0-4207-bbc9-cfbace6bfa57','core@gmail.com','core','$2a$10$piGGaDh9NuLqow8QLYuDi.AtqXrUrXp2YuVIjvvah/fyrivo.Y402','2019-12-11 03:13:08',NULL),('35f4957b-e381-4689-bd21-18a6cc7c60df','e1@g.co','un11','$2a$10$.bk5gHBlQB4vFjSOo2q9n.9Y.ydsyhTYC0VudBOtoo2hAE9LBbgS.','2019-12-06 21:49:10',NULL),('4','email4@gmail.com','an06nguyen','password5','2019-09-30 05:02:00','www.url4.com'),('4e474561-b197-4505-97ad-fe2a77b95999','dfdd@gmail.com','nhi','$2a$10$bIY8ABJv4ktYIaTDIeq2Keao8A2twJwWnm5iKgZ4tnIzlXv9ow0IC','2019-12-06 09:10:44',NULL),('5','email5@gmail.com','nhinguyen73','password6','2019-09-28 01:10:00','www.url5.com'),('51a3c554-4be9-4af5-9185-4bdb88095968','car@gmail.com','car','$2a$10$F7Ll8/shR79/sSWFeXK5OuIhclbi3o4SpomftVyl5p7rJILH8dyFS','2019-12-11 03:36:51',NULL),('5a37f35c-3096-4d0e-9fb7-1aa73c36955a','test2@gmail.com','test2','$2a$10$XQPPCow4nzs1FbsUhOtn3.lme7SPFniKLZZzzUfPIY8tzgPE4E//e','2019-12-03 17:31:20',NULL),('5f10681b-8a9e-4299-83f2-a66134f18c2f','e12@g.c','un12','$2a$10$jI9RX5Fpole9TwsfVaAvBOcJ3qnrRznHOOeMPI0/s7AjJTkjXAth6','2019-12-09 21:03:54',NULL),('5f3c5959-9887-4291-9255-d08381815120','e21@g.c','un21','$2a$10$rqHleKdAxQj0lNWbOsMB/OQvhD77g265x/CnaatTpfAhI.8dPVeWW','2019-12-11 03:49:29',NULL),('6','email6@yahoo.com','bunny46','password7','2019-09-20 05:15:00','www.url6.com'),('6856b8c4-e7b1-419f-a774-90bb8fb68977','e3@g.c','un3','$2a$10$Yqb/pIMR/8OFwq8YnEHTouXz8aUrra9T3f5ULTDjjMNkuVzyEDHHO','2019-12-02 23:22:50',NULL),('6c7ee6fa-8f82-4fbf-830b-fcc848af2f56','laptop@gmail.com','laptop','$2a$10$H1rh5IkYDVX73iW8qyiAmOYGcme2CNQkf0yF3Hx40q2aVg9Qco9hC','2019-12-11 02:56:38',NULL),('6e594773-f28f-4efe-9e8b-f211af0d0851','an@gmail.com','an','$2a$10$LQgiUn.j3nbsSK2Ld92YO.WWPv5x5/99HVj1sVG4xg4.K9M.HyI/q','2019-12-03 18:04:02',NULL),('7','email7@gmail.com','blue123car','password8','2019-09-14 06:02:00','www.url7.com'),('8','email8@gmail.com','dorgi001','password9','2019-09-07 01:20:00','www.url8.com'),('9','email9@sjsu.edu','diamond07!','password10','2019-09-03 07:00:00','www.url9.com'),('90715c8b-cb5a-4a2c-84c1-62d66bfaf491','button@gmail.com','button','$2a$10$DzNELfuduY4j4BEzrRo86O.J7X1ZIh/4DH2Pfh22sCAotiDaVYoJS','2019-12-11 03:12:14',NULL),('a0d5c83c-d930-4e74-a21d-ea498e7651c4','test3@gmail.com','test3','$2a$10$uUKck2k1uCOcRggRWNlys.Tcy4qNL4QgwfCevB/wFS.MtTFQ2EKZa','2019-12-11 03:49:15',NULL),('aa316f4d-92b5-46fb-9261-3d30b6bf45cf','annguyen@gmail.com','annguyen06','$2a$10$MkUAVAObbE6Rx4YAce1lOevBTjLeJTo4ikOOpzM4JRJR4sYJ3rK/G','2019-12-03 02:34:47',NULL),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','test1@gmail.com','Test1','$2a$10$NAm/ICVdkIfgu3tkEcNCdefTvnbxWe9XqOgka4lejfg/IdF2gaSri','2019-12-02 23:26:57',NULL),('b5996e2e-cbec-4a25-8976-4ed5bd591c21','e2@g.c','un2','$2a$10$ygUOlarQsU4Ki4fQjgZcvORKAXW32Uks1FdYnYVSc0ilASL.yPAhC','2019-12-02 16:48:39',NULL),('b5e7c4e4-8192-43b8-ad6e-65c7f1a8045e','my@gmail.com','my','$2a$10$pGTcNZ2E6bcSzFYyXr/mIutWpxJP2U2GCzhQWBjSeJTCtrc5OZ6IC','2019-12-06 09:13:10',NULL),('c7e6f1ab-b468-4eef-ae5b-ed60b6388527','testerror@gmail.com','testerror','$2a$10$uHFmi5tM0JIyQ4D0cHaApu6cIqykwSyMFj5TXgkSbS8Hat.5vLU4m','2019-12-11 04:00:40',NULL),('da7e8692-839f-4001-87a3-c4676fe5110b','abc@gmail.com','tony','$2a$10$kj2t21VZcfdnEbbSZd/d.OIWf5ml2DMQBjWWKS5Oceib3Md4n8TZG','2019-12-06 10:59:29',NULL),('f26a12e1-5c58-4a69-922e-480a132835d2','e1@g.c','un1','$2a$10$qB6KdTFOc8bumAGR0Kw6YuKl7jiIcYRxvx4en2sCr3XOlzrYfrdN6','2019-12-02 16:40:45',NULL),('f5579f28-37ff-4513-a9f9-508fff5a8aa3','phone@gmail.com','phone','$2a$10$JARmX3ULMGpAMVgH9zlQDeBm9KPFNTEoX2RxgxcJV8fcMGPInXAr2','2019-12-11 03:11:26',NULL);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Vote_Com`
--

DROP TABLE IF EXISTS `Vote_Com`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Vote_Com` (
  `user_id` varchar(64) NOT NULL,
  `com_id` varchar(64) NOT NULL,
  `up_down` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`com_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Vote_Com`
--

LOCK TABLES `Vote_Com` WRITE;
/*!40000 ALTER TABLE `Vote_Com` DISABLE KEYS */;
INSERT INTO `Vote_Com` VALUES ('1','1',1),('1','2',0),('1','3',1),('2','1',0),('2','2',1),('2','3',0),('3','10',1),('3','11',0),('3','12',1),('4','14',0),('4','7',0),('4','9',0),('5','1',1),('5','2',1),('5','3',1);
/*!40000 ALTER TABLE `Vote_Com` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Vote_Post`
--

DROP TABLE IF EXISTS `Vote_Post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Vote_Post` (
  `user_id` varchar(64) NOT NULL,
  `post_id` varchar(64) NOT NULL,
  `up_down` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Vote_Post`
--

LOCK TABLES `Vote_Post` WRITE;
/*!40000 ALTER TABLE `Vote_Post` DISABLE KEYS */;
INSERT INTO `Vote_Post` VALUES ('1','1',1),('1','2',0),('1','3',1),('2','1',0),('2','2',1),('2','3',0),('247d997e-3081-4ed5-85e3-efdd61172657','5',1),('3','10',1),('3','11',0),('3','12',1),('4','14',0),('4','7',0),('4','9',0),('5','1',1),('5','2',1),('5','3',1),('6e594773-f28f-4efe-9e8b-f211af0d0851','5',1),('6e594773-f28f-4efe-9e8b-f211af0d0851','8',-1),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','15',1),('ab284fb0-eeb1-4299-ba9f-4ff12debe256','8',1),('f26a12e1-5c58-4a69-922e-480a132835d2','2',1),('f26a12e1-5c58-4a69-922e-480a132835d2','2874ae82-c883-45dc-ba50-4a3101bbc69f',1),('f26a12e1-5c58-4a69-922e-480a132835d2','8',1),('f26a12e1-5c58-4a69-922e-480a132835d2','9e5816ad-0cb0-4f52-af90-96ca5992449a',-1),('f26a12e1-5c58-4a69-922e-480a132835d2','cdda7357-8d22-456f-940e-d91521f90246',1);
/*!40000 ALTER TABLE `Vote_Post` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-10 21:07:26
