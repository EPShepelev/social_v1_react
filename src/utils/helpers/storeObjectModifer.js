export const updateObjectInArray = (items, itemId, objectPropName, newObjectProps) => {
  return items.map((item) => {  //спросить Егора про return
    if (item[objectPropName] === itemId) {
      return {
        ...item,
        ...newObjectProps
      };
    }
    return item;
  })
}