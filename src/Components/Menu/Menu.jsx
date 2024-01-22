import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import MenuItem from "./MenuItem";

const Menu = () => {
    const [menu,setMenu]=useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const filterMenu=data.filter(menu=>menu.category==='popular')
            setMenu(filterMenu)
        })
    },[])
    console.log(menu);
    return (
        <>
            <SectionTitle
                title='from our menu'
                subTitle='check it out!'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 my-10 px-2">
                {
                    menu.map(items=><MenuItem
                    key={items._id}
                    item={items}
                    ></MenuItem>)
                }
            </div>
        </>
    );
};

export default Menu;