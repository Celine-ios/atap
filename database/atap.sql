-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-07-2018 a las 21:56:42
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `atap`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gastos`
--

CREATE TABLE `gastos` (
  `tipo_servicio` text NOT NULL,
  `proveedor` text NOT NULL,
  `fecha_gasto` date NOT NULL,
  `descripcion` text NOT NULL,
  `importe` text NOT NULL,
  `impuesto` text NOT NULL,
  `gasto` int(11) NOT NULL,
  `folio` text NOT NULL,
  `notas` text NOT NULL,
  `comprobante` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `gastos`
--

INSERT INTO `gastos` (`tipo_servicio`, `proveedor`, `fecha_gasto`, `descripcion`, `importe`, `impuesto`, `gasto`, `folio`, `notas`, `comprobante`) VALUES
('', '', '2018-07-05', 'asas', 'asas', 'asasas', 22, 'qwqwqw', 'asasas', ''),
('', '', '2018-07-05', 'sdsdsd', 'ksÃ±askaÃ±', 'saÃ±ksla', 1523, 'sksdl', 'lsÃ±dls', '600.pdf');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
