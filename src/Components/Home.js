import React from "react"
import Recent from "./Recent"
import Culture from "./Culture"
import Fiction from "./Fiction"

export default function Home(props) {
    return (
        <div>
            <Recent/>
            <Culture/>
            <Fiction/>
        </div>
    )
}