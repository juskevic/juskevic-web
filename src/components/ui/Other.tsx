import {Progress} from "@nextui-org/react";

export default function Other() {
    return (
        <div>
            <Progress label="Node.js" value={35}/>
            <Progress label="Linux" value={30}/>
        </div>
    )
}