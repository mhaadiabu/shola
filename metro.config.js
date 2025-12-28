// Learn more https://docs.expo.io/guides/customizing-metro
import { getDefaultConfig } from 'expo/metro-config';
import { withUniwindConfig } from 'uniwind/metro';

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

export default withUniwindConfig(config, {
  // relative path to your global.css file (from previous step)
  cssEntryFile: './app/global.css',
  // (optional) path where we gonna auto-generate typings
  // defaults to project's root
  dtsFile: './uniwind-types.d.ts',
});
