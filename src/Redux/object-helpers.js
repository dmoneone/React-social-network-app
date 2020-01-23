export const updateObjectInArray = (array,userId,itemProp,props) => {
    return array.map(item => {
        if (item[itemProp] === userId) {
            return {
                ...item,
                ...props
            }
        } return item;
    })
}