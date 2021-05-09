// support NodeJS modules without type definitions
/* eslint-disable */
declare module '*';

declare var ENV: string;
declare var HMR: boolean;
declare var System: SystemJS;

interface SystemJS {
  import: (path?: string) => Promise<any>;
}

interface GlobalEnvironment {
  ENV: string;
  HMR: boolean;
  SystemJS: SystemJS;
  System: SystemJS;
}

// Extend typings
interface Global extends GlobalEnvironment { }