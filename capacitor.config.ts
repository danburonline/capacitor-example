import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.capacitor.example',
  appName: 'Example',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
}

export default config
