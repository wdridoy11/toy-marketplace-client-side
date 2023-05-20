import React, { useEffect } from 'react'

const UserTitle=(title)=>{
    useEffect(()=>{
        document.title=`Educational toy | ${title} `
    })
}

export default UserTitle;