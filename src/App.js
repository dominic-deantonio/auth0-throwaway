import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton";
import Profile from "./components/profile";

function App() {
  return (
    <div className='container d-flex flex-column align-items-center'>
      <div class="card text-center m-2">
        <div class="card-header">
          <ul class="nav d-flex justify-content-between">
            <LoginButton />
            <LogoutButton />
          </ul>
        </div>
        <div class="card-body">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
