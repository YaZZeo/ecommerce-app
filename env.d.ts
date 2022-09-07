declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL?: string;

    PG_VERSION?: string;
    PG_PORTS?: string;
    PG_USERNAME?: string;
    PG_PASSWORD?: string;
    PG_DATABASE?: string;

    SERVER_PORT?: string;

    COOKIE_SECRET?: string;
  }
}
