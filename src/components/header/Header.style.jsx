import styled from 'styled-components'

export const HeaderWrapper = styled.div`
.sidemenu {
display: none;
}
.my-logo {
    text-align: left;
    padding: 34px 0 0 20px;
    font-size: 2em;
    font-weight: semi-bold;
    color: var(--text-primary);
    display: flex;
    align-items: center;
}

.row {
    margin:0;
    padding:0;
}

.header-container {
    background-color: var(--bg-navbar);
    height: 103px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .nav-bar-icon {
        display: flex;
        justify-content: flex-start;
    }
}

` 