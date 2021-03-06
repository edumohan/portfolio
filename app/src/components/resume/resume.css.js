import styled from 'styled-components';

export const Container = styled.div`
        width: 90%;
        margin: 100px auto 100px auto;
        .resume-head {
            letter-spacing: 0px;
            color: #4EBEA5;
            font-weight:500;
            font-size:32px;
            margin-bottom: 20px;
        }
        h2 {
            color: #5E6980;
            font-size:26px;
            margin-top: 18px;
            font-weight: bold;
            margin-bottom: 50px;
        }
        h3 {
            font-weight: 600;
            padding:0;
            font-size: 26px;
            line-height: 30px;
        }
        .date-row {
            color: #9296A4;
            margin-top: 4px;
        }
        .work-experience {
            display: flex;
            margin-bottom: 20px;
        }
        .left-column {
            width: 34%;
            padding-right: 95px;
        }
        .right-column {
            word-break: break-word;
            width: 80%;
        }
        .exp-head-row {
            display: flex;
            label {
                display: inline-block;
                padding-left: 8px;
            }
        }
        h4 {
            font-weight: 700;
        }
        p {
            margin-bottom: 10px;
        }
        .exp-row {
            margin-bottom:40px
        }
        .block-text {
            color: #2C3454;
            font-size: 13px;
            line-height: 18px;
        }
        .row-right {
            p {

            }
        }
        .img-container {
            margin-top:40px;
            display: block;
            width: 100%;
            .img-col-2 {
                float: left;
                width: 44%;
            }
            .img-col-1 {
                float: left;
                width: 54%;
                padding-right: 15px;
            }
            img {
                width: 100%;
                display: block;
                margin-bottom: 22px;
            }
        }
        .thannk-you h3 {
            float: right;
            width: 142px;
            text-align: right;
            line-height: 30px;
        }
        @media only screen and (max-width: 1000px) {
            margin:24px 0px;
            width: 100%;
            display:table;
            .work-experience {
                display:block;
                font-size: 12px;
                float: left;
                width: 100%;
            }
            .left-column {
                width: 100%;
                padding-right: 0px;
                margin-bottom: 24px;
            }
            .right-column {
                width: 100%;
            }  
            .exp-row {
                margin-bottom: 12px;
            }
            .img-container {
                float: left;
                width: 100%;
                .img-col-1 {
                    float: left;
                    width: 55%;
                    padding-right: 10px;
                }
                img {
                    margin-bottom: 12px;
                }
                .img-col-2 {
                    float: left;
                    width: 44%;
                }
            }
            .img-container img {
                margin-bottom: 10px;
            }    
            .date-row {
                margin-top: 3px;
            }      
        }
`;
