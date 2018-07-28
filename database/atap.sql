-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-07-2018 a las 22:34:48
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
-- Estructura de tabla para la tabla `asignaciones_perfiles`
--

CREATE TABLE `asignaciones_perfiles` (
  `id` int(100) NOT NULL,
  `nombre` text,
  `compania` text,
  `puesto` text,
  `fecha_ingreso` date DEFAULT NULL,
  `asignado_a` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentas`
--

CREATE TABLE `cuentas` (
  `nombre` text,
  `telefono` int(100) DEFAULT NULL,
  `correo` text,
  `fecha_ingreso` date DEFAULT NULL,
  `telefono_contacto` int(200) DEFAULT NULL,
  `correo_contacto` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cuentas`
--

INSERT INTO `cuentas` (`nombre`, `telefono`, `correo`, `fecha_ingreso`, `telefono_contacto`, `correo_contacto`) VALUES
('Bcr', 2147483647, 'thejyjco@gmail.com', '2018-07-24', 2147483647, 'thejyjco@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factoraje`
--

CREATE TABLE `factoraje` (
  `id` int(200) NOT NULL,
  `orden_cuenta` text,
  `nombre_cliente` text,
  `total_servicios` int(200) DEFAULT NULL,
  `descuento` int(200) DEFAULT NULL,
  `total_orden` int(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `id` int(200) NOT NULL,
  `orden_cuenta` text,
  `nombre_cliente` text,
  `total_servicios` int(200) DEFAULT NULL,
  `comision_pago_tarjeta` int(200) DEFAULT NULL,
  `total_orden` int(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
('', '', '2018-07-05', 'sdsdsd', 'ksÃ±askaÃ±', 'saÃ±ksla', 1523, 'sksdl', 'lsÃ±dls', '600.pdf'),
('', '', '2018-07-05', 'erer', 'erer', 'erer', 123, 'erer', 'ererer', '30-days-of-react-ebook-fullstackio.pdf'),
('', '', '2018-07-05', 'erer', 'erer', 'erer', 123, 'erer', 'ererer', '30-days-of-react-ebook-fullstackio.pdf'),
('', '', '2018-07-06', 'qwqw', 'qwqwq', 'qwqwqw', 4234, 'wewe', 'wewewe', '600.pdf'),
('', '', '2018-07-05', 'erer', 'erer', 'eer', 23232, 'wewe', 'wewewewe', '600.pdf'),
('', '', '2018-07-05', 'erer', 'erer', 'eer', 23232, 'wewe', 'wewewewe', '600.pdf'),
('Transporte', 'proveedor2', '2018-06-27', 'qwqw', 'qwqwqw', 'wqw', 232323, 'wewew', 'wewewe', '600.pdf'),
('Transporte', 'proveedor3', '2018-07-12', 'wewe', 'wewe', 'jkj', 1432, 'klk', 'klkl', '30-days-of-react-ebook-fullstackio.pdf');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informaciones`
--

CREATE TABLE `informaciones` (
  `id` int(200) NOT NULL,
  `nombre_compania` text,
  `direccion` text,
  `pais` text,
  `zip` int(100) DEFAULT NULL,
  `estado` text,
  `ciudad` text,
  `telefono` int(20) DEFAULT NULL,
  `correo` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfiles`
--

CREATE TABLE `perfiles` (
  `id` int(100) NOT NULL,
  `nombre_perfil` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `perfiles`
--

INSERT INTO `perfiles` (`id`, `nombre_perfil`) VALUES
(1, 'jkjk'),
(2, 'jlhj'),
(3, 'asasa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `id` int(200) NOT NULL,
  `nombre` text,
  `telefono` int(200) DEFAULT NULL,
  `correo` text,
  `fecha_alta` date DEFAULT NULL,
  `telefono_contacto` int(200) DEFAULT NULL,
  `correo_contacto` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`id`, `nombre`, `telefono`, `correo`, `fecha_alta`, `telefono_contacto`, `correo_contacto`) VALUES
(2, 'asas', 5656, 'asas@sa.com', '2018-07-25', 5656, 'r@g.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignaciones_perfiles`
--
ALTER TABLE `asignaciones_perfiles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `factoraje`
--
ALTER TABLE `factoraje`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `informaciones`
--
ALTER TABLE `informaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asignaciones_perfiles`
--
ALTER TABLE `asignaciones_perfiles`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `factoraje`
--
ALTER TABLE `factoraje`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `informaciones`
--
ALTER TABLE `informaciones`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
