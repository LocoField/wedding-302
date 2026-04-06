import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-05-30 11:00", "Asia/Seoul")
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 켈린더에 표시하기 위함.
// 예: 예식일 8월 -> 8월 15일 광복절
export const HOLIDAYS = [5, 25]

export const LOCATION = "더파티움 여의도 파티움홀"
export const LOCATION_ADDRESS = "서울 영등포구 은행로 30 2층"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
// LOCATION 과 동일하게 설정해도 무방하나, 필요에 따라 좀 더 상세히 작성 가능.
export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [경도, 위도] 형식.
export const WEDDING_HALL_POSITION = [126.922482, 37.528222]

// 네이버 지도의 웨딩홀 장소 ID
// 네이버 지도 웹페이지에서 웨딩홀 검색 후 URL에서 확인 가능.
// 예: https://map.naver.com/p/entry/place/1018318622 -> 1018318622
export const NMAP_PLACE_ID = 1018318622

// 카카오 지도의 웨딩홀 장소 ID
// 카카오 지도 웹페이지에서 웨딩홀 검색 후 해당 장소에서 상세보기 클릭 시 URL에서 확인 가능.
// 예: https://place.map.kakao.com/1485166493 -> 1485166493
export const KMAP_PLACE_ID = 1485166493

export const BRIDE_FULLNAME = "한정아"
export const BRIDE_FIRSTNAME = "정아"
export const BRIDE_TITLE = "장녀"
export const BRIDE_FATHER = "한도희"
export const BRIDE_MOTHER = "조은주"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-4645-4341",
    account: "하나은행 106-910844-46907",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-9249-4341",
    account: "국민은행 214-21-0385-096",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-7338-4349",
    account: "기업은행 356-031737-01014",
  },
]

export const GROOM_FULLNAME = "고은상"
export const GROOM_FIRSTNAME = "은상"
export const GROOM_TITLE = "차남"
export const GROOM_FATHER = "고창기"
export const GROOM_MOTHER = "김순임"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-2759-2552",
    account: "기업은행 010-2759-2552",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-2612-2525",
    account: "농협 658-02038-491",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-2608-2525",
    account: "",
  },
]
