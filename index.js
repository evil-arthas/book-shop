//imports
import './sass/style.scss'
import {stickyHeader} from './js/sticky-header'
import {sliding} from './js/slider'
//--------------------------------

sliding()

window.addEventListener('scroll', stickyHeader)