import styled from 'styled-components'

export const SideMenuWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 344px;
    height: 100%;
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(18, 18, 18, .8);
    z-index: 111;

    .sidebar-menu {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;

        .close-sidebar {
            padding: 46px 242px 312px 20px;
        }
    }
`