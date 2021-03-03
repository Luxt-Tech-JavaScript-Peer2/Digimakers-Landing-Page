import { FaHands } from 'react-icons/fa';
import { GiSpeedBoat } from 'react-icons/gi';
import { GiGlowingHands } from 'react-icons/gi';
import { FaHandsHelping } from 'react-icons/fa';
const blue = '#0CF7FC';
const size = 80;

const clientImage= <FaHands color={blue} size={size}/>
const speedImage= <GiSpeedBoat color={blue} size={size}/>
const valueImage= <GiGlowingHands color={blue} size={size}/>
const teamImage= <FaHandsHelping color={blue} size={size}/>

let messageToTheClient = `We value our clients Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, rerum fugit voluptate, illo eius dolor rem deserunt magni nobis, quos impedit!`;

let speedContent = `We are quick to respond to our clients We value our clients Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, rerum fugit voluptate, illo eius dolor!`;

let extraValueContent = `Extra value content We value our clients Lorem ipsum dolor sit amet,consectetur adipisicing elit. Labore, rerum fugit voluptate, illo eius dolorrem deserunt magni nobis.`;
let teamContent = `Team content  We value our clients Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, rerum fugit voluptate, illo eius dolor rem deserunt magni nobis, quos!
`;
let componentContent= [
    {
        title:"Clients First",
        image:clientImage,
        message:messageToTheClient
    },
    {
        title:"Speed",
        image: speedImage,
        message: speedContent
    },
    {
        title: "Extra Value",
        image: valueImage,
        message: extraValueContent
    },
    {
        title: "Formidable Team",
        image:teamImage,
        message:teamContent
    }

]
export default componentContent;