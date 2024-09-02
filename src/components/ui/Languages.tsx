import {Progress} from "@nextui-org/react";

export default function Languages() {
    return (
        <div>
            <Progress label="HTML" value={80}/>
            <Progress label="CSS" value={75}/>
            <Progress label="JavaScript" value={65}/>
            <Progress label="TypeScript" value={55}/>
            <Progress label="Python" value={50}/>
        </div>
    )
}