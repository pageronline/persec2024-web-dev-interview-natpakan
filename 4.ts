function autocomplete(search: string, items: string[], maxResult: number): string[]{
    const lowerSearch = search.toLowerCase();
    const sortItem = items.filter(item => item.toLowerCase().includes(lowerSearch))
                            .sort((a, b) => {
                                const lowerA = a.toLowerCase();
                                const lowerB = b.toLowerCase();
    
                                const aStarts = lowerA.startsWith(lowerSearch);
                                const bStarts = lowerB.startsWith(lowerSearch);
                                if(aStarts && !bStarts) return -1;
                                if(!aStarts && bStarts) return 1;
    
                                const aEnds = lowerA.endsWith(lowerSearch);
                                const bEnds = lowerB.endsWith(lowerSearch);
                                if(aEnds && !bEnds) return 1;
                                if(!aEnds && bEnds) return -1;
    
                                return lowerA.localeCompare(lowerB);
                            });
    return sortItem.slice(0, maxResult);
}
  
    const items = ["Mother", "atht", "Worthy", "than", "Android"];
    console.log(autocomplete("th", items, 2)); 
  