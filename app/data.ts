type Currency = 'EUR' | 'USD';
type Price = {
    amount: number;
    currency: Currency;
};

interface Post {
    id: number;
    title: string;
    price: Price;
    desc: string;
    image: string;
    catagories: string;
};

const posts: Post[] = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: { amount: 25, currency: 'USD' },
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
        image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600',
        catagories: 'books',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: { amount: 25, currency: 'USD' },
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
        image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600',
        catagories: 'electronics',
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: { amount: 25, currency: 'USD' },
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
        image: 'https://images.pexels.com/photos/5331072/pexels-photo-5331072.jpeg?auto=compress&cs=tinysrgb&w=600',
        catagories: 'fitness',
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        price: { amount: 25, currency: 'USD' },
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
        image: 'https://images.pexels.com/photos/2623828/pexels-photo-2623828.jpeg?auto=compress&cs=tinysrgb&w=600',
        catagories: 'books',
    },
];

export default posts;