// Public repositories supplied in the user's screenshot. Website status checked 2026-10-06.
export const websites = [
  {name:'Python Basics',slug:'Python-Basics',category:'Learning',language:'',title:'Start small. Think Python.',description:'All the basic resources beginners need to start learning Python.',url:'https://pythonflow.vercel.app/',status:'Website',theme:'python',mark:'py.'},
  {name:'MERN',slug:'MERN',category:'Learning',language:'HTML',title:'Your first step into full stack.',description:'A collection of the basic resources beginners need to start learning the MERN stack.',url:'https://mern-five-topaz.vercel.app',status:'Live website',theme:'mern',mark:'{ m }'},
  {name:'English Communication',slug:'English-communication',category:'Learning',language:'TypeScript',title:'Think less. Speak naturally.',description:'Practice day-to-day English communication with SpeakFlow.',url:'https://englishcommunication.vercel.app',status:'Live website',theme:'english',mark:'Aa'},
  {name:'Java',slug:'Java',category:'Learning',language:'TypeScript',title:'Make sense of Java.',description:'Mastering programming using Java.',url:'https://java-six-gold.vercel.app',status:'Website',theme:'java',mark:'{ j }'},
  {name:'Java v2.0',slug:'Java-v2.0',category:'Learning',language:'JavaScript',title:'Think it through. Code it out.',description:'Problem solving and object-oriented programming with Java.',url:'https://java-v2-0.vercel.app',status:'Website',theme:'java2',mark:'j.02'},
  {name:'Poll Management',slug:'Poll-management',category:'Tools',language:'TypeScript',title:'A place for every opinion.',description:'A poll management project. Explore the implementation on GitHub.',url:'',status:'Repository',theme:'poll',mark:'≡'},
  {name:'firebase-1',slug:'firebase-1',category:'Tools',language:'',title:'Inside the repository.',description:'Explore the public source repository on GitHub.',url:'',status:'Repository',theme:'firebase',mark:'</>'}
].map(site=>({...site,repo:`https://github.com/aniket-pattiwar/${site.slug}`}));



