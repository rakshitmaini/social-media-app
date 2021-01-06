import styled from "styled-components";

export default styled.div`
  #header {
    width: 100%;
    height: 100px;
    float: left;
    background-color: #B42B0F;
    /* background-color:blue; */

    #logo {
      width: 30%;
      float: left;
      img {
        width: 80px;
        height: 80px;
        color:whitesmoke;
      }
    }
    #menu_list {
      width: 70%;
      float: left;

      ul {
        float: right;
        margin-right: 3%;

        li {
          display: inline-block;
          padding-top:18px;
              margin-left: 20px;
    margin-right: 20px;
          text-align:center;
          line-height:3px;
          i{
            color:white;
            font-size:25px;

          }
          h4{
            color:whitesmoke;
          }
        }
        li:hover{
          cursor:pointer;
        }
      }
    }
  }
`;
