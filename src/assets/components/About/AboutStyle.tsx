import styled from "styled-components"

const AboutStyle = styled.div`

color: white;

margin-top: 10rem;
margin-bottom: 10rem;

    .about {
        display: flex;
    }

    .about-title {
        font-family: 'Playfair Display', serif;
        font-size: 72px;
        color: #a484e8;
        display: flex;
        justify-content: center;
        margin-bottom: 3rem;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%; 

        .title-skills {
            font-size: 60px;
            margin: 0 50%;
            margin-bottom: 5rem;
        }
        span {
            color: #a484e8;
        }

        .skills {
            display: flex;
            flex-direction: column;
            margin-left: 5rem;
            width: 100%; 
        }

        .container-skills {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;

            .icon {
                margin-bottom: 2rem;
                margin-left: 3rem;
                font-size: 35px;
                color: #a484e8;
                display: flex;
                justify-content: flex-start;
            }

            .java, .javascript, .react, .spring {
                margin-left: 2rem;
                background-color: #a484e8;
                border-color: black;
                border-radius: 25px;
                height: 15px;
            }

            .java {
                width: 15rem;
                margin-left: 10rem;
            }
            .javascript {
                width: 10rem;
                margin-left: 5.2rem;
            }
            .react {
                width: 7rem;
                margin-left: 9.1rem;
            }
            .spring {
                width: 18rem;
                margin-left: 3.5rem;
            }
        }

        .info {
            width: 100%; 
        }

        .divider {
            height: 30rem;
            width: 1px;
            background-color: #a484e8;
            border: none;
            opacity: 0.7;
        }

        .head-infos {
            font-size: 20px;
            margin-left: 3rem;
        }

        img {
            background-color: #a484e8;
            height: 300px;
            margin: 3rem;
            margin-left: 4rem;
        }

    }

    .container-info {
        display: flex;
        flex-direction: row;
        margin-right: 4rem;
        align-items: center;
        width: 50%;
    }

    .text-info {
        padding: 0 4rem;
        font-size: 20px;
    }

`

export default AboutStyle;