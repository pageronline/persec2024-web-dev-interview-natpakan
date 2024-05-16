function hexToRgb(hex: string): {r: number; g: number; b: number} | null{
    const fullHexPattern = /^#([0-9A-F]{6})$/i;
    const shortHexPattern = /^#([0-9A-F]{3})$/i;
    let r: number, g: number, b: number;
    if(fullHexPattern.test(hex)){
      const result = fullHexPattern.exec(hex);
      if(result){
        const fullHex = result[1];
        r = parseInt(fullHex.substring(0, 2), 16);
        g = parseInt(fullHex.substring(2, 4), 16);
        b = parseInt(fullHex.substring(4, 6), 16);
        return {r, g, b};
      }
    }else if(shortHexPattern.test(hex)){
      const result = shortHexPattern.exec(hex);
      if(result){
        const shortHex = result[1];
        r = parseInt(shortHex.charAt(0) + shortHex.charAt(0), 16);
        g = parseInt(shortHex.charAt(1) + shortHex.charAt(1), 16);
        b = parseInt(shortHex.charAt(2) + shortHex.charAt(2), 16);
        return {r, g, b};
      }
    }
    return null;
}

console.log(hexToRgb("#FF9933"));
    
  