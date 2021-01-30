import { Platform, NativeModules } from "react-native"
import textLineHeight from "../style/textLineHeight"

export type Size = keyof typeof textLineHeight

function generatorFontSize(size: Size) {
  return {
      fontSize: size,
      lineHeight: textLineHeight[size]
  }
}

function isMiUi12() {
  if(Platform.OS === 'android' && NativeModules.PlatformConstants){
      const fingerprint = NativeModules.PlatformConstants.Fingerprint && NativeModules.PlatformConstants.Fingerprint.toLowerCase();
    
      // MiUi12 fingerprint:Xiaomi/cmi/cmi:10/QKQ1.191117.002/V12.0.1.0.QJACNXM:user/release-keys
      if(fingerprint && fingerprint.startsWith('xiaomi') && fingerprint.indexOf('v12')!==-1){
          return true;
      }
  }
 
  return false;
}

export {
  generatorFontSize,
  isMiUi12
}