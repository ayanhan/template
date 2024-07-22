import './App.css';

function App() {
  const handleTelegramClick = () => {
    window.open('https://t.me/cryptoindexcom', '_blank', 'noopener,noreferrer');
  };

  const handleDiscordClick = () => {
    window.open('https://discord.gg/hWyHhPdgBP', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="App">
      <div className='header'>
        <div className='header-logo'></div>
      </div>
      <div className='body'>
        <div className='text-logo'>
          <div className='coming-soon'>COMING SOON</div>
        </div>
      </div>
      <div className='footer'>
        <div className='telegram-button' onClick={handleTelegramClick}></div>
        <div className='discord-button' onClick={handleDiscordClick}></div>
      </div>
    </div>
  );
}

export default App;
