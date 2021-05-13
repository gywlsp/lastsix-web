import React from 'react';
import ReactDOM from 'react-dom';

// case.html로 만든부분 리액트로 변경해봤는데 수정해야될 부분 있다면 바로바로 수정하겠습니다..!
function getCases() {
  const cases = [{
    url : "https://lh3.googleusercontent.com/proxy/2Q6qmHVZl934O-aMIQqqY3Bk9TmdFubNYQhC1DOCtDAn6ysPKeByLv7dcuxjHx-KjLbjfov0NwiQokgSUT0WFHM_F5X9bCEF2r9AP-ectnxkWKG_6FTwFhmnnlrzZwFb2MNJxE7oGJpEHmljVO32-3DBhfbQswSAuOTi3N1T6v35emIh407OwBILXDKLVQxY4t0ttaTdn1J0EMqmSfbBXfbMTmtCzf_anA6KBZY_2GqJLuu1qL_3o3p2aOR3FcUGmyp3-lANQbbRZTOzwWXQzn42PSWFiGNdwKX8pxNBJKHZLKp_W3PEMfRPLFUheo-klE4FRLvk6cEmLKG4e7vPHAKKiw",
    text : "슈퍼박테리아 양산"
  },{
    url : "https://lh3.googleusercontent.com/proxy/mfp9KwZS2Dd9g6iXKnFMwHolu63H9vS4Soa8_yQoiwvJJD1lzON3l_ynn5Q24E_XjFN6Qe-uQaojJvqnSvC1eL14Mf7TJtAlSx73snCjfaXhHUDOuYdGglKDBD57TQFKPsqsYGd4l8y3BkU",
    text : "어류 개체 수에 영향"
  },{
    url : "https://lh3.googleusercontent.com/proxy/7LcDhysHKEIBwfwrLBcPks_n9AoFgvDbQCPLwIycd-6LRzHMZnsJMBJwTPF5i_CuEQvciO_3Ie9tBnMysRm8DMltxE3wwdi2HDv1LglVZ-LgvUKz_3a6HZYYsQJbqt1o1hIQ5pvmuy7MNQ",
    text : "물고기 중성 변이"
  },{
    url : "https://www.wallpaperkiss.com/wimg/b/201-2016905_big.jpg",
    text : "많은 수의 돌고래에서 항생제 내성 증가"
  }];
  
  const rendering = () => {
    const result = [];
    for (let i = 0; i < cases.length; i++) {
      result.push(
        <div class = "case">
        <img src = {cases[i].url}/>
        <div><p>{cases[i].text}</p></div>
      </div>  
      );
    }
    return result;
  };

  return <div>{rendering()}</div>;
}
const element = <div>{getCases()}</div>

ReactDOM.render(
  element,
  document.getElementById('root')
);
