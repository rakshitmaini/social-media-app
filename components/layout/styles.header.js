import styled from "styled-components";

export default styled.div`
  #header {
    width: 100%;
    height: 80px;
    float: left;
    background-color: red;

    #logo {
      width: 30%;
      float: left;
      img {
        width: 80px;
        height: 80px;
      }
    }
    #menu_list {
      width: 70%;
      float: left;

      ul {
        float: right;
        margin-right: 15%;

        li {
          display: inline-block;
          padding: 8px;
        }
      }
    }
  }
`;
