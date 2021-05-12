import styled from 'styled-components';

export const Container = styled.div`
        display: grid;
        grid-template-columns: 450px 450px;
        grid-gap: 40px;
        width:920px;
        margin:0 auto 120px auto;
        .project-item {
                border-radius: 20px 20px 20px 20px;
                overflow: hidden;
                display:block;
                position:relative;
                height: 700px;
                overflow: hidden;
        }
        .project-left {
                padding: 0px 60px;
                width: 100%;
                font-weight: 600;
                position:absolute;
                top:400px;
                left:0px;
                z-index:3;
                h1 {
                        font-size: 30px;
                        font-weight: 600;
                    }
        }
        .projecy-image {
                width: 100%;
                overflow: hidden;
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
                width:100%;
                display:block;
                .project-item {
                        padding: 24px;
                        display: block;
                        align-items: center;
                        width:100%;
                        height:auto;
                        margin-bottom:40px;
                }
                .project-left {
                        padding: 0px 12px;
                        width: 100%;
                        position:relative;
                        bottom:0px;
                        position:static;
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
                        height:220px;
                    }
        }
`;
