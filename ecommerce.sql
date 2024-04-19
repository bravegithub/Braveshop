-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 05 avr. 2024 à 08:12
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ecommerce`
--

-- --------------------------------------------------------

--
-- Structure de la table `accounts`
--

CREATE TABLE `accounts` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `provider` varchar(255) NOT NULL,
  `providerAccountId` varchar(255) NOT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `access_token` varchar(255) DEFAULT NULL,
  `expires_at` bigint(20) DEFAULT NULL,
  `token_type` varchar(255) DEFAULT NULL,
  `scope` varchar(255) DEFAULT NULL,
  `id_token` varchar(255) DEFAULT NULL,
  `session_state` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `accounts`
--

INSERT INTO `accounts` (`id`, `userId`, `type`, `provider`, `providerAccountId`, `refresh_token`, `access_token`, `expires_at`, `token_type`, `scope`, `id_token`, `session_state`) VALUES
('2285e9e6-c53f-4f03-bb22-e9df918cd104', 'aec66c32-a663-4b33-8f30-3b68294fed1b', 'oauth', 'google', '107208917384609445273', NULL, 'ya29.a0Ad52N38JD07vEXurDGL44LIs4dKiFgzBjghDXc-ciV43Ld06qRg2Hc-O8qOsZPa4xY1vE4jzn8cCpqynKGFt_MEXceKW198O730bPC5NvQHc--yNg9sDTZMCdxwpkA-kyIwYiUdp3U7vEdd0imsBe20dF9buQU3Wivv_aCgYKAd0SARESFQHGX2MiWWSZJFroh_YTcN8UMO1wOw0171', 1712258729, 'Bearer', 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzNGE1ODE2NDY4Yjk1NzAzOTUzZDE0ZTlmMTVkZjVkMDlhNDAxZTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1MjY0ODE2ODE2MzEtbGw1OWk1YXM0Mmw2ODNtYXJ1MDg3MW1iM2c4cjU2aGQuYXBwcy5nb29nbGV1c2VyY29udGVudC5j', NULL),
('c8ffbf99-6c4f-452b-831c-38fce841a25f', 'ac6fcea7-a76e-428d-89eb-9028b80ec963', 'oauth', 'google', '113015090145128067643', NULL, 'ya29.a0Ad52N38XGeC9ZAwKaNJvl8TyTtJOqtqPBKXdvYEa0XFE9awrrfVdjD30XqqJO3ABkc_iftzq2ackq041tiCDV1HKErpv8fGVqvu-OFXOfHVtj3ZbajufcyaNJruQRcu9LuL1AM4uE2OgzAw0AMdeTQ9IYPs8YAxv2UOAaCgYKAWQSARASFQHGX2MiseNZiBqN6bQ3DC6zQlKL5A0171', 1712242518, 'Bearer', 'openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzNGE1ODE2NDY4Yjk1NzAzOTUzZDE0ZTlmMTVkZjVkMDlhNDAxZTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1MjY0ODE2ODE2MzEtbGw1OWk1YXM0Mmw2ODNtYXJ1MDg3MW1iM2c4cjU2aGQuYXBwcy5nb29nbGV1c2VyY29udGVudC5j', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `auction`
--

CREATE TABLE `auction` (
  `id` int(11) NOT NULL,
  `n_product` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `photo` varchar(50) NOT NULL,
  `id_category` int(30) NOT NULL,
  `open_price` int(50) NOT NULL,
  `unit_price` int(50) NOT NULL,
  `close_date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `auction`
--

INSERT INTO `auction` (`id`, `n_product`, `description`, `photo`, `id_category`, `open_price`, `unit_price`, `close_date`) VALUES
(7, 'Apple Watch Series 7 GPS, Alum', 'Apple Watch Series 7 GPS, Alum', 'photo-1551431009-a802eeec77b1.jpeg', 1, 200, 700, '2024-04-04'),
(8, 'Apple Watch Series 7 GPS, Alum', 'Apple Watch Series 7 GPS, Alum', 'photo-1449247709967-d4461a6a6103.jpeg', 1, 203, 203, '2024-04-04'),
(9, 'Apple Watch Series 7 GPS, Alum', 'Apple Watch Series 7 GPS, Alum', 'photo-1550837368-6594235de85c.jpeg', 1, 210, 210, '2024-04-04'),
(10, 'Apple Watch Series 7 GPS, Alum', 'Apple Watch Series 7 GPS, Alum', 'photo-1551431009-a802eeec77b1.jpeg', 1, 212, 212, '2024-04-04'),
(11, 'Apple Watch Series 7 GPS, Alum', 'Apple Watch Series 7 GPS, Alum', 'photo-1449247709967-d4461a6a6103.jpeg', 1, 214, 214, '2024-04-04'),
(12, 'Apple Watch Series 7 GPS, Alum', 'Apple Watch Series 7 GPS, Alum', 'photo-1467949576168-6ce8e2df4e13.jpeg', 1, 215, 215, '2024-04-04'),
(13, 'Apple Watch Series 7 GPS, Alum', 'N\'importe quel produit', 'photo-1551431009-a802eeec77b1.jpeg', 1, 128, 128, '2024-04-04');

-- --------------------------------------------------------

--
-- Structure de la table `cart`
--

