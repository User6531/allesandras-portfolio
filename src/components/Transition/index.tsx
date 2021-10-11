import React, {useEffect, useState} from 'react';
 
export const Transition: React.FC = ({children}) => {
    const [style, setStyle] = useState({
        opacity: 0,
        transition: 'ease 1s all'
    });

    useEffect(()=>{
        setStyle(prev => ({...prev, opacity: 1 }))
    }, [])
  
    return (
        <div style={style}>
            {children}
        </div>
    )
}