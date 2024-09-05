import {Progress} from "@nextui-org/react";

export default function Tools() {
    return (
        <div className="space-y-2">
            <Progress classNames={{label: "text-lg"}} label="npm" value={70}/>
            <Progress classNames={{label: "text-lg"}} label="Git" value={60}/>
        </div>
    )
}