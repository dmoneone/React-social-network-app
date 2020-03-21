import { UserType } from "./UsersReducer";
import { ToDoItemType } from "./TodoListReducer";

type ItemType = UserType | ToDoItemType
type ItemPropType = 'id'

export const updateObjectInArray =(array: Array<ItemType>, userId: number | string, itemProp: ItemPropType, props: object) => {
    return array.map((item: ItemType) => {
        if (item[itemProp] === userId) {
            return {
                ...item,
                ...props
            }
        } return item;
    })
}