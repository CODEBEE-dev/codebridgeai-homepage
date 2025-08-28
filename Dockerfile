FROM nginx:stable-alpine

# 빌드된 dist 폴더를 nginx의 기본 디렉토리로 복사
COPY dist/ /usr/share/nginx/html/

# nginx 설정 파일이 있다면 복사 (선택사항)
# COPY nginx/nginx.conf /etc/nginx/nginx.conf

# nginx8080 5000에서 실행되도록 설정
RUN sed -i 's/listen\s*80;/listen 5000;/' /etc/nginx/conf.d/default.conf

EXPOSE 5000

# nginx를 포그라운드에서 실행
CMD ["nginx", "-g", "daemon off;"]
