import {Progress} from "@nextui-org/react";

export default function Frameworks() {
    return (
        <div className="space-y-2">
            <Progress classNames={{label: "text-lg"}} label="React" value={60}/>
            <Progress classNames={{label: "text-lg"}} label="Next.js" value={50}/>
            <Progress classNames={{label: "text-lg"}} label="Expo" value={55}/>
            <Progress classNames={{label: "text-lg"}} label="React Native" value={45}/>
            <Progress classNames={{label: "text-lg"}} isStriped label="Vue.js (Learning)" value={10}/>
            <Progress classNames={{label: "text-lg"}} isStriped label="Express.js (Learning)" value={10}/>
        </div>
    )
}