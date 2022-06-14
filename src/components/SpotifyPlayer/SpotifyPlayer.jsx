import SpotifyPlayer from 'react-spotify-player';  
 const size = {   width: 300,   height: 80, }; 
 const view = 'list'; 
 const theme = 'black';

function SpotifyWidget() {
    return (
      <div className="spotify">
      <SpotifyPlayer   uri="spotify:playlist:7uki1i90Ug547fPFgjJhD8"   size={size}   view={view}   theme={theme} />
      </div>
    );
  }
  
export default SpotifyWidget;