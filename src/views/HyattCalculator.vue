<template>
  <div class="header-container">
    <h1>Hyatt Mattress run Calculator</h1>
    <router-link to="/hyatt-mattress-run" class="how-to-button">
      <span class="desktop-text">사용법?</span>
      <span class="mobile-text">사용법?</span>
    </router-link>
  </div>
  <div>
    <!-- === 올해 매트리스런 설정 === -->
    <div class="header-with-button">
      <h3>올해 매트리스런</h3>
    </div>
    <div class="form-row">
      <div class="label-group">
        <label>
          <span>올해 실제 숙박(박)</span>
          <input type="number" v-model.number="thisYearOrganicNights" />
        </label>
      </div>
      <div class="label-group">
        <label>
          <span>매트리스런 1박($)</span>
          <input
            type="number"
            step="0.01"
            v-model.number="mattressRunCostPerNight"
          />
        </label>
      </div>
      <div class="label-group">
        <label>
          <span>내년 실제 숙박</span>
          <input type="number" v-model.number="nextYearOrganicNights" />
        </label>
      </div>
    </div>

    <!-- === 매트리스런 포인트 적립 === -->
    <h3>매트리스런 포인트 적립</h3>
    <div class="form-row">
      <div class="label-group">
        <label>
          <span>보너스(%) (티어에 따라)</span>
          <input
            type="number"
            step="0.01"
            v-model.number="globalistBonusPercent"
          />
        </label>
      </div>
      <div class="label-group">
        <label>
          <span>1포인트 가치($):</span>
          <input
            type="number"
            step="0.0001"
            v-model.number="pointValuePerPoint"
          />
        </label>
      </div>
    </div>

    <!-- === 마일스톤 아이템(1개) 가치 === -->
    <h3>마일스톤 가치</h3>
    <div class="form-row">
      <div class="label-group">
        <label>
          <span>Globalist 1박당($)</span>
          <input
            type="number"
            step="1"
            v-model.number="nextYearGlobalistPerNightValue"
          />
        </label>
      </div>
      <div class="label-group">
        <label>
          <span>Cat1–4 FN($)</span>
          <input type="number" step="1" v-model.number="cat14Value" />
        </label>
      </div>
      <div class="label-group">
        <label>
          <span>Cat1–7 FN($)</span>
          <input type="number" step="1" v-model.number="cat17Value" />
        </label>
      </div>
    </div>
    <div class="form-row">
      <div class="label-group">
        <label>
          <span>GOH($)</span>
          <input type="number" step="1" v-model.number="gohValue" />
        </label>
      </div>
      <div class="label-group">
        <label>
          <span>Club Access($)</span>
          <input type="number" step="1" v-model.number="clubAccessValue" />
        </label>
      </div>
      <div class="label-group">
        <label>
          <span>Suite Upgrade($)</span>
          <input type="number" step="1" v-model.number="suiteUpgradeValue" />
        </label>
      </div>
    </div>
  </div>

  <!-- === 마일스톤 선택(30/40/50박) === -->
  <h3>마일스톤 선택(30/40/50박)</h3>
  <div class="form-row">
    <div class="label-group">
      <label>
        30박:
        <select class="milestone-select" v-model="milestone30Choice">
          <option value="2K Points">2K Points</option>
          <option value="2 Club Access">2 Club Access</option>
        </select>
      </label>
    </div>
    <div class="label-group">
      <label>
        40박:
        <select class="milestone-select" v-model="milestone40Choice">
          <option value="5K Points">5K Points</option>
          <option value="1 Suite Upgrade">1 Suite Upgrade</option>
        </select>
      </label>
    </div>

    <div class="label-group">
      <label>
        50박:
        <select class="milestone-select" v-model="milestone50Choice">
          <option value="5K Points">5K Points</option>
          <option value="2 Suite Upgrade">2 Suite Upgrade</option>
        </select>
      </label>
    </div>
  </div>
  <br />

  <!-- === 결과 출력 === -->
  <div v-if="scenarioResult">
    <h3>결과</h3>
    <div>
      <strong></strong>
      <p>매트리스런 박 수: {{ scenarioResult.Scenario_B.Nights_Needed }}박</p>
      <p>
        매트리스런 포인트 적립 가치: ${{
          scenarioResult.Scenario_B.Value_of_MR_Points.toFixed(0)
        }}
      </p>
      <p>
        마일스톤 리워드 가치: ${{
          scenarioResult.Scenario_B.Next_Year_Benefit_Milestone.toFixed(0)
        }}
      </p>
      <p>
        내년 Globalist 숙박 혜택: ${{
          scenarioResult.Scenario_B.Next_Year_Benefit_Globalist.toFixed(0)
        }}
      </p>
      <strong
        >총 혜택: ${{
          scenarioResult.Scenario_B.Total_Value_Next_Year.toFixed(0)
        }}</strong
      >
    </div>
    <br />

    <div>
      <strong>
        매트리스런 비용:${{
          scenarioResult.Scenario_B.Mattress_Run_Cost.toFixed(0)
        }}
      </strong>
    </div>
    <br />

    <div>
      <strong
        >내가 얻는 가치(넷) <br />
        = ${{ scenarioResult.Scenario_B.Net.toFixed(0) }}</strong
      >
    </div>
  </div>
  <br />
