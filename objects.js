var playlist = {artistName : "songTitle"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Slowdive'] = 'Alison'
  playlist['My Bloody Valentine'] = 'Sometimes'
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
}
