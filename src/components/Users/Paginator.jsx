import React, { useState } from 'react'
import c from './Users.module.css'
import cn from 'classnames'

const Paginator = React.memo(props => {
    const pages = [];
    const pagesQuantity = Math.ceil(props.usersQuantity / props.usersQuantityOnPage)
    for (let i = 1; i <= pagesQuantity; i++) {
        pages.push(i);
    }
    const quantityOfPortions = Math.ceil(pagesQuantity / props.itemsQuantityInPortion)
    const [portionNumber,setPortionNumber] = useState(1)
    let leftBorderPositionOfPortion = (portionNumber-1) * props.itemsQuantityInPortion+1
    let rightBorderPositionOfPortion = portionNumber * props.itemsQuantityInPortion
    return (
        
        <ul className={c.pages}>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber-1)}>prev</button>} 
            {   
                pages
                .filter(p => p >= leftBorderPositionOfPortion && p <= rightBorderPositionOfPortion)
                .map(p => {
                    return (
                        <li key={p} 
                         onClick={e => props.loadUsers(p)}
                         className={ cn({[c.selected]: p === props.currentPage})}>
                             {p}
                        </li>
                    )
                })
            }
            {portionNumber < quantityOfPortions && <button onClick={() => setPortionNumber(portionNumber+1)}>next</button>}
        </ul>
        
    )
})

export default Paginator