CREATE TABLE `cart` (
  `id` int(60) NOT NULL,
  `id_user` varchar(36) NOT NULL,
  `id_product` int(30) NOT NULL,
  `n_product` varchar(30) NOT NULL,
  `photo` varchar(50) NOT NULL,
  `unit_price` int(30) NOT NULL,
  `total` int(30) NOT NULL,
  `qte` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `cart`
--

INSERT INTO `cart` (`id`, `id_user`, `id_product`, `n_product`, `photo`, `unit_price`, `total`, `qte`) VALUES
(2, 'davidkima06@gmail.com', 10, 'Apple Watch Series 7 GPS, Alum', 'photo-1551431009-a802eeec77b1.jpeg', 270, 270, 1),
(3, 'davidkima06@gmail.com', 11, 'Apple Watch Series 7 GPS, Alum', 'photo-1449247709967-d4461a6a6103.jpeg', 260, 260, 1),
(4, 'davidkima06@gmail.com', 12, 'Apple Watch Series 7 GPS, Alum', 'photo-1467949576168-6ce8e2df4e13.jpeg', 250, 250, 1);

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `n_category` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `n_category`, `description`) VALUES
(1, 'divers', 'N\'importe quel produit');

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `id_user` varchar(36) NOT NULL,
  `id_product` int(30) NOT NULL,
  `comment` int(30) NOT NULL,
  `evaluation` int(30) NOT NULL,
  `date_com` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `delivery`
--

CREATE TABLE `delivery` (
  `id` int(11) NOT NULL,
  `id_order` int(30) NOT NULL,
  `method` varchar(30) NOT NULL,
  `address` varchar(30) NOT NULL,
  `scheduled_date` varchar(30) NOT NULL,
  `order_status` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `order_product`
--

CREATE TABLE `order_product` (
  `id_oprod` int(30) NOT NULL,
  `id_order` int(30) NOT NULL,
  `unit_price` varchar(30) NOT NULL,
  `id_product` int(30) NOT NULL,
  `quantity` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `n_product` varchar(30) NOT NULL,
  `description` varchar(30) NOT NULL,
  `photo` varchar(50) NOT NULL,
  `id_category` int(30) NOT NULL,
  `a_stock` int(30) NOT NULL,
  `unit_price` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `n_product`, `description`, `photo`, `id_category`, `a_stock`, `unit_price`) VALUES
(7, 'Apple Watch Series 7 GPS, Alum', 'Apple Watch Series 7 GPS, Alum', 'photo-1551431009-a802eeec77b1.jpeg', 1, 599, 260),
(8, 'Apple Watch Series 7 GPS, Alum', 'Apple Watch Series 7 GPS, Alum', 'photo-1449247709967-d4461a6a6103.jpeg', 1, 599, 289),
(9, 'Apple Watch Series 7 GPS, Alum', 'Apple Watch Series 7 GPS, Alum', 'photo-1550837368-6594235de85c.jpeg', 1, 599, 211),
(10, 'Apple Watch Series 7 GPS, Alum', 'Apple Watch Series 7 GPS, Alum', 'photo-1551431009-a802eeec77b1.jpeg', 1, 599, 270),
(11, 'Apple Watch Series 7 GPS, Alum', 'Apple Watch Series 7 GPS, Alum', 'photo-1449247709967-d4461a6a6103.jpeg', 1, 599, 260),
(12, 'Apple Watch Series 7 GPS, Alum', 'Apple Watch Series 7 GPS, Alum', 'photo-1467949576168-6ce8e2df4e13.jpeg', 1, 599, 250);

-- --------------------------------------------------------

--
-- Structure de la table `promotion`
--

CREATE TABLE `promotion` (
  `id` int(11) NOT NULL,
  `id_product` int(30) NOT NULL,
  `reduction` varchar(30) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(36) NOT NULL,
  `sessionToken` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `expires` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `id_user` varchar(40) NOT NULL,
  `amount` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `date_transaction` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `emailVerified` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `emailVerified`, `image`) VALUES
('ac6fcea7-a76e-428d-89eb-9028b80ec963', 'Aimee Emelyne GASHIMWE', 'gashimwea@gmail.com', NULL, 'https://lh3.googleusercontent.com/a/ACg8ocI3OjkOCKDOIJkMrj4HyAfWoh8lzU9fcigYg6ndDrsU3zaxKLPU=s96-c'),
('aec66c32-a663-4b33-8f30-3b68294fed1b', 'David KIMA', 'davidkima06@gmail.com', NULL, 'https://lh3.googleusercontent.com/a/ACg8ocKkyRW0AUvW_pWV4DVuwEUST9UsiDcIpq83gMGTzeyKDFJLFIg=s96-c');

-- --------------------------------------------------------

--
-- Structure de la table `verification_tokens`
--

CREATE TABLE `verification_tokens` (
  `id` varchar(36) NOT NULL,
  `token` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `expires` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_3aa23c0a6d107393e8b40e3e2a6` (`userId`);

--
-- Index pour la table `auction`
--
ALTER TABLE `auction`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`),
  ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_order` (`id_order`);

--
-- Index pour la table `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`id_oprod`),
  ADD KEY `id_order` (`id_order`),
  ADD KEY `id_product` (`id_product`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Index pour la table `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_8b5e2ec52e335c0fe16d7ec358` (`sessionToken`),
  ADD KEY `FK_57de40bc620f456c7311aa3a1e6` (`userId`);

--
-- Index pour la table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`);

--
-- Index pour la table `verification_tokens`
--
ALTER TABLE `verification_tokens`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(60) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `FK_3aa23c0a6d107393e8b40e3e2a6` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD CONSTRAINT `FK_57de40bc620f456c7311aa3a1e6` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
