const idOrigin = String(Math.floor(Math.random() * 10 ** 13))
const cnOrigin = String(Math.floor((4 + 3 * Math.random()) * 10 ** 15))
const telOrigin = `01${Math.floor(Math.random() * 10 ** 9)}`

const searchType = [
  {
    type: '주민등록번호',
    origin: idOrigin,
    seperated: `${idOrigin.slice(0, 6)}-${idOrigin.slice(6)}`,
    blind: `${idOrigin.slice(0, 6)}-${idOrigin.slice(6, 7)}******`,
  },
  {
    type: '카드번호',
    origin: cnOrigin,
    seperated: `${cnOrigin.slice(0, 4)}-${cnOrigin.slice(4, 8)}-${cnOrigin.slice(8, 12)}-${cnOrigin.slice(12)}`,
    blind: `${cnOrigin.slice(0, 4)}-****-****-${cnOrigin.slice(12)}`,
  },
  {
    type: '전화번호',
    origin: telOrigin,
    seperated: `${telOrigin.slice(0, 3)}-${telOrigin.slice(3, 7)}-${telOrigin.slice(7)}`,
    blind: `${telOrigin.slice(0, 3)}-****-${telOrigin.slice(7)}`,
  },
]

console.log(searchType)

const copy = (str: string) => {
  navigator.clipboard.writeText(str)
}

export default function App() {
  return (
    <>
      <main>
        {searchType.map(({ type, origin, seperated, blind }) => {
          return (
            <div key={type}>
              <h3>{type}</h3>
              <input
                type="text"
                inputMode="numeric"
                value={blind}
                onFocus={({ target }) => {
                  target.value = origin
                }}
                onBlur={({ target }) => {
                  target.value = blind
                }}
                onContextMenu={e => {
                  e.preventDefault()
                  copy(seperated)
                  alert('복사되었습니다.')
                }}
              />
            </div>
          )
        })}
      </main>
    </>
  )
}
