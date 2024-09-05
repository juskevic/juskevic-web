import {Progress} from "@nextui-org/react";

export default function Other() {
    return (
        <div className="space-y-2">
            <Progress classNames={{label: "text-lg"}} label="Node.js" value={35}/>
            <Progress classNames={{label: "text-lg"}} label="Linux" value={30}/>
        </div>
    )
}