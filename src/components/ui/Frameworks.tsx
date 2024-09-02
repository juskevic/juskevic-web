import {Progress} from "@nextui-org/react";

export default function Frameworks() {
    return (
        <div>
            <Progress label="React" value={60}/>
            <Progress label="Next.js" value={50}/>
            <Progress label="Expo" value={55}/>
            <Progress label="React Native" value={45}/>
            <Progress isStriped label="Vue.js (Learning)" value={10}/>
            <Progress isStriped label="Express.js (Learning)" value={10}/>
        </div>
    )
}