</template>

<script>
export default {
  name: 'GlobalistCalculator',
  data() {
    return {
      // === 올해 ===
      thisYearOrganicNights: 25,
      requiredNightsForGlobalist: 60,
      mattressRunCostPerNight: 80.0,

      // === 내년 ===
      nextYearOrganicNights: 25,
      nextYearGlobalistPerNightValue: 100.0,

      // === 포인트 적립 ===
      basePointsPerDollar: 5.0,
      globalistBonusPercent: 30.0,
      pointValuePerPoint: 0.017,

      // === 마일스톤 아이템(1개) 가치 ===
      cat14Value: 150.0,
      cat17Value: 300.0,
      gohValue: 60.0,
      clubAccessValue: 20.0,
      suiteUpgradeValue: 100.0,

      // === 마일스톤 선택(30/40/50박) ===
      milestone30Choice: '2K Points',
      milestone40Choice: '1 Suite Upgrade',
      milestone50Choice: '2 Suite Upgrade'
    }
  },
  computed: {
    scenarioResult() {
      return this.globalistValueNextYear(
        // 올해
        this.thisYearOrganicNights,
        this.requiredNightsForGlobalist,
        this.mattressRunCostPerNight,

        // 내년
        this.nextYearOrganicNights,
        this.nextYearGlobalistPerNightValue,

        // 포인트
        this.basePointsPerDollar,
        this.globalistBonusPercent,
        this.pointValuePerPoint,

        // 마일스톤 아이템 가치
        this.cat14Value,
        this.cat17Value,
        this.gohValue,
        this.clubAccessValue,
        this.suiteUpgradeValue,

        // 마일스톤 선택
        this.milestone30Choice,
        this.milestone40Choice,
        this.milestone50Choice
      )
    }
  },

  methods: {
    /**
     * 매트리스런으로 올해 60박 달성 시, 내년에 얻는 가치 계산
     * (기존 Python globalist_value_next_year 함수를 JS로 포팅)
     */
    globalistValueNextYear(
      // 올해
      thisYearOrganicNights,
      requiredNightsForGlobalist,
      mattressRunCostPerNight,

      // 내년
      nextYearOrganicNights,
      nextYearGlobalistPerNightValue,

      // 포인트 적립
      basePointsPerDollar,
      globalistBonusPercent,
      pointValuePerPoint,

      // 마일스톤 아이템(1개) 가치
      cat14Value,
      cat17Value,
      gohValue,
      clubAccessValue,
      suiteUpgradeValue,

      // 마일스톤 선택
      milestone30Choice,
      milestone40Choice,
      milestone50Choice
    ) {
      // === 시나리오 A: 매트리스런 안 함 ===
      const scenarioA_AdditionalCost = 0.0
      const scenarioA_AdditionalValueNextYear = 0.0 // Globalist 미달 → 혜택 0
      const scenarioA_Net =
        scenarioA_AdditionalValueNextYear - scenarioA_AdditionalCost

      // === 시나리오 B: 매트리스런으로 60박 달성 ===
      // (1) 올해 부족 박 수
      let nightsNeeded = requiredNightsForGlobalist - thisYearOrganicNights
      if (nightsNeeded < 0) {
        nightsNeeded = 0 // 이미 초과 달성 시 0으로
      }

      // (2) 매트리스런 총 비용
      const scenarioB_MattressRunCost = nightsNeeded * mattressRunCostPerNight

      // (3) 올해 총 박 수
      const totalNightsYear1 = thisYearOrganicNights + nightsNeeded

      // (4) 올해 마일스톤 리워드(내년에 사용)
      let milestoneValueForNextYear = 0.0

      // 30박: Cat1-4 Free Night + [2K Points or 2 Club Access]
      if (totalNightsYear1 >= 30) {
        milestoneValueForNextYear += cat14Value

        if (milestone30Choice === '2K Points') {
          milestoneValueForNextYear += 2000 * pointValuePerPoint
        } else {
          milestoneValueForNextYear += 2 * clubAccessValue
        }
      }

      // 40박: 1 GOH + [5K Points or 1 Suite Upgrade]
      if (totalNightsYear1 >= 40) {
        milestoneValueForNextYear += gohValue

        if (milestone40Choice === '5K Points') {
          milestoneValueForNextYear += 5000 * pointValuePerPoint
        } else {
          milestoneValueForNextYear += suiteUpgradeValue
        }
      }

      // 50박: [5K Points or 2 Suite Upgrade]
      if (totalNightsYear1 >= 50) {
        if (milestone50Choice === '5K Points') {
          milestoneValueForNextYear += 5000 * pointValuePerPoint
        } else {
          milestoneValueForNextYear += 2 * suiteUpgradeValue
        }
      }

      // 60박: 2 GOH + Cat1–7 FN + 2 Suite Upgrade
      let scenarioB_GlobalistValueNextYear = 0.0
      if (totalNightsYear1 >= 60) {
        milestoneValueForNextYear += 2 * gohValue
        milestoneValueForNextYear += cat17Value
        milestoneValueForNextYear += 2 * suiteUpgradeValue

        // 내년 숙박(Globalist 혜택)
        scenarioB_GlobalistValueNextYear =
          nextYearOrganicNights * nextYearGlobalistPerNightValue
      } else {
        // 60박 미달
        scenarioB_GlobalistValueNextYear = 0.0
        milestoneValueForNextYear = 0.0 // 리워드도 없음
      }

      // (5) 매트리스런 지불금에 대한 포인트 적립 가치
      // = 달러당 base_points_per_dollar *0.8(세금 제외) × (1 + 보너스%) → (포인트 × point_value)
      const scenarioB_Points =
        scenarioB_MattressRunCost *
        0.8 *
        basePointsPerDollar *
        (1 + globalistBonusPercent / 100)

      const scenarioB_PointsValue = scenarioB_Points * pointValuePerPoint

      // (7) 내년 총 혜택
      const scenarioB_TotalValueNextYear =
        scenarioB_GlobalistValueNextYear +
        milestoneValueForNextYear +
        scenarioB_PointsValue

      // (8) 순 가치(넷)
      const scenarioB_Net =
        scenarioB_TotalValueNextYear - scenarioB_MattressRunCost

      return {
        Scenario_A: {
          Next_Year_Benefit: scenarioA_AdditionalValueNextYear,
          Additional_Cost: scenarioA_AdditionalCost,
          Net: scenarioA_Net
        },
        Scenario_B: {
          Nights_Needed: nightsNeeded,
          Mattress_Run_Cost: scenarioB_MattressRunCost,
          Next_Year_Benefit_Globalist: scenarioB_GlobalistValueNextYear,
          Next_Year_Benefit_Milestone: milestoneValueForNextYear,
          Value_of_MR_Points: scenarioB_PointsValue,
          Total_Value_Next_Year: scenarioB_TotalValueNextYear,
          Net: scenarioB_Net
        }
      }
    }
  }
}
</script>

