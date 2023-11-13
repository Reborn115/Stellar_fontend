# 使用一个基础镜像
FROM node:lts-alpine

# 设置工作目录
WORKDIR /app

# 复制项目的依赖文件到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 构建项目
RUN npm run build

# 定义容器启动时执行的命令
CMD [ "npm", "run", "serve" ]