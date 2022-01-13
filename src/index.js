import './styles/index.scss'
import 'bootstrap';

const userStack = {
    language: 'JavaScript',
    framework: 'React'
}

const user = {
    name: 'Timofei',
    ...userStack
}


console.log(user)