<style>
/* Base styles */
body {
  background-color: #f5f7fa !important;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  line-height: 1.5;
  color: #1a1a1a;
}

/* Main container */
div {
  max-width: 800px;
  margin: 0.1rem auto;
  padding: 0 1rem;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.how-to-button {
  padding: 0.5rem 1rem;
  background-color: #4299e1;
  color: #fff;
  text-decoration: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  white-space: nowrap;
  transition: background-color 0.2s;
}

.how-to-button .mobile-text {
  display: none;
  white-space: nowrap;
  font-size: 1.2rem; /* 기본 폰트 크기보다 크게 설정 */
  padding: 1rem 0.5rem;
}

.how-to-button:hover {
  background-color: #2b6cb0;
}

/* Section headers */
h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0.5rem 0 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

/* Form sections */
.form-row {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    200px
  ); /* 각 항목의 너비를 200px로 고정 */
  gap: 0.5rem;
  justify-content: start;
}

.label-group {
  flex: 1;
  min-width: 100px;
  text-align: left;
}

/* Input container */
.input-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 0.5rem;
}

/* Labels */
label {
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
}

/* Input fields */
input,
select {
  padding: 0.625rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s;
  width: 30%;
  background: white;
}

/* milestone-selection 클래스를 가진 div의 폭을 조정 */
.milestone-select {
  border-radius: 0.25rem; /* 예시: 둥근 모서리 */
  padding: 0.5rem; /* 예시: 안쪽 여백 */
  width: 120%; /* 예시: 폭 조정 */
}

input:focus,
select:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
}

input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
  text-align: right;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Readonly inputs */
.readonly {
  background-color: #f7fafc;
  border-color: #edf2f7;
  color: #4a5568;
  font-weight: 600;
  cursor: not-allowed;
}

/* Select dropdowns */
select {
  cursor: pointer;
  padding-right: 2rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234a5568'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Results section */
div[v-if='scenarioResult'] {
  background: linear-gradient(to bottom right, #2b6cb0, #4299e1);
  color: rgb(192, 65, 65);
  padding: 2rem;
  border-radius: 0.75rem;
  margin-top: 2rem;
}

div[v-if='scenarioResult'] h2 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

div[v-if='scenarioResult'] p {
  margin: 0.75rem 0;
  font-size: 1rem;
}

div[v-if='scenarioResult'] strong {
  display: block;
  font-size: 1.25rem;
  margin: 1rem 0;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .form-row {
    flex-direction: column;
  }
  .label-group {
    width: 100%;
  }
  label {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  .how-to-button .desktop-text {
    display: none;
  }
  .how-to-button .mobile-text {
    display: inline;
    white-space: nowrap; /* 모바일 텍스트에도 적용 */
  }
  .input-row {
    grid-template-columns: 1fr;
  }
  input,
  select {
    font-size: 1rem;
    padding: 0.75rem;
    width: 100%;
  }
}
</style>
