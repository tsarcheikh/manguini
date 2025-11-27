declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_URL: string
    NEXT_PUBLIC_MAPBOX_TOKEN: string
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    DATABASE_URL: string
    STRIPE_SECRET_KEY: string
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string
    SMTP_HOST: string
    SMTP_PORT: string
    SMTP_USER: string
    SMTP_PASSWORD: string
  }
} 