"use client";

import { Button } from "@/components/button";
import { NavLink } from "@/components/navlink";

export default function Home() {
    return (
        <>
            <Button 
                label="Contained" 
                onClick={() => console.log("enviado")} 
            />
            <Button
                label="Outlined"
                onClick={() => console.log("enviado")}
                variant="outlined"
                labelColor="#004BF5"
                borderColor="#004BF5"
                focusColor="#F2F2F2"
            />
            <Button
                label="Disabled"
                onClick={() => console.log("enviado")}
                disabled={true}
            />
            <NavLink href="#" label="Conheça"/>
            <NavLink href="#" label="Conheça" borderColor="#f00" focusColor="#ff00004d" labelColor="white"/>
        </>
    );
}
