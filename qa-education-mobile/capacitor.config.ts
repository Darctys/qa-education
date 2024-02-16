import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'qa-education-mobile',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  ios: {
    webContentsDebuggingEnabled: true
  }
};

export default config;
