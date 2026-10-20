const randomDate = new Date(Date.now() - (10 + Math.random() * 90) * 365 * 86400000);
const rrnPre =
  String(randomDate.getFullYear()).slice(2) +
  String(randomDate.getMonth() + 1).padStart(2, '0') +
  String(randomDate.getDate()).padStart(2, '0') +
  String(Math.floor(Math.random() * 10 ** 6));

const cnOrigin = String(Math.floor((4 + 3 * Math.random()) * 10 ** 15));
const telOrigin = `01${Math.floor(Math.random() * 10 ** 9)}`;

let rrnSum = 0;
[2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6].forEach((e, i) => {
  rrnSum += Number(rrnPre[i]) * e;
});

const rrnOrigin = rrnPre + String((11 - (rrnSum % 11)) % 10);

const searchType = [
  {
    type: '주민등록번호',
    origin: rrnOrigin,
    seperated: `${rrnOrigin.slice(0, 6)}-${rrnOrigin.slice(6)}`,
    blind: `${rrnOrigin.slice(0, 6)}-${rrnOrigin.slice(6, 7)}******`,
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
];
const copy = (str: string) => {
  navigator.clipboard.writeText(str);
};

export default function App() {
  return (
    <>
      <main>
        {searchType.map(({ type, origin, seperated, blind }) => {
          return (
            <div key={type}>
              <label
                htmlFor={type}
                onClick={(e) => {
                  e.preventDefault();
                  copy(seperated);
                }}
              >
                {type}
              </label>
              <input
                id={type}
                type="text"
                inputMode="numeric"
                value={blind}
                readOnly
                onFocus={({ target }) => {
                  target.value = origin;
                }}
                onBlur={({ target }) => {
                  target.value = blind;
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  copy(seperated);
                  alert('복사되었습니다.');
                }}
              />
            </div>
          );
        })}
      </main>
    </>
  );
}
