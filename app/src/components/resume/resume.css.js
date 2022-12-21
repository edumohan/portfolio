import styled from 'styled-components';

export const Container = styled.div`
        width: 100%;
        padding:50px 100px;
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
            font-family: 'Avenir Book';
            font-weight: 600;
            padding:0;
            font-size: 36px;
            line-height: 49px;
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
            width: 30%;
            padding-right: 95px;
        }
        .right-column {
            word-break: break-word;
            width: 70%;
        }
        .exp-head-row {
            display: flex;
            align-items: baseline;
            label {
                display: inline-block;
                padding-left: 8px;
            }
        }
        h4 {
            font-weight: 100;
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
                margin-bottom: 25px;
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
            padding: 0px;
            .work-experience {
                display:block;
                font-size: 12px;
                float: left;
                width: 100%;
            }
            h4{
                font-size: 20px;
                line-height: 24px;
                margin-bottom: 8px;
                
            }
            p.date-row{
                font-size: 12px;
            }
            .exp-head-row {
                display: block;
                label{
                    padding-left: 0px;
                }
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
