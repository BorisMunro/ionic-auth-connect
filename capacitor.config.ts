import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.auth-connect',
  appName: 'ionic-auth-connect',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
