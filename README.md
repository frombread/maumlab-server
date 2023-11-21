## 구현 방법

- 데이터베이스는 postgresql를 활용하였고
- 설문지, 문항, 선택지, 답변을 각각 데이터베이스로 만들었습니다.
- graphql을 활용하여 CRUD를 구축했습니다.

## 어려웠던 점

- 데이터베이스간의 관계성을 연결하는 부분
- 관계를 코드에서 연결하는 부분
- GraphQL을 처음 접해서 어려웠다.

### 실행방법

```bash
git clone https://github.com/frombread/maumlab-server.git
```

```bash
cd maumlab-server

npm install

npm run start

localhost:4000
```
