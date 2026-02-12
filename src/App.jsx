import { useState } from 'react'
import person1 from "./assets/images/person1.jpg"
import person2 from "./assets/images/person2.jpg"
import person3 from "./assets/images/person3.jpg"
import person4 from "./assets/images/person4.jpg"
import person5 from "./assets/images/person5.jpg"
import person7 from "./assets/images/person7.jpg"
import facebook from "./assets/images/facebook.png"
import instagram from "./assets/images/instagram.png"
import linkedin from "./assets/images/linkedin (3).png"
import twitter from "./assets/images/twitter.png"
import whatsapp from "./assets/images/whatsapp.png"


import './App.css'

//profile card components
let users = [
  { name: 'Henry', age: '23', role: "Senior Developer", image: person1, online: true, socialMedia: [whatsapp, instagram] },
  { name: 'Chris', age: '25', role: "Project Manager", image: person2, online: true, socialMedia: [facebook, linkedin] },
  { name: 'Jane', age: '20', role: "UI/UX Designer", image: person3, online: true, socialMedia: [linkedin, twitter] },
  { name: 'Esther', age: '31', role: "Senior Developer", image: person4, online: false, socialMedia: [facebook,instagram] },
  { name: 'Paul', age: '27', role: "Junior Developer", image: person5, online: true, socialMedia: [twitter, linkedin] },
  { name: 'Daniel', age: '24', role: "Junior Developer", image: person7, online: false, socialMedia: [facebook, whatsapp ]}
];

function UserProfileCard() {
  return (
    users.map(userCard => (
      <div className='profileCard'>
        <img className='image' src={userCard.image} />
        <h1>{userCard.name}</h1>
        <p>{userCard.age}</p>
        <h3>{userCard.role}</h3>
        {userCard.online === true ?
          <span class="online"> online </span> : <span className='offline'>offline</span>
        }
        <h5>Lorem ipsum dolor, sit amet consectetur adipsicing
        </h5>
        <div className='socialMedia'>
          <img src={userCard.socialMedia[0]} />
          <img src={userCard.socialMedia[1]}/>

        </div>
      </div>
    )
    )
  )

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="row">
        <UserProfileCard />
      </div>
    </>
  )
}

export default App
