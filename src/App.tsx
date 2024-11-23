import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState("");
  
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () =>{
      console.log('Connection established')
    }
    socket.onmessage = (message) =>{
      console.log('Message received: ', message.data)
      setLatestMessage(message.data)
    }
    setSocket(socket); 
  },[])
  if(!socket){
    return <div>
      Loading...
    </div>
  }

  return <div>
    {latestMessage}
  </div>
}

export default App
