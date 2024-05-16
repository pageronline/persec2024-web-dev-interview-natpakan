function sortArr(arr: string[]): string[]{
    return arr.sort((a, b) => {
        const prefixA = a.match(/^[A-Za-z]+/);
        const prefixB = b.match(/^[A-Za-z]+/);
        if(prefixA && prefixB){
            if(prefixA[0] !== prefixB[0]){
                return prefixA[0].localeCompare(prefixB[0]);
            }
            const numA = parseInt(a.replace(/[^\d]/g, ''), 10);
            const numB = parseInt(b.replace(/[^\d]/g, ''), 10);
            return numA - numB;
        }
        return a.localeCompare(b);
    });
}
    const array = ["sH10", "Ta3Netflix", "TH1", "Tz7", "TH2", "TH10"];
    console.log(sortArr(array)); 
  