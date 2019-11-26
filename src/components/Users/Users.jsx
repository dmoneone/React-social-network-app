import React from 'react';

const Users = (props) => {
    console.log(props)
    return (
        <div>
            {
               props.users.map(item => {
                   return (
                       <div key={item.id}>
                           <span>{item.name}</span>
                           <span>{item.status}</span>
                           {
                                item.follow ? 
                                    <button onClick={() => props.unfollow(item.id)}>Follow</button> : 
                                    <button onClick={() => props.follow(item.id)}>Unfollow</button>
                            }
                       </div>
                      
                   )
               })
               
            }
        </div>
    )
}

export default Users;
