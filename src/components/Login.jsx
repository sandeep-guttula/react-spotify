import React from 'react'
import styled from 'styled-components'

const Login = () => {

    const handleClick = () => {
        const client_id = "7d62971e74844bd6857e32c0f9936118"
        const redirect_uri = "http://localhost:3000/"
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            'user-read-email','user-read-private',
            'user-read-playback-state',  'user-modify-playback-state', 'user-read-currently-playing','user-read-recently-played',
            'user-top-read',
        ];
        window.location.href = `${apiUrl}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`
    }
    
    return (
        <Container>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="Spotify"/>
            <button onClick={handleClick} >Connect Spotify</button>
        </Container>
    )
}

export default Login

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #1db954;
    gap: 5rem;
    img{
        height: 20vh;
        
    }
    button{
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        background-color: #191414;
        color: #49f585;
        font-size: 1.4rem;
        cursor: pointer;
    }
    

`