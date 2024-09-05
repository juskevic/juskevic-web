import {Progress} from "@nextui-org/react";

export default function Languages() {
    return (
        <div className="space-y-2">
            <Progress classNames={{label: "text-lg"}} label="HTML" value={80}/>
            <Progress classNames={{label: "text-lg"}} label="CSS" value={75}/>
            <Progress classNames={{label: "text-lg"}} label="JavaScript" value={65}/>
            <Progress classNames={{label: "text-lg"}} label="TypeScript" value={55}/>
            <Progress classNames={{label: "text-lg"}} label="Python" value={50}/>
        </div>
    )
}