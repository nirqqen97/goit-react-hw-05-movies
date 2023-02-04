import { HeaderText, Container } from "./Header.styled"



export const Header = () => {
    return (
        <Container>
            <HeaderText to="" >Home</HeaderText>            
            <HeaderText to="movies">Movies</HeaderText>
        </Container>
    )
}

