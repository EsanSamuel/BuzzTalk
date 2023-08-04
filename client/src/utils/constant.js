import img1 from '../assets/img1.svg'
import img2 from '../assets/img2.svg'
import img3 from '../assets/img3.svg'

export const data = [
    {
        id: 1,
        text: 'Amazing',
        image: img1,
    },
    {
        id: 2,
        text: 'Amazing',
        image: img2,
    },
    {
        id: 3,
        text: 'Amazing',
        image: img3,
    },
]

export const shorten = (address) =>
    `${address.slice(0, 25)}...`;

    export const shorten2 = (address) =>
    `${address.slice(0, 105)}...`;