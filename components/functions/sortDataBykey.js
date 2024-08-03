function sortDataBykey(array, key, order = 'asc') {
    return array.toSorted((a, b) => {
      const keyParts = key.split('.'); 
      const aValue = keyParts.reduce((obj, key) => obj[key], a);// Access nested property
      const bValue = keyParts.reduce((obj, key) => obj[key], b);
  
      if (aValue < bValue){ 
        return order === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return order === 'asc' ? 1 : -1;
      }
      
      return 0;
    });
  }

export default sortDataBykey