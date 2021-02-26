import { FaHands } from 'react-icons/fa';
import { GiSpeedBoat } from 'react-icons/gi';
import { GiGlowingHands } from 'react-icons/gi';
import { FaHandsHelping } from 'react-icons/fa';

const clientImage= <FaHands color='blue' size={70}/>
const speedImage= <GiSpeedBoat color="blue" size={70}/>
const valueImage= <GiGlowingHands color="blue" size={70}/>
const teamImage= <FaHandsHelping color="blue" size={70}/>

let messageToTheClient= 'We value our clients Lorem ipsum dolor sit amet, \
                          consectetur adipisicing elit. Labore, rerum fugit voluptate, illo eius dolor \
                           rem deserunt magni nobis, quos impedit! Ipsum earum iste est, \
                           debitis deserunt maiores suscipit. Distinctio!'

let speedContent="We are quick to respond to our clients We value our clients Lorem ipsum dolor sit amet, \
                 consectetur adipisicing elit. Labore, rerum fugit voluptate, illo eius dolor \
                 remdeserunt magni nobis, quos impedit! Ipsum earum iste est, \
                   d ebitis deserunt maiores suscipit. Distinctio!'"

let extraValueContent="extra value content We value our clients Lorem ipsum dolor sit amet, \
                    consectetur adipisicing elit. Labore, rerum fugit voluptate, illo eius dolor \
                    rem deserunt magni nobis, quos impedit! Ipsum earum iste est, \
                     debitis deserunt maiores suscipit. Distinctio!'"
let teamContent="team content  We value our clients Lorem ipsum dolor sit amet, \
                 consectetur adipisicing elit. Labore, rerum fugit voluptate, illo eius dolor \
                  rem deserunt magni nobis, quos impedit! Ipsum earum iste est, \
                  debitis deserunt maiores suscipit. Distinctio!'"

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