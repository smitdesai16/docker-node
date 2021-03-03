# docker-node

## Development Run
```bash
node index.js
```

## Docker Run
```bash
docker build -t docker-node .
docker run -p 80:3000 -d docker-node
```