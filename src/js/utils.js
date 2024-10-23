import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css';
import 'aos/dist/aos.css'
import Aos from 'aos';
import flowbite from 'flowbite'
import '../../node_modules/flowbite/dist/flowbite.min.js'
//import '../../node_modules/flowbite/dist/flowbite.min.css'

export default function MakerIsToast (title , message ) {
    iziToast.show({
        title : title,
        message : message,
        position : 'bottomRight',
        titleColor : '#3b82f6',
        messageColor : "#333",
        color : '#ffff'
       });
}
Aos.init();