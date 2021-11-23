import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import User from "./components/Profile/user.json";
import Data from "./components/Statistics/data.json";
import Friends from "./components/FriendList/friends.json";
import Transactions from "./components/TransactionHistory/transactions.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="TaskOne">Task 1 - Profile on the social network</p>
        <div className="Profile">
        <Profile
          username={User.username}
          tag={User.tag}
          location={User.location}
          avatar={User.avatar}
          stats={User.stats}
        />
        </div>

        <p className="TaskTwo">Task 2 - Statistics section</p>
        <div className="Stats">
        <Statistics
        title="Upload stats" 
        stats={Data}
        />
        </div>

        <p className="TaskThree">Task 3 - Friend List</p>
        <div className="Friends">
        <FriendList 
        friends={Friends} 
        />
        </div>

        <p className="TaskFour">Task 4 - Transaction history</p>
        <div className="Transaction">
        <TransactionHistory 
        items={Transactions} 
        />
        </div>

      </header>
    </div>
  );
}

export default App;
