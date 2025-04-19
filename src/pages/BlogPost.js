import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

const blogData = [
  {
    id: 1,
    title: 'Cycling around 7 UNESCO World Heritage Sites in a day',
    date: 'August 23, 2022',
    content: [
      {
        type: 'paragraph',
        text: 'It was 5 A.M in the cloudy morning of August. I could hear the sound waves coming from my phone asking me to wake up. I get up to turn my alarm off and after I turned it off I could hear the inner voice inside of me which said "Today is the day, if ever it was". It was the day for cycling, cycling around 7 UNESCO World Heritage sites in Kathmandu. I drank couple of glasses of water, took a bath, ate my breakfast and it was already 6:15. I could hear the notification sound of viber and I was pretty sure that it was Sulav dai who must have texted me. We decided to meet at Ajima Park at 6:30. I packed my bag, camera, food, water, raincoat, some cash, basically packed everything that\'s an essential for cycling distance more than 50KM. We met at 6:30 in the park, had a bit of chat and off we were. Sulav dai and I, we both were in a proper cycling attire except I had an helmet on and he had a plain black cap which said \'Old School\' in white color. We already had planned about our cycling route the previous day. So, it was not a trouble of any kind for us to decide where we were heading to. Our first destination, it was Bhaktapur Durbar Square. Kirtipur and Bhaktapur, they almost are at the distance of 19KM. So, by 6:45 we were already in the ring road cycling around Nakhu area where my chain broke off. I panicked. Because we had a whole day to ride but after just a kilometer or two my cycle didn\'t show good sign.',
      },
      {
        type: 'paragraph',
        text: 'Thankfully, Sulav dai did something with gear box and it was as usual as it was. We were good to go. I took out my camera when we reached to Koteshwor. Aircrafts flying above you, mountain range in front of you and sun giving a welcoming look at you. Obviously, anybody would love to take a picture of a scene like that. We said, next stop Bhaktapur Durbar Square. But we couldn\'t resist ourselves from carrying our cycle up some stairs and taking a picture with Siddha Pokhari (pond) in Sallaghari. There were almost a dozen of people jogging around the Pokhari when we reached there. The water was very green but the wind created a wave in water which made it look so beautiful, one would love to sit there for hours and look at that green water wave. But we had some healthy distance to cover, so after 5 minutes we left the Pokhari and after couple minutes of cycling, we were in Bhaktapur Durbar Square.',
      },
      {
        type: 'heading',
        text: 'Bhaktapur Durbar Square',
        level: 4,
      },
      {
        type: 'paragraph',
        text: 'Built in 14th century, Bhaktapur Durbar Square was home to Malla kings of Bhaktapur until it was annexed by the troops of Prithivi Narayan Shah in 1769 AD. It is believed that Shah\'s troops killed 2001 people and set 504 houses on fire during the battle. Bhaktapur Durbar Square was listed in the UNESCO World Heritage site in 1979 AD for it\'s rich architecture and cultural importance it holds for the people. Every monument in Bhaktapur Durbar Square has a story to tell, story of art, culture and custom.',
      },
      {
        type: 'image',
        src: '/bhaktapur-cycle.jpg',
        alt: 'Cycling near Bhaktapur',
      },
      {
        type: 'image',
        src: '/bhaktapur-description.JPG',
        alt: 'Description at Bhaktapur Durbar Square',
      },
      {
        type: 'paragraph',
        text: 'We reached Bhaktapur Durbar Square around 8:45. We parked our cycle, found ourselves a spot to sit and to admire what is there for us. I drank some water and ate a banana, meanwhile Sulav dai was stationary. He sat very comfortably and was feeling the wind hit him while seeing the beautiful sight of Durbar Sqaure. There were also a couple of people in their cycles, we shared some smile but didn\'t chat. There were some young girls playing badminton, old people doing their religious activities and also there was a wedding photoshoot going on. For almost 5 minute, neither of us said a word. It was around 9 when we decided to move. We went to a local restaurant to have some food. We ordered 2 cups of tea and 4 Yomaris. I took out a brownie from my bag and we started to have a chat about what we were doing lately while enjoying our Yomaris. The restaurant lady was very polite to us, so were everyone in that area. We asked the lady for the direction to Nyatapola. We thanked her, paid the bill and off we were again.',
      },
      {
        type: 'heading',
        text: 'Nyatapola Temple',
        level: 4,
      },
      {
        type: 'paragraph',
        text: 'I was very disappointed when I found out that Nyatapola isn\'t actually enlisted in UNESCO World Heritage site. But when I googled about the world heritage sites in Kathmandu, Google recommended me this website which said Nyatapola is actually one of the world heritage sites. But it is a part of Bhaktapur Durbar Square with it\'s own individual distinctness. I came to know about this only after my day was done. There was no chance that I would cycle again to Changunarayan in the dusk of rainy night just because I missed it. So, I guess I will write about Nyatapola in this blog, but I\'ll update it after my next cycling trip which will be to Changunarayan for sure.',
      },
      {
        type: 'paragraph',
        text: 'Built in 1702 AD by king Bhupatindra Malla, Nyatapola is the 5 storey temple reaching up to the height of 33m (108.26 ft.) for which it is regarded as the tallest temple of Nepal. The meaning of word Nyatapola is "Five Storeys Roof Topped Temple". The temple has strong connection to lord Bhairava and his mother Siddha Laxmi. Not just culturally but Nyatapola is strong in it\'s engineering too as it has survived 4 major earthquakes including the recent 2015 earthquake, which destroyed the entire city.',
      },
      {
        type: 'image',
        src: '/nyatapole-cycle.JPG',
        alt: 'Cycling near Nyatapola Temple',
      },
      {
        type: 'image',
        src: '/nyatapole-event.jpg',
        alt: 'Event at Nyatapola Temple during Krishna Janmastami',
      },
      {
        type: 'paragraph',
        text: 'After heading towards the direction told by the local lady for 2 minutes, we reached the temple. It was a bit of stretching for our neck as we had to look up in to the sky just to see the pinnacle of the temple. I started getting busy with my camera. A man with half a dozen of Bhagvad Geeta in his hand approached Sulav dai and started talking to him in English in a hope of some business. Sulav dai has a white skin, not as white as Americans but white as east Asian. Sulav dai said to the man that he wasn\'t a tourist rather he is a local of Kathmandu. All three of us had a good laugh. There were bunch of people dancing in circle in front of temple. A girl who was dressed as lord Krishna was in the middle. It was Krishna Janmastami so I guess they were just celebrating his birthday. I gave a quick glance to my watch, it was 9:20. After clicking some pictures we started to paddle. Next, we were going to Pashupatinath.',
      },
      {
        type: 'heading',
        text: 'Pashupatinath Temple',
        level: 4,
      },
      {
        type: 'image',
        src: '/pashupati-temple.jpg',
        alt: 'Pashupatinath Temple',
      },
      {
        type: 'image',
        src: '/pashupati-ghat.jpg',
        alt: 'Pashupatinath Ghat',
      },
      {
        type: 'paragraph',
        text: 'I sprinted my cycle, reached Koteshwor in 30 minutes. Along with number of people, I got stuck in traffic jam of Koteshwor. Traffic police waived his hand towards us after 5 minutes. I looked back when I reached Tinkune. I see no sign of Sulav dai. He must be enjoying his own speed. I waited for him in Pashupatinath. After some time, he calls and says he is in the entrance gate of the temple. I found him. We weren\'t allowed to take our cycle from the entrance gate. So, we entered the temple from the parking lot. There were a lot of people, both alive and dead.',
      },
      {
        type: 'paragraph',
        text: 'Pashupatinath is the most important and sacred pilgrim sites for Hindus all over the world. It is also one of the most sacred crematorium (Aarya Ghat) for the Hindus which is comparable to ghats of Varanasi in India. Establishment of the temple can be traced back till 5th century. It is believed that king Prachanda Dev built the temple. According to Hindu religion, Pashupatinath is considered as the protector of the universe and is the patron deity of Nepali people. Dedicated to lord Shiva, Pashupatinath is in the bank of Bagmati river. It was classified as the UNESCO World Heritage site in 1979AD.',
      },
      {
        type: 'paragraph',
        text: 'You can hear the Vedic chants as soon as you enter the temple area. A number of Hindu rituals keep happening inside the temple premises everyday like Sharaadha, Bratabandha, Wedding, Graha Shanthi and so on. It was only a month ago that I had visited the temple last time so it wasn\'t a different environment that I was exposed to when I reached there. We decided not to spend much time in Pashupatinath as we both had experience with the temple of our own kind. I could see the golden pinnacle of the temple. I prayed, clicked some pictures and paddled back to the gate where we stopped for a quick water break. Next, it was Bauddhanath Stupa where we were heading to.',
      },
      {
        type: 'heading',
        text: 'Bauddhanath Stupa',
        level: 4,
      },
      {
        type: 'image',
        src: '/bauddha-stupa.jpg',
        alt: 'Bauddhanath Stupa',
      },
      {
        type: 'image',
        src: '/bauddha-description.JPG',
        alt: 'Description at Bauddhanath Stupa',
      },
      {
        type: 'paragraph',
        text: 'After around half an hour from Pashupatinath, we reached Bauddhanath Stupa absorbing all the dusts inside our lungs. It was the first time I had ever been to Bauddhanath. It always looked pretty in the pictures, but I was left in awe when I saw it with my eyes wide open. It was a big white dome which you could look for hours and not get bored looking at it. You could hear the Tibetan accent and smell Tibetan food as soon as you enter the stupa area.',
      },
      {
        type: 'paragraph',
        text: 'According to Licchavi\'s record, Bauddhanath was founded in the late 6th century by Licchavi king Sivadeva. It remains the significant place of pilgrimage for Tibetan Buddhists and Nepalese. It is believed that the stupa was built using many kilograms of gold for decoration. Sitting at 36m high, the stupa holds magical energy in every turn. The stupa was classified as UNESCO World Heritage site in 1979 AD.',
      },
      {
        type: 'paragraph',
        text: 'As mentioned earlier, the stupa holds magical energy in every turn. The giant eyes in the top of stupa looks so terrifying and beautiful at the same time, your eyes won\'t let you give up looking at it. We were in a bit of hurry as it already was 12:30 and we had 3 more places to go. Every weekend of my life, I would love to go to Bauddhanath, sit there and do nothing for an hour. It is a world heritage site for a reason. After a walk around the whole stupa, we were back on roads with our mask on, ready to ride towards Patan Durbar Square.',
      },
      {
        type: 'heading',
        text: 'Patan Durbar Square',
        level: 4,
      },
      {
        type: 'image',
        src: '/patan-cycle.jpg',
        alt: 'Cycling near Patan',
      },
      {
        type: 'image',
        src: '/patan-durbar.jpg',
        alt: 'Patan Durbar Square',
      },
      {
        type: 'paragraph',
        text: 'The sun was shining bright up in the sky. But the weather of Kathmandu is so pleasant, you could easily cycle around the city even if it was May or June. After leaving Bauddhanath, we rode down the road and somehow reached Baneshwor. Cycling around the polluted river of Anamnagar, there we were. In Patan Durbar Square. It was Krishna Janmastami, so were weren\'t surprised when we saw the crowd pushing each other in the alley of Patan.',
      },
      {
        type: 'paragraph',
        text: 'Built in 1667 by king Narshing Malla, Patan Durbar Square was the home for Malla kings of Lalitpur. It is said that King Narshing saw lord Krishna and Radha in front of his royale palace, for which the main temple of Durbar sqaure, Krishna Mandir is named after. The boundary of Patan (Lalitpur, as it is called now) is surrounded by 4 stupas which was built by Emperor of India, Ashoka in 250 BC. Patan is in Lalitpur city, which in Sanskrit means "City of Beauty". Patan Durbar Sqaure was classified as UNESCO World Heritage site in 1979.',
      },
      {
        type: 'paragraph',
        text: 'I had been to Patan Durbar Square multiple times but today it was too much of people for us to enjoy every part of the Durbar Square. Krishna mandir is a prominent temple in Patan Durbar Square which in itself is an architectural marvel. So, today being the Krishna Janmastami, the temple area was packed by the devotees. There is also a museum inside which is considered to be one of the best museum in Asia, obviously we couldn\'t go in there given the amount of people we were surrounded by. I was starving. I just wanted to leave Durbar Square for now, get inside a restaurant and rest my body for a bit. We left the Durbar Square as soon as I said this to Sulav dai. According to our plan, our next destination was Kathmandu Durbar Square but we were starving for food and some shade.',
      },
      {
        type: 'paragraph',
        text: 'There is a restaurant in Jhamsikhel where I usually hangout with my friends, so I asked Sulav dai if we could go there. He had no issues. I was around Labim mall when I found out that Sulav dai wasn\'t around. He had gone the other way. I gave him a call and we decided to meet at St. Mary\'s School. I waited for Sulav dai for almost 10 minutes and I see him coming with his chain in his handle. He said his chain broke off completely. We strolled our cycle for 15 minutes in search of a repairing shop. The chain got fixed and we cycled to the restaurant which wasn\'t far from the repairing shop. We ordered couple of chicken roll and iced Latte. It was a good break for an hour. It was around 2:30 we decided to leave the restaurant and get back to roads.',
      },
      {
        type: 'heading',
        text: 'Kathmandu Durbar Square',
        level: 4,
      },
      {
        type: 'paragraph',
        text: 'After cycling for about 20 minutes from Jhamsikhel, we reached Basantapur.',
      },
      {
        type: 'paragraph',
        text: 'Kathmandu Durbar Square also known as Hanuman-dhoka Durbar Square lies in the heart of the city. The name Hanuman-dhoka Durbar Square came from a Hanuman statue that was made in 1672 by king Pratap Malla. The storeyed residence building built by King Prithivi Narayan Shah in 1770 is called Basantapur Durbar Square and the complex in whole is called Kathmandu Durbar Square. Most of the buildings you see here were built between 15th-18th century. Kastamandup, a temple made of wood, from which the city of Kathmandu gets it\'s name is located within the Durbar Square premises which was destroyed by 2015 earthquake but is completing it\'s renovation. Kathmandu Durbar Square was classified as UNESCO World Heritage site in 1979.',
      },
      {
        type: 'image',
        src: '/basantapur-durbar.jpg',
        alt: 'Kathmandu Durbar Square (Basantapur)',
      },
      {
        type: 'image',
        src: '/basantapur-cycle.jpg',
        alt: 'Me with my cycle in front of durbar',
      },
      {
        type: 'paragraph',
        text: 'Basantapur is always my goto place in Kathmandu whenever I feel like getting out of my house. Many monuments were destroyed because of earthquake in 2015. So, the construction work is still going on which you might think is taking a lot of time but given the significance of the monuments, one needs to be very delicate and precise. I believe, just like me, many people love to come Basantapur during their spare time. The clouds were getting dark and we were down to one last place to go for the day. After clicking some pictures, were were off to Swayambhunath.',
      },
      {
        type: 'heading',
        text: 'Swayambhunath Stupa',
        level: 4,
      },
      {
        type: 'image',
        src: '/swyambhu-cycle.JPG',
        alt: 'Cycling near Swayambhunath',
      },
      {
        type: 'image',
        src: '/swyambhu-stupa.jpg',
        alt: 'Swayambhunath Stupa',
      },
      {
        type: 'paragraph',
        text: 'I can\'t vividly remember the amount of time it took for us to reach the stupa. Swayambhu\'s hill was a serious trouble for us to cycle on because we already had cycled around 60 km for the day and felt very exhausted. While cycling up the hill, I saw a gang of monkeys. Monkey temple, is also what Swayambhunath is known as.',
      },
      {
        type: 'paragraph',
        text: 'It\'s construction dates back till 460 AD, it was built by king Manadeva and by 13th century, it had become an important center of Buddhism. Between the two eyes, also called as wisdom eye, there is symbol like question mark, which in Nepali numerical means one. This sign represents the unity of all things existing in the world as well as the only path to enlightenment through the teachings of Buddha. Swayambhunath was classified as UNESCO World Heritage site in 1979.',
      },
      {
        type: 'paragraph',
        text: 'After cycling the hill. We reached in the parking area. We took out our mask and inhaled some fresh air. After our lungs were happy, we ate an ice-cream and hydrated ourselves. Looking at the monastery in front of us, we enjoyed our cold ice-cream feeling the warmth of accomplishment. After a long exhausting day, we did it. Now there is nothing more we could do in this city as a cyclist. I asked the security guard if we could carry our cycle up the stairs. He denied. So, we locked our cycle in the parking area and started trekking some stairs. There were bunch of teenagers making tiktok videos near the stupa. I had my camera with me. So, some people asked me how much I charged per photograph. I smiled and I said, I am not a photographer, it\'s just my personal interest. They left awkwardly. The view was magnificent from the top. It started to drizzle when we were clicking pictures. So, I packed my camera carefully and ran down the stairs to the parking lot. I wore my raincoat, unlocked our ride and sprinted down the hill.',
      },
      {
        type: 'paragraph',
        text: 'After around half an hour, I reached home. I took off my helmet, threw my bag and lied in my bed. Almost after 70km of cycling and visiting some exceptionally beautiful monuments, I didn\'t feel tired. There was glee on my face, I was obliged and felt satisfied. It was an achievement for the rest of my life. While lying on the bed, I played back all the moments of the day in my head. Sheer delirium!',
      },
    ],
  },
  {
    id: 2,
    title: 'How becoming a cognitive scientist will make you feel like Harvey Specter',
    date: 'April 19, 2025',
    content: [
      {
        type: 'heading',
        text: 'The Foundation and Emergence of Cognitive Science',
      },
      {
        type: 'paragraph',
        text: 'If you are in kindergarten, you can understand cognitive science as mere Brain Science.',
      },
      {
        type: 'paragraph',
        text: 'Cognitive Science is an interdisciplinary field which explores the nature of mind, blending Psychology, Neuroscience, Linguistics, Artificial Intelligence, Anthropology, and Philosophy (with Education coming to the scene soon).',
      },
      {
        type: 'image',
        src: '/Cognitive_Science_Hexagon.svg.png',
        alt: 'Cognitive science fields',
      },
      {
        type: 'paragraph',
        text: 'George A. Miller marks September 11, 1956 as a symbolic birth date for Cognitive Science when Noam Chomsky presented his ideas on Syntactic Structures and other research areas of Cognitive Science at MIT.',
      },
      {
        type: 'paragraph',
        text: 'By 1986, University of California, San Diego had started the world’s first Department of Cognitive Science, contributing to the emergence of the field.',
      },
      {
        type: 'paragraph',
        text: 'The main claim of cognitive science is that the mind operates like a computational system with rule-based structures whose impact can be rooted in the development of Artificial Neural Networks and other deep learning concepts. What is Elon Musk trying to do with Neuralink? Just merge human cognition with AI. All the Large Language Models and Generative AIs, what are they trying to do? Mimic the human brain. So, we can say that AI is merely a tool for Cognitive Science.',
      },
      {
        type: 'heading',
        text: 'Who is Harvey Specter?',
      },
      {
        type: 'paragraph',
        text: 'Harvey Specter is a fictional character from the TV show “Suits”. Harvey is a graduate of Harvard Law School and works as a corporate lawyer and senior partner at Pearson Hardman.',
      },
      {
        type: 'image',
        src: '/harveySpecter.jpeg',
        alt: 'Harvey Specter',
      },
      {
        type: 'paragraph',
        text: 'Where he graduated from or which position he holds in a law firm is none of our interest, but how he thinks and presents himself? That is the whole point of writing this blog.',
      },
      {
        type: 'paragraph',
        text: 'Harvey is a complex, charismatic character who is confident, competitive, emotionally guarded, and is always hungry for winning—the kind of nature which everyone from my generation aspires to be (well, at least I do, rest assured). He is not an easy personality whom you can decode how he thinks. He is always a step ahead. He knows what to say to his clients, to his partners, to his colleagues, to his associates. He is very aware of the kind of neurochemical reaction which his words create in the person’s brain. He also has a very good idea of how people around him think.',
      },
      {
        type: 'paragraph',
        text: 'Now that we have basic ideas about cognitive science and the personality of Harvey Specter, the title of this blog will now make you feel confused and not clueless: How Becoming a Cognitive Scientist Will Make You Feel Like Harvey Specter.',
      },
      {
        type: 'heading',
        text: 'An Unusual Notice',
      },
      {
        type: 'paragraph',
        text: 'It was New Year’s Eve, and five of us were together. We still had a couple of hours before we could celebrate the new year. Some of us were busy on Instagram, TikTok, or just enjoying the conversation. Arogya was busy playing a game, a game I found very mentally demanding. He was playing “Two Cars”. Simply explained, your mobile screen is divided into four lanes: two lanes for blue cars and the other two for red. You have two cars running on their own lane. You have to dodge the obstacles and collect the rewards. Simple, right? Nope!',
      },
      {
        type: 'image',
        src: '/twocars.png',
        alt: 'Two cars game',
      },
      {
        type: 'paragraph',
        text: 'While most of my friends were struggling to score 50-60 points, there was Arogya—he crossed 500 points with ease. That was not easy. Now, this struck a question in my mind: How was Arogya able to score 10 times more than most of us?',
      },
      {
        type: 'paragraph',
        text: 'I started building my own hypothesis to answer this question. I started with: How does one’s brain respond when playing this game? We can all find common ground when I say that if your dominant hand is right, your left hemisphere of the brain is active, and if your dominant hand is left, your right hemisphere is active. To score 500 in a game like this, you would need both your hemispheres to work in sync. All five of us in the room had right as our dominant hand, but why did only Arogya’s right hemisphere work more in sync than the rest of us? That was my second question.',
      },
      {
        type: 'paragraph',
        text: 'I remember him mentioning in one of our previous conversations about how he fractured his right hand in 5th grade and learned to use his left hand to do his assignments and write exams. He used to practice writing with his left hand, writing A-Z in small and capital letters, writing sentences containing all alphabets using his left hand, and slowly started developing proficiency in it. And guess what? He didn’t just fracture his hand once—he fractured it thrice. So from age 13 to 15, he mastered the art of writing with his left hand (obviously, what other options did you have, Arogya?).',
      },
      {
        type: 'paragraph',
        text: 'He had more time invested using his non-dominant hand (left) than all of us in the room. And to continue this analogy, he is a drummer. He has been learning to play the drums for the last six months. There are not many instruments like drums that require so much attention, your sensorimotor system, and your hand movements. As he had been playing regularly for the last six months, both his hands were active and working with greater speed than the rest of us in the room.',
      },
      {
        type: 'paragraph',
        text: 'The advantage of playing an instrument can be traced to the intelligence of Albert Einstein. There is this popular myth that normal humans can only use 5% of their brain, but Einstein was able to use 10% of his brain, which made him smarter than most of us. This obviously is a cognitive myth and holds no scientific backing. We can explain his intelligence by highlighting the fact of how exceptional a violin player he was. Playing any instrument with great persistence and efficiency activates your Parietal Lobe.',
      },
      {
        type: 'image',
        src: '/parietalLobe.jpg',
        alt: 'Different lobes of brain',
      },
      {
        type: 'paragraph',
        text: 'There are four main lobes in our brain, and this is what each of them does:',
      },
      {
        type: 'paragraph',
        text: '- Frontal Lobe: Manages thinking, planning, and movement.',
      },
      {
        type: 'paragraph',
        text: '- Parietal Lobe: Processes touch, spatial awareness, and sensory association.',
      },
      {
        type: 'paragraph',
        text: '- Occipital Lobe: Processes vision.',
      },
      {
        type: 'paragraph',
        text: '- Temporal Lobe: Handles hearing, memory, and language.',
      },
      {
        type: 'paragraph',
        text: 'So, being a musician activates your parietal lobe—a lobe that sits on top of the other three lobes. If your parietal lobe is active, you are likely more natural at connecting dots, seeing patterns, generating better ideas, and having different perspectives.',
      },
      {
        type: 'paragraph',
        text: 'I concluded that Arogya was able to score 10 times more than the rest of us in a game that required both hemispheres to be active because of his history of writing with a non-dominant hand, which activated his right hemisphere along with his left. He is a drummer, so he has better sensorimotor coordination and an active parietal lobe than anyone in the room.',
      },
      {
        type: 'heading',
        text: 'The Power',
      },
      {
        type: 'paragraph',
        text:'Now, how does this make me feel like Harvey Specter? My idea of Harvey Specter is to be able to understand how a person’s mind works. When Arogya crossed the score of 500 points in the game, everybody was just surprised, and nobody had an actual clue about how he was able to achieve such a high score. I had read about divided attention, and that immediately sparked my curiosity. I searched for a paper online and came across <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5546942/" target="_blank" rel="noopener noreferrer">this paper</a>. I read the paper, and my curiosities took a chain reaction. I started to ask him questions regarding his handedness and playing drums. That answered most of my curiosities.'
      },
      {
        type: 'paragraph',
        text: 'As he was playing the game, I was able to visualize how his brain must be working, which parts of his brain must be active, and what incidents led him to play this game with such ease. While it was just another incident in our friend group, it was not for me. I was able to bring all my fragmented knowledge of cognitive science and see it right in front of me while all of my friends around me were unaware, including Arogya himself. I had never felt so much power—to be able to know how someone’s mind is working and why it is working that way. I felt like a magician. I felt like a Harvey Specter.',
      },
    ],
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container">
      <h2>{blog.title}</h2>
      <div className="date">Published on {blog.date}</div>
      {blog.content.map((item, index) => {
        if (item.type === 'paragraph') {
          return <p key={index} dangerouslySetInnerHTML={{ __html: item.text }} />;
        } else if (item.type === 'image') {
          return <img key={index} src={item.src} alt={item.alt} className="blog-image" />;
        } else if (item.type === 'heading') {
          return React.createElement(`h${item.level}`, { key: index, style: { fontWeight: 'bold', fontSize: '1.4rem' } }, item.text);
        }
        return null;
      })}
      <Link to="/blogs" className="back-link">Back to Blogs</Link>
    </div>
  );
};

export default BlogPost;