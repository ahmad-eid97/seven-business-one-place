import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'


import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faClipboardUser } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faSquarePhone, faClipboardUser, faBriefcase, faStar, faCompass, faPhone, faClock, faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)