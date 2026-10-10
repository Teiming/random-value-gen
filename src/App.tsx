const card = Math.floor((4 + 3 * Math.random()) * 10 ** 15)
const card_ = `${String(card).slice(0, 4)}-${String(card).slice(4, 8)}-${String(card).slice(8, 12)}-${String(card).slice(12)}`
const id = Math.floor(Math.random() * 10 ** 13)
const id_ = `${String(id).slice(0, 6)}-${String(id).slice(6)}`
const phone = Math.floor(Math.random() * 10 ** 9)
const phone_ = `01${String(phone).slice(0, 1)}-${String(phone).slice(1, 5)}-${String(phone).slice(5)}`

const copy = (str: string) => {
  navigator.clipboard.writeText(str)
}

export default function App() {
  return (
    <>
      <main>
        <div>
          <h3>주민등록번호</h3>
          <input type="text" inputMode="numeric" value={id} />
          <button
            onClick={() => {
              copy(String(id))
            }}
          >
            복사
          </button>
        </div>
        <div>
          <h5>{id_}</h5>
        </div>
        <div>
          <h3>전화번호</h3>
          <input type="number" value={'01' + phone} />
          <button
            onClick={() => {
              copy(String('01' + phone))
            }}
          >
            복사
          </button>
        </div>
        <div>
          <h5>{phone_}</h5>
        </div>
        <div>
          <h3>카드번호</h3>
          <input type="number" value={card} />
          <button
            onClick={() => {
              copy(String(card))
            }}
          >
            복사
          </button>
        </div>
        <div>
          <h5>{card_}</h5>
        </div>
      </main>
    </>
  )
}
