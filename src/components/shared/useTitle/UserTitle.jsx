import React, { useEffect } from 'react'

const UserTitle=(title)=>{
    useEffect(()=>{
        document.title=`PHero | ${title} `
    })
}

export default UserTitle;