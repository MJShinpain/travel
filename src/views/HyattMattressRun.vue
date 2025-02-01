<template>
  <div class="app-details">
    <h1>Hyatt Globalist Mattress Run</h1>
    <p>
      글로벌리스트를 위해 매트리스런을 하는 것이 이익인지 계산하는 툴입니다.
    </p>
    <br />

    <h2>🌟 매트리스런이란?</h2>
    <p>
      매트리스 런은 여행자가 실제 숙박을 목적으로 하지 않고 오직 엘리트 회원
      자격(티어)을 얻기 위해 호텔을 예약하는 것을 말합니다. 이 방법은 일반적으로
      권장되지 않고 모든 리스크는 본인이 책임지는 것입니다.
    </p>
    <br />

    <h2>📊 사용법</h2>
    <ul>
      <li>
        계산기에 입력하는 모든 가치는 본인의 상황에 따라 조정하시기 바랍니다.
      </li>
    </ul>
    <br />
    <ul>
      <h3>
        ✅
        <strong>올해 매트리스런 설정</strong>
      </h3>
      <ul>
        <li>
          <strong>올해 실제 숙박(박)</strong>: <br />올해 동안 호텔에서 실제로
          숙박한 박 수를 입력합니다.
        </li>
        <li>
          <strong>매트리스런 1박($)</strong>: <br />매트리스런 한 박당 발생하는
          평균 비용을 달러($) 단위로 입력합니다.
        </li>
        <li>
          <strong>내년 실제 숙박</strong>: <br />내년에 실제로 예약할 숙박 박
          수를 입력합니다.
        </li>
      </ul>
      <br />
      <li>
        <h3>💰 <strong>매트리스런 포인트 적립</strong></h3>
        <ul>
          <li>
            <strong>1포인트 가치($):</strong>
            <br />본인이 생각하는 1 포인트의 가치를 입력합니다. 기본값: 2 cents
          </li>
        </ul>
      </li>
      <br />

      <li>
        <h3>🏨 <strong>마일스톤 가치</strong></h3>
        <ul>
          <li>
            <strong>Globalist 1박당($)</strong>: <br />본인이 생각하는 Globalist
            1박당 추가 혜택(late check out, free breakfast 등)의 가치를
            입력합니다.
          </li>
          <li>
            <strong>Cat1–4 FN($)</strong>: <br />3Cat1–4 Free Night의 가치를
            달러로 입력합니다.
          </li>
          <li>
            <strong>Cat1–7 FN($)</strong>: <br />6Cat1–7 Free Night의 가치를
            달러로 입력합니다.
          </li>
          <li>
            <strong>GOH($)</strong>: <br />Guest of Honor award의 가치를 달러로
            입력합니다.
          </li>
          <li>
            <strong>Club Access($)</strong>: <br />Club Access Award의 가치를
            달러로 입력합니다.
          </li>
          <li>
            <strong>Suite Upgrade($)</strong>: <br />Suite Upgrade Award의
            가치를 달러로 입력합니다.
          </li>
        </ul>
      </li>
      <br />

      <li>
        <h3>
          🎯
          <strong>마일스톤 선택 (30/40/50박)</strong> 의미있는 항목만 넣었습니다
        </h3>

        <ul>
          <li>
            <strong>30박:</strong>
            <ul>
              <li><em>2K Points</em>: 2,000 포인트 추가 적립.</li>
              <li><em>2 Club Access</em>: 2회의 Club Access 보상</li>
            </ul>
          </li>
          <li>
            <strong>40박:</strong>
            <ul>
              <li><em>5K Points</em>: 5,000 포인트 추가 적립</li>
              <li><em>1 Suite Upgrade</em>: 1회의 Suite Upgrade 보상</li>
            </ul>
          </li>
          <li>
            <strong>50박:</strong>
            <ul>
              <li><em>5K Points</em>: 5,000 포인트 추가 적립</li>
              <li><em>2 Suite Upgrade</em>: 2회의 Suite Upgrade 보상</li>
            </ul>
          </li>
        </ul>
      </li>
      <br />
      <li>
        <h3>📈 <strong>결과 출력</strong></h3>
        <ul>
          <li>
            <strong>매트리스런 박 수:</strong>
            <br />올해 목표인 60박 달성을 위해 추가로 필요한 매트리스런 숙박 박
            수가 계산되어 표시됩니다.
          </li>
          <li>
            <strong>매트리스런 포인트 적립 가치:</strong>
            <br />매트리스런 비용에 기반하여 적립된 포인트의 총 금전적 가치($)가
            산출됩니다.
          </li>
          <li>
            <strong>마일스톤 리워드 가치:</strong>
            <br />선택한 마일스톤 보상 옵션에 따른 보상의 총 가치($)가
            계산됩니다.
          </li>
          <li>
            <strong>내년 Globalist 숙박 혜택:</strong>
            <br />내년에 제공받을 수 있는 Globalist 숙박 혜택의 총 가치($)가
            표시됩니다.
          </li>
          <li>
            <strong>총 혜택:</strong>
            <br />내년 받을 수 있는 모든 혜택(숙박 혜택, 마일스톤 보상, 포인트
            적립 가치)을 합산한 값($)이 계산됩니다.
          </li>
          <li>
            <strong>매트리스런 비용:</strong>
            <br />매트리스런을 할 때 드는 총 비용($)이 산출됩니다.
          </li>
          <li>
            <strong>내가 얻는 가치(넷):</strong>
            <br />총 혜택에서 매트리스런 비용을 차감한 순 이득($)이 최종적으로
            표시됩니다.
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.app-details {
  max-width: 800px;
  margin: auto;
  text-align: left;
  padding: 20px;
}

h1 {
  color: #42b983;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  font-size: 18px;
  margin: 10px 0;
}

button {
  padding: 10px 15px;
  margin-top: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369870;
}

.back-btn {
  margin-top: 20px;
}
</style>
