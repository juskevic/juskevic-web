import {Progress} from "@nextui-org/react";

export default function Tools() {
    return (
        <div>
            <Progress label="npm" value={70}/>
            <Progress label="Git" value={60}/>
        </div>
    )
}