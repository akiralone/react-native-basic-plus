import textLineHeight from "../style/textLineHeight"

function generatorFontSize(size: number) {
  return {
      fontSize: size,
      lineHeight: textLineHeight[size]
  }
}

export {
  generatorFontSize
}