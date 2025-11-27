# Manguini - Plateforme de Mise en Relation Professionnels-Clients

## 📋 À Propos
Manguini est une plateforme innovante qui connecte les professionnels (artisans, livreurs, etc.) avec des clients, offrant une expérience fluide de réservation et de suivi en temps réel.

## 🚀 Fonctionnalités Principales

### Dashboard Admin (Web)
- Gestion complète des commandes
- Administration des utilisateurs (pros/clients)
- Système de modération des avis
- Tableau de bord analytique
- Gestion des logs et monitoring

### Espace Professionnels (Web + Mobile)
- Authentification sécurisée
- Profil professionnel personnalisable
- Géolocalisation en temps réel
- Gestion des disponibilités
- Historique des missions
- Notifications push

### Espace Clients (Web + Mobile)
- Recherche avancée de professionnels
- Carte interactive en temps réel
- Système de réservation
- Paiement sécurisé
- Système d'avis et notation

## 🛠 Stack Technique

### Backend
- Node.js + Express.js
- PostgreSQL (avec PostGIS pour la géolocalisation)
- Socket.io pour le temps réel
- JWT pour l'authentification
- API REST + WebSocket

### Frontend Web
- Next.js 14
- TailwindCSS
- Mapbox pour la cartographie
- Redux Toolkit pour la gestion d'état
- React Query pour la gestion du cache

### Applications Mobiles
- React Native
- Expo
- React Navigation
- Mapbox SDK
- Push Notifications (Firebase)

### DevOps & Infrastructure
- Docker + Docker Compose
- GitHub Actions (CI/CD)
- AWS (EC2, S3, RDS)
- Sentry (monitoring)
- Winston (logging)

## 📦 Structure du Projet

```
manguini/
├── apps/
│   ├── api/              # Backend Node.js
│   ├── web/              # Frontend Next.js
│   ├── mobile/           # App React Native
│   └── admin/            # Dashboard Admin
├── packages/
│   ├── shared/           # Code partagé
│   ├── ui/              # Composants UI communs
│   └── config/          # Configurations partagées
├── docker/              # Configurations Docker
└── docs/               # Documentation
```

## 🚀 Installation

1. Cloner le repository
```bash
git clone https://github.com/votre-org/manguini.git
cd manguini
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer les variables d'environnement
```bash
cp .env.example .env
```

4. Lancer en développement
```bash
npm run dev
```

## 📝 License

MIT

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez notre guide de contribution pour plus de détails. 