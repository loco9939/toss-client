Feature('Landing');

Scenario('Intro', ({ I }) => {
  I.amOnPage('http://localhost:5173');

  I.see('로그인');
  I.see('토스폴리오');

  I.click('로그인');
});

Scenario('Signin', ({ I }) => {
  I.amOnPage('http://localhost:5173/signin');

  I.click(locate('img').withAttr({ role: 'login' }));
  I.fillField('loginId', 'kls9939@naver.com');
  // password 입력은 보안문제로 제거
  I.click('로그인');
  I.wait(2);
  I.see('자산 등록 하러 가기');
});
