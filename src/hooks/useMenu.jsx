import { useState } from 'react';
import { useEffect } from 'react';

const useMenu = () => {
    const [menu,setMenu]=useState([]);
    const [loading, setLoading]=useState(true)

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return [menu];
}

export default useMenu;