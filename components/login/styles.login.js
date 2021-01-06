import styled from "styled-components";

export default styled.div`
  input {
    outline: none;
  }
  .bkg-animated {
    /*            background: gray url(https://subtlepatterns.com/patterns/geometry2.png) repeat 0 0;*/
    background: url(scrollbg.jpg) repeat 0 0;
    width: 100%;
    margin: 0;
    text-align: center;
    height: 800px;
    padding-top: 120px;
    box-sizing: border-box;
    animation: slide 200s linear infinite;
    -webkit-animation: slide 200s linear infinite;
  }
  @keyframes slide {
    from {
      background-position: 0 0;
    }

    to {
      background-position: -3840px 0;
    }
  }
  @-webkit-keyframes slide {
    from {
      background-position: 0 0;
    }

    to {
      background-position: -3840px 0;
    }
  }

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 464px;
    height: 452px;
    perspective: 1000px;
  }
  .container .switch-outer {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 1rem 0;
  }

  .flipper {
    position: relative;
    width: 464px;
    height: 452px;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  #toggle:checked ~ .container > .flipper {
    transform: rotateY(180deg);
  }

  /*
        .container:hover .flipper {
            transform: rotateX(180deg);
        }
*/

  #login,
  #sign-up {
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    width: auto;
    height: auto;
  }

  #login {
    box-shadow: 0px 8px 16px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1);
    padding: 50px;
    border: 4px solid black;
    background-color: aliceblue;
    font-family: "Roboto Condensed", sans-serif;
  }

  #sign-up {
    color: black;
    transform: rotateY(180deg);
    box-shadow: 0px 8px 16px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1);
    padding: 50px;
    border: 4px solid black;
    background-color: aliceblue;
    font-family: "Roboto Condensed", sans-serif;
  }

  a {
    color: black;
    text-decoration-color: black;
    text-decoration: none;
  }

  .title {
    font-size: 1.5em;
    font-family: "Roboto Condensed", sans-serif;
  }

  #email-input,
  #pass-input,
  #login-button,
  #login-facebook-button,
  #login-google-button {
    text-align: center;
    width: 350px;
    height: 30px;
    background-color: #eee;
    border: none;
    font-size: 0.8em;
    margin: 3px;
    border-radius: 15px;
  }

  #login-button:hover {
    background-color: black;
    color: #eee;
    cursor: pointer;
  }

  #login-google-button:hover {
    background-color: black;
    color: #eee;
    cursor: pointer;
  }

  #login-facebook-button:hover {
    background-color: black;
    color: #eee;
    cursor: pointer;
  }

  #uname-sign-up,
  #email-sign-up,
  #pass-sign-up,
  #confirm-pass-sign-up,
  #sign-up-button {
    text-align: center;
    width: 350px;
    height: 30px;
    background-color: #eee;
    border: none;
    font-size: 0.8em;
    margin: 3px;
    border-radius: 15px;
  }

  #sign-up-button:hover {
    background-color: black;
    color: #eee;
    cursor: pointer;
  }

  #remember-me,
  #forgot {
    font-size: 14px;
    margin-bottom: 5px;
  }

  #remember-me {
    float: left;
  }

  #forgot {
    float: right;
  }

  #toggle {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  #switch {
    margin: auto;
    color: azure;
    /*
            position: relative;
            top: 430px;
*/
    /*            left: 0;*/
    z-index: 3;
    padding: 8px;
  }

  #tnc {
    font-size: 10px;
    float: left;
  }
`;
