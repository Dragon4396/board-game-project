import React from 'react';
import propTypes from 'prop-types';

import {Grid, Button, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ReplayIcon from '@mui/icons-material/Replay';

const WinScreen = (props) => {
  const { gameState } = props;

  const handleMatchReset = React.useCallback(() => {
    // remove specific local storage items
    localStorage.removeItem('playerBattleGrid');
    localStorage.removeItem('enemyBattleGrid');
    localStorage.removeItem('playerShipGrid');
    localStorage.removeItem('enemyShipGrid');
    localStorage.removeItem('gameLog');
    localStorage.removeItem('gameState');
    localStorage.removeItem('hunt_and_seek_state');
    localStorage.removeItem('selectedDifficulty');
    localStorage.removeItem('statsUpdated');
  }, []);

  const imageUrl = gameState.playerWon ? 
  './fleet.jpg' : 
  './onfire.jpg';

  return (
    <Grid container spacing={2} justifyContent='center' alignItems='center' style={{ overflowX: 'auto' }}>
      <Grid item xs={12}>
        <Typography variant='h2' align='center'>
          {gameState.playerWon ? 'Congratulations, You Won!' : 'Game Over, The AI Won!'}
        </Typography>
      </Grid>
      <Grid item xs={12} container justifyContent='center' alignItems='center'>
        <img src={imageUrl} alt={gameState.playerWon ? 'You won' : 'You lost'} style={{ width: 'auto', height: '80vh' }} />
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          color='primary'
          fullWidth
          onClick={handleMatchReset}
          href='/'
          startIcon={<MenuIcon />}
        >
          Return to Menu
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          color='success'
          fullWidth
          onClick={handleMatchReset}
          href='/game'
          startIcon={<ReplayIcon />}
        >
          Play Again
        </Button>
      </Grid>
    </Grid>
  );
};

WinScreen.propTypes = {
  gameState: propTypes.object.isRequired,
};

export default WinScreen;
