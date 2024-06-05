import styled from 'styled-components'

export const NavigationWrapper = styled.div`


ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 28px auto;

    a {
        text-decoration: none;
        list-style: none;
        margin-left: 20px;
        margin-right: 20px;
        color: var(--text-primary);
    }
}
`;