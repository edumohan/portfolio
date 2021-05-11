import styled from 'styled-components';

export const Container = styled.div`
        border-radius: 20px;
        padding:0px 75px;
        .project-item {
                background-color: #091E5C;
                border-radius: 20px;
                overflow: hidden;
                padding: 64px 0px 64px 24px;
                display: flex;
                color: #FFFFFF;
                align-items: center;
                justify-content: space-between;
        }
        .project-left {
                align-items: center;
                padding: 0px 60px;
                width: 40%;
                font-weight: 600;
                h1 {
                        font-size: 40px;
                        font-weight: 600;
                    }
        }
        .projecy-image {
                width: 650px;
                border-radius: 20px 0px 0px 20px;
                overflow: hidden;
                box-shadow: 0px 30px 60px 0px rgb(25 43 100 / 15%);
                img {
                        display: block;
                        max-width: 100%;
                }
        }
        .project-desc {
                margin-top: 24px;
                opacity: .8;
                line-height: 25px;
                font-size: 15px;
        }
        .project-date {
                opacity: .8;
                font-style: italic;
        }
        .project-link {
                text-decoration:none;
                transition: opacity .3s ease;
        }
        @media only screen and (max-width: 1000px) {
                border-radius: 20px;
                padding: 0px 24px;
                .project-item {
                        padding: 50px 24px;
                        display: block;
                        color: #FFFFFF;
                        align-items: center;
                }
                .project-left {
                        padding: 0px 12px;
                        width: 100%;
                        h1 {
                                font-size: 26px;
                                font-weight: 600;
                            }
                }
                .project-desc {
                        margin-top: 15px;
                        opacity: .8;
                        line-height: 20px;
                        font-size: 15px;
                        margin-bottom: 15px;
                }
                .projecy-image {
                        width: 100%;
                        border-radius:20px;
                    }
        }
`;
