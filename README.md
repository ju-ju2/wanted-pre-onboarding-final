#### 과제 소개 👩🏻‍💻

---

질환 검색 시 api 호출을 통해 검색어 추천 기능을 구현하였습니다. (해당 프로젝트는 원티드에서 제공되는 api를 사용하였습니다.)

![실행 화면](https://github.com/ju-ju2/wanted-pre-onboarding-final/assets/71650663/6fcfae6b-dd5c-4875-add7-d60a7b065025)

#### 과제 구현 포인트 🚀

---

- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행  
  ![타이머 함수를 통한 api 호출 줄이기](https://github.com/ju-ju2/wanted-pre-onboarding-final/assets/71650663/f8e1bea8-1be1-4352-af4b-8487fdb5269a)
  <br />
  타이머 함수를 이용하여 useDebounce 커스텀 훅을 생성하였습니다. input 요소에서 onChange 이벤트가 일어날 때 setKeyword 를 할당시키고, 타이머 함수를 적용하여 debouncedKeyword를 재할당합니다. 최종적으로 할당된 debouncedKeyword를 바탕으로 api가 호출됩니다.
  <br />  
  <br />

- API 호출별로 로컬 캐싱 구현  
  ![캐싱 확인](https://github.com/ju-ju2/wanted-pre-onboarding-final/assets/71650663/4bf08ffc-6812-48a3-8877-f3aea2976891)  
  <br />
  useCache 커스텀 훅을 생성하여 캐시를 따로 관리해주고 있습니다. 한번 검색된 캐시는 cache 객체에 할당되고, 중복된 키워드를 검색하면 캐시의 가장 마지막 인덱스에 재할당 됩니다. 캐시의 길이는 최대 10이며, 10을 넘어가면 가장 오래된 키워드가 삭제되고 최신 키워드와 데이터가 할당됩니다.
  <br />
  <br />
- 키보드만으로 추천 검색어들로 이동 가능하도록 구현  
  ![검색어 이동](https://github.com/ju-ju2/wanted-pre-onboarding-final/assets/71650663/e726db7b-9522-4745-9d09-0cdee0288ae5)
  <br />  
  onKeyDown 으로 키보드 이벤트를 감지합니다. 방향키에 따라 추천 검색어를 이동할 수 있습니다.
