import React, { Component } from 'react'
import NewPlaylistForm from './new_playlist/NewPlaylistForm'
import Infobox from '../misc/Infobox'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

class UserPlaylistDashboard extends Component {


  render() {

    return (
      <Container maxWidth="md">
        <Infobox header="Add your own playlist." content="Customize your very own playlist, compiled of videos you chose. Once your playlist is complete, you can revisit it and share it with others, even if they don't have an account!"/>
        <NewPlaylistForm />
      </Container>
    )
  }
}

export default UserPlaylistDashboard