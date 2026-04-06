import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">지하철</div>
          <div />
          <div className="content">
            <span className="label">9호선</span> - 국회의사당역 3번 출구 (도보 5분)<br />
            <span className="label">5호선</span> - 여의나루역 1번 출구<br />
            <span className="point">★ 여의나루역 무료 셔틀버스 운영 ★</span>
          </div>
          <div />
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">버스</div>
          <div />
          <div className="content">
            <span className="label">기계회관 하차</span> - 10, 영등포10<br />
            <span className="label">산업은행본점 하차</span> - 10, 463, 영등포10<br />
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            <span className="label">더파티움 여의도</span> - 서울 영등포구 은행로 30<br />
            <span className="point">예식장(중소기업중앙회관) 건물 내 90분 무료</span>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
