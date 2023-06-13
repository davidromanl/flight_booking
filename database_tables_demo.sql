# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.11.2-MariaDB)
# Database: 2019
# Generation Time: 2023-06-13 09:43:32 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table ciudades
# ------------------------------------------------------------

CREATE TABLE `ciudades` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `ciudad` varchar(255) NOT NULL,
  `aeropuerto` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `ciudades` (`id`, `ciudad`, `aeropuerto`, `createdAt`, `updatedAt`)
VALUES
	(X'30353762373464342D333038372D343931392D393462642D663438393266313038643237','Neiva','Aeropuerto Benito Salas','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'30663633663432352D623162372D346231612D386337352D653030376237303937633565','Ibagué','Aeropuerto Perales','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'32356664373839302D373735642D343331612D613066312D323866643432306431623566','Palmira','Aeropuerto Alfonso Bonilla Aragón','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'32653462306433382D303635632D346466312D613736322D366366656365326638393963','Bogotá','Aeropuerto Internacional El Dorado','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'33663762636233362D363732622D343335332D616539372D376331366130386132383161','Pereira','Aeropuerto Internacional Matecaña','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'34346530323466612D396264652D346533302D623866382D653536376138343861653139','Montería','Aeropuerto Los Garzones','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'34353030356638302D346437642D343135662D623631622D643764393332363761343433','Manizales','Aeropuerto La Nubia','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'35633337383361312D333831332D346433622D616434612D313031386633356133316666','Pasto','Aeropuerto Antonio Nariño','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'38303538633965642D616536352D346163622D393762302D623861653130313161666134','Barranquilla','Aeropuerto Internacional Ernesto Cortissoz','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'38313032393738612D326437332D346464322D623263342D313537393566663339613939','Bucaramanga','Aeropuerto Internacional Palonegro','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'38636366306562662D336362362D343164612D613733612D336430666561383863393061','Cartagena','Aeropuerto Internacional Rafael Núñez','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'39373939356661652D646235342D343262642D383031312D393335626565306631316637','Villavicencio','Aeropuerto Vanguardia','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'39633866366235612D626231312D343034332D386664392D306536303965366230336137','Medellín','Aeropuerto Internacional José María Córdova','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'39643837373465322D393431612D343638632D623738332D393663366530633634653366','Valledupar','Aeropuerto Alfonso López Pumarejo','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'62613961633365312D656134362D343036352D396562342D323931336330353265386662','Cúcuta','Aeropuerto Internacional Camilo Daza','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'65353265646262332D353837332D343232652D396638312D633961376363356138666465','Santa Marta','Aeropuerto Internacional Simón Bolívar','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'65633238316633372D356334652D343865382D383933662D633563383131613466336633','Cali','Aeropuerto Internacional Alfonso Bonilla Aragón','2023-06-09 23:04:32','2023-06-09 23:04:32'),
	(X'66353433303037382D396631632D343233312D383530352D653865383034383864326236','Armenia','Aeropuerto Internacional El Edén','2023-06-09 23:04:32','2023-06-09 23:04:32');

# Dump of table reservaciones
# ------------------------------------------------------------

CREATE TABLE `reservaciones` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `flight_id` varchar(255) NOT NULL,
  `nro_pasajeros` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



# Dump of table usuarios
# ------------------------------------------------------------

CREATE TABLE `usuarios` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



# Dump of table vuelos
# ------------------------------------------------------------

CREATE TABLE `vuelos` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `origen` varchar(255) NOT NULL,
  `destino` varchar(255) NOT NULL,
  `fecha` varchar(255) NOT NULL,
  `salida` varchar(255) NOT NULL,
  `llegada` varchar(255) NOT NULL,
  `precio` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;